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
}

export const fetchListings = async (apiUrl: string): Promise<Property[]> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/forpurchases?populate=*`;
    const response = await axios.get(apiUrl);
    if (response.data && response.data.data) {
      return response.data.data.map((item: any) => {
        const attributes = item.attributes || {};
        const propertyImg = attributes.sellImg?.data || [];
        return {
          id: item.id,
          address: attributes.sellAddress || "N/A",
          images: propertyImg.map((img: any) => img.attributes.url),
          price: attributes.sellPrice || 0,
          beds: attributes.sellBed || 0,
          baths: attributes.sellBath || 0,
          sqft: attributes.sellSqft || 0,
          latitude: attributes.latitude || 0,
          longitude: attributes.longitude || 0,
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
