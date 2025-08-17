import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";
import { CookieProvider } from "@/context/CookieContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leelu.ai - AI Recruiting Copilot",
  description: "From Job Post to First Interview in 24 Hours",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CookieProvider>{children}</CookieProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
