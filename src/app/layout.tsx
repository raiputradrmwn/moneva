import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/style/font";

export const metadata: Metadata = {
  title: "Moneva",
  description: "Created by Ailo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
