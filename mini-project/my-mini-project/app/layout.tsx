import type { Metadata } from "next";
import Navbar from "./components/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Project Next",
  description: "Wiki Rocket",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
