import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const portada = localFont({
  src: [
    { path: "./fonts/PortadaTextARA-Bold.otf", style: "normal", weight: "700" },
    {
      path: "./fonts/PortadaTextARA-Book.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/PortadaTextARA-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PortadaTextARA-Semibold.otf",
      weight: "600",
    },
  ],
});

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
    <html lang="en" dir="rtl">
      <body className={`bg-slate-50 antialiased ${portada.className}`}>
        {children}
      </body>
    </html>
  );
}
