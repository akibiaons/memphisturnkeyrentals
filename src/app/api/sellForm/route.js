import { NextRequest, NextResponse } from "next/server";
import { makePodioRequest } from "@/utils/podioClient";

console.log("PODIO_SELLER_APP_ID:", process.env.PODIO_SELLER_APP_ID);
console.log("PODIO_SELLER_APP_TOKEN:", process.env.PODIO_SELLER_APP_TOKEN);

export async function POST(req) {
  const { name, phone, email } = await req.json();

  console.log("Received data:", { name, phone, email });

  try {
    const podioResponse = await makePodioRequest(
      `/item/app/${process.env.PODIO_SELLER_APP_ID}/`,
      "POST",
      {
        fields: {
          title: name,
          phone: [
            {
              type: "mobile",
              value: phone,
            },
          ],
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
      message: "Form submitted successfully",
      podioResponse,
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { message: "Error submitting form", error },
      { status: 500 }
    );
  }
}
