import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B&B Dental Care | Best Dental & Cosmetic Clinic in Thrissur | Affordable Dental Care",
  description: "B&B Dental Care – Best dental & cosmetic clinic in Thrissur. Affordable dental treatments including implants, braces, teeth whitening & more. Book your appointment today!",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body
        className={`antialiased bg-white text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
