import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The beauty of May",
  description: "Sebuah buku cerita tentang perjalanan perasaan yang jujur. For Meiy.",
  openGraph: {
    title: "The beauty of May",
    description: "Sebuah buku cerita tentang perjalanan perasaan yang jujur.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">

      <body>
        {children}
      </body>
    </html>
  );
}
