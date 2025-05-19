import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import CartDrawer from "@/components/cart-drawer";
import ReduxProvider from "./redux-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurant Website",
  description: "A modern restaurant website with delicious food options",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReduxProvider>
          <CartProvider>
            {children}
            <CartDrawer />
          </CartProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
