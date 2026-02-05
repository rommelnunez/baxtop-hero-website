import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Header } from "@/components/Header";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Baxtop | Creative Studio",
  description: "we design videos/photos/identities for brands/artists/paul’s dad’s iraq-based juice company.",
  icons: {
    icon: '/favicon.ico', // Placeholder
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.variable}>
        <Providers>
          <Header />
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
