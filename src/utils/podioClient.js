import fetch from "node-fetch";

const clientId = process.env.PODIO_CLIENT_ID;
const clientSecret = process.env.PODIO_CLIENT_SECRET;

console.log("PODIO_CLIENT_ID:", clientId);
console.log("PODIO_CLIENT_SECRET:", clientSecret);

let token = null;
let tokenExpiration = null;

async function getPodioToken() {
  if (!token || !tokenExpiration || new Date() >= tokenExpiration) {
    try {
      const response = await fetch("https://podio.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grant_type: "client_credentials",
          client_id: clientId,
          client_secret: clientSecret,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          `Podio token request failed: ${error.error_description}`
        );
      }

      const data = await response.json();
      token = data.access_token;
      tokenExpiration = new Date(new Date().getTime() + data.expires_in * 1000);
    } catch (error) {
      console.error("Error getting Podio token:", error);
      throw error;
    }
  }

  return token;
}

async function makePodioRequest(path, method, body) {
  try {
    const token = await getPodioToken();

    const response = await fetch(`https://api.podio.com${path}`, {
      method,
      headers: {
        Authorization: `OAuth2 ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error_description || "Podio request failed");
    }
    return data;
  } catch (error) {
    console.error("Error making Podio request:", error);
    throw error;
  }
}

export { getPodioToken, makePodioRequest };
