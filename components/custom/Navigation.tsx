"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import {
  featuresDropdown,
  industries,
  moreDropdown,
  stakeholders,
} from "./demo";
import Link from "next/link";
import { Button } from "../ui/button";
const Navigation = () => {
  const router = useRouter();
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(event.target as Node)
      ) {
        setIsFeaturesOpen(false);
      }
      if (
        solutionRef.current &&
        !solutionRef.current.contains(event.target as Node)
      ) {
        setIsSolutionOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 pt-3 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionRef}>
              <button
                onClick={() => setIsSolutionOpen(!isSolutionOpen)}
                className={`nav-link flex items-center space-x-1 ${
                  isActiveLink("/solutions")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                } font-medium transition-colors`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isSolutionOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isSolutionOpen && (
                <div className="absolute top-full left-0 mt-2 w-[1200px] bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 z-50 -translate-x-1/3">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Why Leelu.ai */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                        Why Leelu.ai?
                      </h3>
                      <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                        <Sparkles className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-base font-medium text-gray-900 dark:text-white mb-2">
                            AI-Powered Recruiting Revolution
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Maximize resources, streamline recruiting with
                            automation, and strengthen analytics to boost team
                            performance and efficiency.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stakeholders */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                        Stakeholders
                      </h3>
                      <ul className="space-y-2">
                        {stakeholders.map((item, index) => (
                          <li key={index}>
                            <Link
                              href={item.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                            >
                              <item.icon
                                className={`h-4 w-4 ${item.color} mt-1 flex-shrink-0`}
                              />
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                  {item.title}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Industries */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                        Industries
                      </h3>
                      <ul className="grid grid-cols-1 gap-2">
                        {industries.map((item, index) => (
                          <li key={index}>
                            <Link
                              href={item.href}
                              className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                            >
                              <item.icon
                                className={`h-4 w-4 ${item.color} mt-0.5 flex-shrink-0`}
                              />
                              <div>
                                <div className="text-xs font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                  {item.title}
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
                <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-4 z-50">
                  {featuresDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="group flex items-start space-x-3 px-6 py-3 rounded-md transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-[1.01] hover:shadow-sm"
                    >
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mt-1 transition-colors group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30">
                        <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/use-cases"
              className={`nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors ${
                isActiveLink("/use-cases")
                  ? "text-blue-600 dark:text-blue-400"
                  : ""
              }`}
            >
              Use Cases
            </Link>

            <Link
              href="/blog"
              className={`nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors ${
                isActiveLink("/blog") ? "text-blue-600 dark:text-blue-400" : ""
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors ${
                isActiveLink("/contact")
                  ? "text-blue-600 dark:text-blue-400"
                  : ""
              }`}
            >
              Contact
            </Link>
            <Link
              href="/#pricing"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Pricing
            </Link>
            {/* demon Dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`flex items-center space-x-1 cursor-pointer transition-colors font-medium nav-link ${
                  pathname.startsWith("/features")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
                aria-haspopup="true"
                aria-expanded={isMoreOpen}
              >
                <span>More</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isMoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMoreOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-4 z-50">
                  {moreDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="group flex items-start space-x-3 px-6 py-3 rounded-md transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 hover:shadow-md"
                    >
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mt-1 transition-colors group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30">
                        <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => router.push("/#pricing")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-4 max-h-[80vh] overflow-y-scroll">
            {/* Solutions Section */}
            <div className="space-y-2">
              <div className="font-semibold text-gray-900 dark:text-white px-4">
                Solutions
              </div>
              <div className="px-6 space-y-1">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                  Stakeholders
                </div>
                {stakeholders.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 px-2 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-lg"
                  >
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                ))}
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 mt-4">
                  Industries
                </div>
                {industries.slice(0, 4).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 px-2 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-lg"
                  >
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="space-y-2">
              <div className="font-semibold text-gray-900 dark:text-white px-4">
                Features
              </div>
              {featuresDropdown.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 px-6 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
              <Link
                href="/use-cases"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Use Cases
              </Link>
              <Link
                href="/demo"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Demo
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/#pricing"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/knowledge-base"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Knowledge Base
              </Link>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 px-4">
              <Button
                onClick={() => router.push("/#pricing")}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
