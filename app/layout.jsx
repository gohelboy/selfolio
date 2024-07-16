import { Inter } from "next/font/google";
import QueryProviderWrapper from "./_components/QueryProviderWrapper";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TEST",
  description: "Test Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProviderWrapper>{children}</QueryProviderWrapper>
        <Toaster />
      </body>
    </html>
  );
}
