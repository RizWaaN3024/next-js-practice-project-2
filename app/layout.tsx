"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, [])
  return (
    <html lang="en">
      <head>
        <title>{metadata.title as React.ReactNode}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          // disableTransitionOnChange
        >
          {loading && <PreLoader setLoading={setLoading} />}
          {!loading && children}
        </ThemeProvider>
      </body>
    </html>
  );
}
