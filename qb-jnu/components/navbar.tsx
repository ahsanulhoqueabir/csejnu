"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import Image from "next/image";

import logo from "@/public/logo.svg";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between mb-5">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <Image src={logo} alt="logo" className="size-12" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {route.name}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className={cn("h-5 w-5", isOpen ? "hidden" : "block")} />
            <X className={cn("h-5 w-5", isOpen ? "block" : "hidden")} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-3">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
