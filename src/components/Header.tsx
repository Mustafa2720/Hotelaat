"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HotelaatBtn } from "@/components/utils/HotelaatBtn";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Services", href: "#" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-2.5 p-4">
        {/* Logo */}
        <Link href="/" aria-label="Hotelaat homepage">
          <img
            src="/assets/hotelaat-dark-logo.svg"
            alt="Hotelaat Logo"
            className="w-28 lg:w-40"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-6 font-medium text-gray-600 md:flex">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-h-purple-800 transition ${isActive(href) ? "text-h-purple-800 font-bold" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-4">
          <HotelaatBtn variant="fill">Join</HotelaatBtn>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-h-purple-900 focus-visible:ring-h-purple-500/50 border bg-transparent"
                  aria-label="Open menu"
                >
                  <Menu size={24} color="#2c115a" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="center"
                sideOffset={10}
                className="mr-2 w-48 text-base text-gray-500"
              >
                <DropdownMenuLabel className="text-h-purple-600 font-semibold">
                  Menu
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {navItems.map(({ label, href }) => (
                  <DropdownMenuItem key={href} asChild>
                    <Link
                      href={href}
                      className={`w-full rounded-md px-2 py-1 ${isActive(href) ? "bg-h-purple-800 text-white" : ""}`}
                    >
                      {label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
