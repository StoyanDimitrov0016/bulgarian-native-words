import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Родна Реч",
  description: "Речник с родни думи и редки изрази.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
