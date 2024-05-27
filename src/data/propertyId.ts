// Fetching more detailed property data from the same endpoints as /listing and /buildtorent
import axios from "axios";

interface DetailedProperty {
  id: string;
  images: string[];
  price: number;
  address: string;
  description: string;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  neighborhoodScore: number;
  targetMonthlyRent: number;
  cashOnCashReturn: number;
  monthlyCashFlow: number;
  fiveYearProjectedReturn: number;
  occupancyStatus: string;
  homeType: string;
}

// Might have to change how I am calling based on the structure of the JSON, so look out for the same errors as before
export const fetchPropertyDetails = async (
  id: string
): Promise<DetailedProperty | null> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/forpurchases/${id}?populate=*`;
    const response = await axios.get(apiUrl);
    console.log("API Response:", response.data); // Log the response for inspection
    if (response.data && response.data.data) {
      const attributes = response.data.data.attributes || {};
      const propertyImg = attributes.sellImg?.data || [];
      return {
        id: response.data.data.id,
        address: attributes.sellAddress || "N/A",
        images: propertyImg.map((img: any) =>
          img.attributes.url.startsWith("http")
            ? img.attributes.url
            : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.attributes.url}`
        ),
        price: attributes.sellPrice || 0,
        description: attributes.description || "",
        beds: attributes.sellBed || 0,
        baths: attributes.sellBath || 0,
        sqft: attributes.sellSqft || 0,
        yearBuilt: attributes.yearBuilt || 0,
        neighborhoodScore: attributes.neighborhoodScore || 0,
        targetMonthlyRent: attributes.targetMonthlyRent || 0,
        cashOnCashReturn: attributes.cashOnCashReturn || 0,
        monthlyCashFlow: attributes.monthlyCashFlow || 0,
        fiveYearProjectedReturn: attributes.fiveYearProjectedReturn || 0,
        occupancyStatus: attributes.occupancyStatus || "",
        homeType: attributes.homeType || "",
      };
    } else {
      throw new Error("Invalid API response structure");
    }
  } catch (error) {
    console.error("Failed to fetch property:", error);
    return null;
  }
};
