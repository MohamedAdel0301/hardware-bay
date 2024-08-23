import type { Metadata } from "next";
import { Playfair_Display, Roboto, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Row } from "@/components/misc/Row";
import HomeGradients from "@/components/misc/HomeGradients";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-worksans",
});

export const metadata: Metadata = {
  title: "HWBay",
  description: "Your one-stop store for buying, selling, and trading hardware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-400"
    >
      <body
        className={`${roboto.variable} ${playfair.variable} ${workSans.variable} relative min-h-full overflow-y-scroll bg-black font-sans text-white antialiased`}
      >
        <HomeGradients />
        <Row>
          <Navbar />
          {children}
        </Row>
      </body>
    </html>
  );
}
