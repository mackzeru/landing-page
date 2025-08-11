"use client";

export function RotatingTrustBadges() {
  const companies = [
    "Stripe",
    "Airbnb",
    "Uber",
    "Netflix",
    "Spotify",
    "Slack",
    "Zoom",
    "Figma",
    "Notion",
    "Discord",
    "GitHub",
    "Shopify",
    "Twilio",
    "Dropbox",
    "Square",
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          Trusted by 2,000+ Customers
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee space-x-12">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">
                {company}
              </span>
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
