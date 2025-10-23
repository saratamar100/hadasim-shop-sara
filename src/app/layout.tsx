import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Hadasim Shop",
  description: "An online store for Hadasim products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  );
}
