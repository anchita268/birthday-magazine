import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Y2K Birthday Magazine",
  description: "A glittery birthday magazine website made with Next.js and Tailwind CSS."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
