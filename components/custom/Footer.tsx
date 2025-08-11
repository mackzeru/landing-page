import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  {
    /* Enhanced Modern Footer */
  }
  return (
    <footer className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Quarter-Circle Background Elements */}
      <div className="absolute inset-0">
        {/* Main quarter-circle in bottom-right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/30 rounded-tl-full transform translate-x-48 translate-y-48"></div>

        {/* Secondary quarter-circle in bottom-left */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-tr-full transform -translate-x-40 translate-y-40"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern
                id="footer-dots"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="5"
                  cy="5"
                  r="0.5"
                  fill="currentColor"
                  className="text-blue-200 dark:text-blue-800"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#footer-dots)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12 mb-16">
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <Image
                src={logo} // Replace with your actual path
                alt="Leelu.ai Logo"
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                Leelu.ai
              </span>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
              The AI recruiting copilot that transforms your hiring process from
              job post to first interview in just 24 hours.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="group w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="#"
                className="group w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              <a
                href="#"
                className="group w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="#"
                className="group w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-8">
            <h3 className="font-bold text-gray-900 dark:text-white text-xl">
              Product
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  AI Copilot
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Multi-Source Search
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  LinkedIn Plugin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-8">
            <h3 className="font-bold text-gray-900 dark:text-white text-xl">
              Company
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Press Kit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal Links */}
          <div className="space-y-8">
            <h3 className="font-bold text-gray-900 dark:text-white text-xl">
              Support
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  API Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Status Page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/20 rounded-3xl p-10 mb-16 border border-blue-100 dark:border-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get the latest updates on AI recruiting trends and product
              features
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                © 2024 Leelu.ai. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="footer-link text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Security
                </a>
                <a
                  href="#"
                  className="footer-link text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  GDPR
                </a>
                <a
                  href="#"
                  className="footer-link text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative inline-block"
                >
                  Cookies
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  All systems operational
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  SOC 2 Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
