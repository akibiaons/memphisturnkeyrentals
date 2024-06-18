import axios from "axios";

interface Project {
  id: number;
  images: string[];
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  latitude: number | null;
  longitude: number | null;
  description: string;
  propertyType: string;
  yearBuilt: number;
  occupancyStatus: string;
  listingStatus: string;
  actualMonthlyRent: number;
  projectedMonthlyRent: number;
}

export const fetchProject = async (id: string): Promise<Project | null> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects/${id}?populate=*`;
    const response = await axios.get(apiUrl);

    if (response.data && response.data.data) {
      const attributes = response.data.data.attributes || {};
      const imagesData = attributes.propertyImg?.data || [];

      const images = imagesData.map((img: any) => {
        const url = img.attributes.url;
        return url.startsWith("http")
          ? url
          : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
      });

      return {
        id: response.data.data.id,
        address: attributes.propertyAddress || "N/A",
        images,
        price: attributes.propertyPrice || 0,
        beds: attributes.beds || 0,
        baths: attributes.baths || 0,
        sqft: attributes.sqft || 0,
        latitude: attributes.latitude || null,
        longitude: attributes.longitude || null,
        description: attributes.propertyDesc || "",
        propertyType: attributes.propertyType || "",
        yearBuilt: attributes.yearBuilt || 0,
        occupancyStatus: attributes.occupancy || "",
        listingStatus: attributes.listingStatus || "",
        actualMonthlyRent: attributes.actualRent || 0,
        projectedMonthlyRent: attributes.projectedRent || 0,
      };
    } else {
      throw new Error("Invalid API response structure");
    }
  } catch (error) {
    console.error("Failed to fetch project:", error);
    return null;
  }
};
