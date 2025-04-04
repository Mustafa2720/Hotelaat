"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
];

const buttonItems = [
  { id: 1, label: "Login", href: "/login" },
  { id: 2, label: "Login", href: "/login-plus" },
];

const MobileMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? (
    // X icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    // Hamburger icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );
};

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [menuOpen, setMenuOpen] = useState(false);

  // closes menu on link click
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  // console.log("menuOpen", menuOpen); // Debugging line

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-xs backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-2.5 p-4">
        {/* Logo */}
        <Link href="/" aria-label="Hotelaat homepage">
          <img
            src="/assets/hotelaat-dark-logo.svg"
            alt="Hotelaat Logo"
            className="w-28 lg:w-40"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 font-medium text-gray-600 md:flex">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-h-purple-800 transition ${
                isActive(href) ? "text-h-purple-800 font-bold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Desktop Buttons */}
          <div className="hidden items-center gap-2 md:flex">
            {buttonItems.map(({ id, label, href }) => (
              <HotelaatBtn
                key={id}
                variant={id === 2 ? "fill" : "outlined"}
                href={href}
              >
                {label}{" "}
                {id === 2 && (
                  <span className="text-h-orange-500 font-bold">+</span>
                )}
              </HotelaatBtn>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-h-purple-900 focus-visible:ring-h-purple-500/50 border bg-transparent"
                  aria-label="Toggle menu"
                >
                  <MobileMenuIcon isOpen={menuOpen} />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                sideOffset={10}
                className="animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out w-56 text-base text-gray-500"
              >
                <DropdownMenuLabel className="text-h-purple-600 font-semibold">
                  Menu
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="mb-2" />

                {navItems.map(({ label, href }) => (
                  <DropdownMenuItem key={href} asChild>
                    <Link
                      href={href}
                      onClick={handleMenuClose}
                      className={`w-full rounded-md px-2 py-1 ${
                        isActive(href) ? "bg-h-purple-800 text-white" : ""
                      }`}
                    >
                      {label}
                    </Link>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />
                <div className="flex flex-col gap-2 px-2 pt-2">
                  {buttonItems.map(({ id, label, href }) => (
                    <HotelaatBtn
                      key={id}
                      variant={id === 2 ? "fill" : "outlined"}
                      href={href}
                      className="w-full"
                    >
                      {label}{" "}
                      {id === 2 && (
                        <span className="text-h-orange-500 font-bold">+</span>
                      )}
                    </HotelaatBtn>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
