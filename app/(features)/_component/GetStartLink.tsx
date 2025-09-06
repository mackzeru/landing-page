import React from "react";
import Link from "next/link";
import { PremiumDemoButton } from "./button";

const GetStartLink = ({
  setIsDialogOpen,
}: {
  setIsDialogOpen: (isDialogOpen: boolean) => void;
}) => {
  return (
    <div className="flex justify-center space-x-4 mb-16">
      <Link
        href="/#pricing"
        className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white 
            px-4 py-2 md:px-1 md:py-1 lg:px-8 lg:py-1
            rounded-full font-medium
            text-sm sm:text-base md:text-lg
            transition-all duration-300
            transform hover:scale-105 active:scale-95
            shadow-md hover:shadow-lg
            inline-block"
      >
        Start Free Trial
      </Link>
      <PremiumDemoButton setIsDialogOpen={setIsDialogOpen} />
      
    </div>
  );
};

export default GetStartLink;
