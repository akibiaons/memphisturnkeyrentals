import type { Metadata } from "next";
import "./globals.css";

// Component imports
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Memphis Turnkey Rentals",
  description:
    "Real estate investments with CASHFLOW in Memphis, invest with MTR form anywhere and gain financial freedom!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
