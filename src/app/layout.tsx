import type { Metadata } from "next";
import { IBM_Plex_Sans, Chakra_Petch, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M.SHAHZAIB | Software Engineer Portfolio",
  description: "Full-stack engineer specializing in high-performance web architectures and human-centric interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${ibmPlex.variable} ${chakra.variable} ${jetbrainsMono.variable} font-body-base text-on-surface selection:bg-primary/30`}
      >
        <CustomCursor />
        <TopNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
