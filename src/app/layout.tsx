import "../styles/global.css";
import localFont from "next/font/local";
import { layoutContainer } from "./style.css";

export const metadata = {
  title: "Yield.xyz",
  description: "Yield.xyz",
};

const soehne = localFont({
  variable: "--sk-font-soehne",
  src: [
    {
      path: "./Soehne-Buch.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Soehne-Kraftig.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Soehne-Halbfett.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${soehne.variable} ${soehne.className}`}>
      <link rel="icon" href="/icon.png" />
      <body className={layoutContainer}>{children}</body>
    </html>
  );
}
