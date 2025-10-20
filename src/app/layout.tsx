import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSLVD.NET Dynamic DNS App",
  description: "Run Next.js with Deno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://demo-styles.deno.deno.net/styles.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
