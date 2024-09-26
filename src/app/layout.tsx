import type { Metadata } from "next";
import { Playfair_Display, Roboto, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Row } from "@/components/misc/Row";
import HomeGradients from "@/components/misc/HomeGradients";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/layout/Footer";
import { getAllCategories } from "@/actions/data-actions";
import GlobalDataProvider from "@/contexts/GlobalDataProvider";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getAllCategories();

  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-600"
    >
      <body
        className={`${roboto.variable} ${playfair.variable} ${workSans.variable} relative bg-black bg-gradient-to-r font-sans text-white antialiased`}
      >
        <HomeGradients />
        <SessionProvider>
          <GlobalDataProvider categories={categories}>
            <Row className="flex min-h-screen flex-col">
              <Navbar />
              {children}
              <Toaster
                toastOptions={{
                  className: "text-2xl",
                }}
              />
              <Footer />
            </Row>
          </GlobalDataProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
