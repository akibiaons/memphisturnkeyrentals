import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/hooks/auth/useAuth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Memphis Turnkey Rentals",
  description:
    "Real estate investments with CASHFLOW in Memphis, invest with MTR from anywhere and gain financial freedom!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
