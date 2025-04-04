"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HIDDEN_PATHS = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hide = HIDDEN_PATHS.includes(pathname);

  return (
    <>
      <Header />
      {children}
      {!hide && <Footer />}
    </>
  );
}
