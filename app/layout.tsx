import type { Metadata } from "next";
import "../public/css/globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import ToUp from "@/components/ToUp";

export const metadata: Metadata = {
  title: "Coffee Services",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-back text-white uppercase font-semibold">
        <Navbar/>
        {children}
        <Footer/>
        <ToUp/>
      </body>
    </html>
  );
}

