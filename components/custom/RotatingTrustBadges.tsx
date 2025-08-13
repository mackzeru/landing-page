"use client";
import Image from "next/image";
import softStand from "@/assets/soft-stand.jpg";
import bluebix from "@/assets/Bluebix.png";
import petabytz from "@/assets/petaBytz.png";

export function RotatingTrustBadges() {
  const logos = [
    {
      src: softStand,
      width: 328,
      height: 120,
    },
    {
      src: bluebix,
      width: 328,
      height: 120,
    },
    {
      src: petabytz,
      width: 328,
      height: 120,
    },
    {
      src: softStand,
      width: 328,
      height: 120,
    },
    {
      src: bluebix,
      width: 328,
      height: 120,
    },
    {
      src: petabytz,
      width: 328,
      height: 120,
    },
    {
      src: softStand,
      width: 328,
      height: 120,
    },
    {
      src: bluebix,
      width: 328,
      height: 120,
    },
    {
      src: petabytz,
      width: 328,
      height: 120,
    },
  ];

  return (
    <div className=" max-w-full mx-auto py-12 bg-gray-50 dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          Trusted by 2,000+ Customers
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee space-x-12">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <Image
                src={logo.src}
                alt="Trusted company logo"
                width={logo.width}
                height={logo.height}
                className=" object-contain max-w-full"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/128x32";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
