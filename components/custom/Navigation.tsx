import { Link } from "react-scroll";
import React from "react";

const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link
        to="product"
        smooth={true}
        duration={500}
        className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors"
      >
        <span className="font-medium">Product</span>
      </Link>
      <Link
        to="resources"
        smooth={true}
        duration={500}
        className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors"
      >
        <span className="font-medium">Resources</span>
      </Link>
      <Link
        to="pricing"
        smooth={true}
        duration={500}
        className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors"
      >
        Pricing
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 cursor-pointer transition-colors"
      >
        Talk to Our Team
      </Link>

      {/* Theme Toggle Dropdown */}
      <div className="flex items-center">{/* <ThemeToggle /> */}</div>
    </nav>
  );
};

export default Navigation;
