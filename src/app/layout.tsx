import type { Metadata } from "next";
import { Inter, Chakra_Petch } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "My little gallery",
  description: "Art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chakraPetch.className}>
        {children}
      </body>
    </html>
  );
}
