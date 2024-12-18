import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blu Bank PWA",
  description: "Refurbished by R9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-red-500`}>{children}</body>
    </html>
  );
}
