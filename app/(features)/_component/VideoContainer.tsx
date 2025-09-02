import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React, { useState } from "react";

const VideoContainer = ({
  isDialogOpen,
  setIsDialogOpen,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
}) => {
  return (
    <div>
      {/* Modal Overlay */}
      {isDialogOpen && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4",
            "bg-white/60 backdrop-blur-sm",
            "animate-in fade-in-0 duration-300"
          )}
          onClick={() => setIsDialogOpen(false)}
        >
          {/* Modal Content */}
          <div
            className={cn(
              "relative bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl border",
              "w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl max-h-[90vh]",
              "animate-in zoom-in-95 duration-300"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm hover:scale-110 touch-manipulation"
            >
              <X className="size-5 sm:size-6" />
            </button>

            {/* Video */}
            <video
              className="w-full object-contain border-0 outline-none"
              autoPlay
              loop
              controls
              playsInline
            >
              <source src="/demo.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
