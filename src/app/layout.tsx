import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

const spicyChips = localFont({
  src: "./spicy-chips.ttf",
  display: "swap",
  variable: "--font-spicy-chips",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
    >
      <body
        suppressHydrationWarning
        className={`${montserrat.className} ${spicyChips.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
