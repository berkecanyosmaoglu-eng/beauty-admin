import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beauty Admin",
  description: "Beauty SaaS admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}