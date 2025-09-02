import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

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
      <Button
        variant="outline"
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 px-8 py-3 rounded-full font-medium text-base shadow-lg"
        onClick={() => setIsDialogOpen(true)}
      >
        <Play className="h-4 w-4 mr-2" />
        Watch Demo
      </Button>
    </div>
  );
};

export default GetStartLink;
