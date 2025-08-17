"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
const Navigation = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(event.target as Node)
      ) {
        setIsFeaturesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };
  return (
    <>
      <header className="w-full border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="Leelu.ai Logo"
                width={40}
                height={40}
                className="object-contain"
              />

              <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Leelu.ai
              </span>
            </Link>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {/* Features Dropdown */}
                <div className="relative" ref={featuresRef}>
                  <button
                    onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                    className={`flex items-center space-x-1 cursor-pointer transition-colors font-medium nav-link ${
                      pathname.startsWith("/features")
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <span>Features</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isFeaturesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isFeaturesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 py-4 z-50 animate-in slide-in-from-top-2">
                      <div className="px-4 py-2">
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                          Core Features
                        </h3>
                        <Link
                          href="/features/copilot"
                          className={`block px-3 py-3 rounded-lg transition-colors ${
                            pathname === "/features/copilot"
                              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }`}
                          onClick={() => setIsFeaturesOpen(false)}
                        >
                          <div className="font-medium">AI Copilot</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Autonomous recruiting assistant
                          </div>
                        </Link>
                        <Link
                          href="/features/sourcing"
                          className={`block px-3 py-3 rounded-lg transition-colors ${
                            pathname === "/features/sourcing"
                              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }`}
                          onClick={() => setIsFeaturesOpen(false)}
                        >
                          <div className="font-medium">
                            Multi-Source Sourcing
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Search across all platforms
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/use-cases"
                  className={`font-medium cursor-pointer transition-colors nav-link ${
                    isActiveLink("/use-cases")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Use Cases
                </Link>

                <Link
                  href="/demo"
                  className={`font-medium cursor-pointer transition-colors nav-link ${
                    isActiveLink("/demo")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Demo
                </Link>

                <Link
                  href="/blog"
                  className={`font-medium cursor-pointer transition-colors nav-link ${
                    isActiveLink("/blog")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Blog
                </Link>

                <Link
                  href="/about"
                  className={`font-medium cursor-pointer transition-colors nav-link ${
                    isActiveLink("/about")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  className={`font-medium cursor-pointer transition-colors nav-link ${
                    isActiveLink("/contact")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Contact
                </Link>

                <div className="flex items-center">{/* <ThemeToggle /> */}</div>
              </nav>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                <nav className="flex flex-col space-y-4 pt-4">
                  <Link
                    href="/features/copilot"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  >
                    AI Copilot
                  </Link>
                  <Link
                    href="/features/sourcing"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  >
                    Multi-Source Sourcing
                  </Link>
                  <Link
                    href="/use-cases"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  >
                    Use Cases
                  </Link>
                  <Link
                    href="/demo"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  >
                    Demo
                  </Link>
                  <Link
                    href="/blog"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            )}

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="lg:hidden">{/* <ThemeToggle /> */}</div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105">
                Get Started
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div
                    className={`w-full h-0.5 bg-current transition-all ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-full h-0.5 bg-current transition-all ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-full h-0.5 bg-current transition-all ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                    }`}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
