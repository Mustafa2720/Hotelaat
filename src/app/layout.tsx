import type { Metadata } from "next";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import TransitionWrapper from "@/components/utils/TransitionWrapper";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotelaat",
  description: "Next Stay, Right Away",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative" suppressHydrationWarning>
      <body
        className={twMerge(
          poppins.className,
          "antialiased",
          "to-h-purple-100 bg-linear-to-br from-white",
          "mx-auto",
          "overflow-x-hidden",
        )}
      >
        <LayoutWrapper>
          <TransitionWrapper>{children}</TransitionWrapper>
        </LayoutWrapper>
        <Toaster richColors />
      </body>
    </html>
  );
}
