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

export const fetchBtrProperty = async (
  id: string
): Promise<BtrProperty | null> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/buildtorents/${id}?populate=*`;
    const response = await axios.get(apiUrl);
    if (response.data && response.data.data) {
      const attributes = response.data.data.attributes || {};
      const propertyImg = attributes.propertyImg?.data || [];
      return {
        id: response.data.data.id,
        images: propertyImg.map((img: any) =>
          img.attributes.url.startsWith("http")
            ? img.attributes.url
            : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.attributes.url}`
        ),
        propertyAddress: attributes.propertyAddress || "N/A",
        price: attributes.price || 0,
        beds: attributes.beds || 0,
        baths: attributes.baths || 0,
        sqft: attributes.sqft || 0,
        latitude: attributes.latitude || 0,
        longitude: attributes.longitude || 0,
        propertyDesc: attributes.propertyDesc || "",
        propertyType: attributes.propertyType || "",
        yearBuilt: attributes.yearBuilt || 0,
        occupancy: attributes.occupancy || "",
        propertyStatus: attributes.propertyStatus || "",
        actualRent: attributes.actualRent || 0,
        targetMonthlyRent: attributes.targetMonthlyRent || 0,
      };
    } else {
      throw new Error("Invalid API response structure");
    }
  } catch (error) {
    console.error("Failed to fetch property:", error);
    return null;
  }
};
