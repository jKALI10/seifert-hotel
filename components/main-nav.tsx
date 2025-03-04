"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Beer, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/amenities", label: "Amenities" },
  { href: "/rooms", label: "Rooms" },
  { href: "/brewery", label: "Brewery" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    if (pathname) {
      setIsOpen(false);
    }
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Beer className="h-6 w-6 text-amber-600" />
          <span className="text-xl font-bold">SEIFERT HOTEL</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium menu-item",
                pathname === route.href && "active text-amber-600"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 bg-background z-40 flex flex-col pt-6 px-6 menu-transition md:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <nav className="flex flex-col gap-6 text-center">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-xl font-medium py-2",
                pathname === route.href && "text-amber-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
