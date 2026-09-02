import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Praktikum Routing & Navigasi Next.js - M. Bagas Irbany S",
  description: "Implementasi Routing dan Navigasi pada Next.js App Router (LKPD XI RPL A)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
