import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Mouse from "@/components/Mouse";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Nav/Navbar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Cyrus | Portfolio",
  description: "Director of Marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="  example">
      <Mouse />
      <body className={`${raleway.className} `}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            {children}
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
