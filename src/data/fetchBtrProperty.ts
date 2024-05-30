import axios from "axios";

interface BtrProperty {
  id: string;
  images: string[];
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  latitude: number;
  longitude: number;
  description: string;
  propertyType: string;
  yearBuilt: number;
  occupancyStatus: string;
  listingStatus: string;
  actualMonthlyRent: number;
  projectedMonthlyRent: number;
}

export const fetchBtrProperty = async (
  id: string
): Promise<BtrProperty | null> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/buildtorents?populate=*`;
    const response = await axios.get(apiUrl);
    if (response.data && response.data.data) {
      return response.data.data.map((item: any) => {
        const attributes = item.attributes || {};
        const propertyImg = attributes.propertyImg?.data || {};
        return {
          id: item.id,
          address: attributes.propertyAddress || "N/A",
          images: propertyImg.map((img: any) =>
            img.attributes.url.startsWith("http")
              ? img.attributes.url
              : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.attributes.url}`
          ),
          price: attributes.price || 0,
          beds: attributes.beds || 0,
          baths: attributes.baths || 0,
          sqft: attributes.sqft || 0,
          latitude: attributes.latitude || 0,
          longitude: attributes.longitude || 0,
          description: attributes.propertyDesc || "",
          propertyType: attributes.propertyType || "",
          yearBuilt: attributes.yearBuilt || 0,
          occupancyStatus: attributes.occupancy || "",
          listingStatus: attributes.propertyStatus || "",
          actualMonthlyRent: attributes.actualRent || 0,
          projectedMonthlyRent: attributes.targetMonthlyRent || 0,
        };
      });
    } else {
      throw new Error("Invalid API response structure");
    }
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return null;
  }
};
