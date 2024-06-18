import axios from "axios";

interface BtrProperty {
  id: number;
  propertyAddress: string;
  latitude: number;
  longitude: number;
  beds: number;
  baths: number;
  sqft: number;
  price: number;
  propertyDesc: string;
  yearBuilt: number;
  occupancy: string;
  propertyStatus: string;
  actualRent: number;
  targetMonthlyRent: number;
  propertyType: string;
  images: string[];
}

export const fetchBtrListings = async (): Promise<BtrProperty[]> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/buildtorents?populate=*`;
    const response = await axios.get(apiUrl);
    if (response.data && response.data.data) {
      return response.data.data.map((item: any) => {
        const attributes = item.attributes || {};
        const images =
          attributes.propertyImg?.data?.map((img: any) =>
            img.attributes.url.startsWith("http")
              ? img.attributes.url
              : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.attributes.url}`
          ) || [];
        return {
          id: item.id,
          propertyAddress: attributes.propertyAddress,
          latitude: attributes.latitude,
          longitude: attributes.longitude,
          beds: attributes.beds,
          baths: attributes.baths,
          sqft: attributes.sqft,
          price: attributes.price,
          propertyDesc: attributes.propertyDesc,
          yearBuilt: attributes.yearBuilt,
          occupancy: attributes.occupancy,
          propertyStatus: attributes.propertyStatus,
          actualRent: attributes.actualRent,
          targetMonthlyRent: attributes.targetMonthlyRent,
          propertyType: attributes.propertyType,
          images: images,
        };
      });
    } else {
      throw new Error("Invalid API response structure");
    }
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return [];
  }
};
