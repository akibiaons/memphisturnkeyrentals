import axios from "axios";

interface Property {
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

export const fetchProperty = async (id: string): Promise<Property | null> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/forpurchases/${id}?populate=*`;
    const response = await axios.get(apiUrl);
    if (response.data && response.data.data) {
      const attributes = response.data.data.attributes || {};
      const propertyImg = attributes.propertyImg?.data || [];
      return {
        id: response.data.data.id,
        address: attributes.propertyAddress || "N/A",
        images: propertyImg.map((img: any) =>
          img.attributes.url.startsWith("http")
            ? img.attributes.url
            : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.attributes.url}`
        ),
        price: attributes.propertyPrice || 0,
        beds: attributes.beds || 0,
        baths: attributes.baths || 0,
        sqft: attributes.sqft || 0,
        latitude: attributes.latitude || 0,
        longitude: attributes.longitude || 0,
        description: attributes.propertyDesc || "",
        propertyType: attributes.propertyType || "",
        yearBuilt: attributes.yearBuilt || 0,
        occupancyStatus: attributes.propertyOccupancy || "",
        listingStatus: attributes.listingStatus || "",
        actualMonthlyRent: attributes.actualMonthlyRent || 0,
        projectedMonthlyRent: attributes.projectedMonthlyRent || 0,
      };
    } else {
      throw new Error("Invalid API response structure");
    }
  } catch (error) {
    console.error("Failed to fetch property:", error);
    return null;
  }
};
