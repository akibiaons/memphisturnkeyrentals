import { NextRequest, NextResponse } from "next/server";
import { makePodioRequest } from "@/utils/podioClient";

console.log("PODIO_NEWSLETTER_APP_ID:", process.env.PODIO_NEWSLETTER_APP_ID);
console.log(
  "PODIO_NEWSLETTER_APP_TOKEN:",
  process.env.PODIO_NEWSLETTER_APP_TOKEN
);

export async function POST(req) {
  const { email } = await req.json();

  console.log("Received email:", email);

  try {
    const podioResponse = await makePodioRequest(
      `/item/app/${process.env.PODIO_NEWSLETTER_APP_ID}/`,
      "POST",
      {
        fields: {
          email: [
            {
              type: "other",
              value: email,
            },
          ],
        },
      }
    );

    return NextResponse.json({
      message: "Subscribed successfully",
      podioResponse,
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { message: "Error subscribing", error },
      { status: 500 }
    );
  }
}
