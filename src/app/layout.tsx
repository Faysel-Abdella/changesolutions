import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Change Hub",
  description: "Change Hub Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className="overflow-x-hidden m-0 p-0 w-full h-full">
        {children}
      </body>
    </html>
  );
}
