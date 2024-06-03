import { Inter } from "next/font/google";
import "./globals.css";
import SeoMain from "@/components/SeoMain";
import A2b from "./A2b";
import A2bStyle from "@/components/A2bStyle";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <A2bStyle />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
