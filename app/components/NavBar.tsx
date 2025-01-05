"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, Bath } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  const currentPath = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  const subtitles = ["Innovative", "Reliable", "Solutions"];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!animationComplete) {
      const timer = setInterval(() => {
        setCurrentSubtitle((prev) => {
          if (prev === subtitles.length - 1) {
            clearInterval(timer);
            setAnimationComplete(true);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [animationComplete, subtitles.length]);

  const links = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "Web Development", href: "/web-development" },
        { label: "SEO", href: "/seo" },
        { label: "Digital Marketing", href: "/digital-marketing" },
      ],
    },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-background ${
        hasScrolled ? "border-b" : ""
      }`}
    >
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Bath className="h-8 w-8 text-primary" aria-label="Logo" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">
                designbath.
              </span>
              <div className="h-5 relative overflow-hidden">
                {subtitles.map((subtitle, index) => (
                  <span
                    key={index}
                    className={`absolute left-0 w-full transition-all duration-500 ${
                      index === currentSubtitle
                        ? "translate-y-0 opacity-100"
                        : index < currentSubtitle
                        ? "-translate-y-full opacity-0"
                        : "translate-y-full opacity-0"
                    } ${
                      animationComplete && index === subtitles.length - 1
                        ? "text-muted-foreground"
                        : ""
                    }`}
                  >
                    {subtitle}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-1 space-x-6">
          {links.map((link) => {
            if (link.dropdown) {
              return (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`px-4 font-medium ${
                        currentPath.startsWith(link.href)
                          ? "text-primary font-semibold"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.dropdown.map((sublink) => (
                      <DropdownMenuItem key={sublink.href}>
                        <Link href={sublink.href} className="w-full">
                          {sublink.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            } else {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    link.href === currentPath
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }
          })}
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          )}

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="lg:hidden"
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-[100vh] pt-20">
              <SheetHeader>
                <SheetTitle>designbath.</SheetTitle>
                <SheetDescription />
              </SheetHeader>
              <div className="grid gap-6 text-center">
                {links.map((link) => {
                  if (link.dropdown) {
                    return (
                      <DropdownMenu key={link.href}>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className={`w-full text-lg ${
                              currentPath.startsWith(link.href)
                                ? "text-primary font-semibold"
                                : "text-muted-foreground"
                            }`}
                          >
                            {link.label}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[calc(100vw-12rem)] mx-4">
                          {link.dropdown.map((sublink) => (
                            <DropdownMenuItem
                              key={sublink.href}
                              className="justify-center"
                            >
                              <Link
                                href={sublink.href}
                                className="w-full text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sublink.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    );
                  } else {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          link.href === currentPath
                            ? "text-primary font-semibold"
                            : "text-muted-foreground"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  }
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
