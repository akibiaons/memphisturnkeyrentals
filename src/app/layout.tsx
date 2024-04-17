import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Component imports
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}`}>
        <div className="relative">
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
