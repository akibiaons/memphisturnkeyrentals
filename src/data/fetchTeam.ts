import axios from "axios";

interface TeamMember {
  id: number;
  profile: string;
  name: string;
  title: string;
}

export const fetchMembers = async (): Promise<TeamMember[]> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/teams?populate=*`;
    const response = await axios.get(apiUrl);

    if (response.data && response.data.data) {
      return response.data.data.map((item: any) => {
        const attributes = item.attributes || {};
        const profile = attributes.profilePicture?.data?.attributes || {};

        return {
          id: item.id,
          profile: profile.url.startsWith("http")
            ? profile.url
            : `${process.env.NEXT_PUBLIC_STRAPI_URL}${profile.url}`,
          name: attributes.name || "N/A",
          title: attributes.title || "N/A",
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
