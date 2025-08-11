"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Zap, ExternalLink, CheckCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const integrations = [
  {
    name: "LinkedIn",
    category: "Professional Network",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    badge: "Exclusive API",
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-700",
    description: "Direct Recruiter API integration",
    features: [
      "Real-time candidate search",
      "Advanced filtering",
      "Direct messaging",
    ],
  },
  {
    name: "Indeed",
    category: "Job Board",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Indeed_logo.svg",
    badge: "Direct Feed",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-700",
    description: "Global job board integration",
    features: [
      "Resume database access",
      "Job posting sync",
      "Application tracking",
    ],
  },
  {
    name: "Monster",
    category: "Job Board",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Monster-Logo.png",
    badge: "Real-time",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-700",
    description: "Career platform integration",
    features: ["Candidate profiles", "Skills matching", "Industry insights"],
  },
  {
    name: "CareerBuilder",
    category: "Job Board",
    logo: "https://www.careerbuilder.com/share/www/images/cb-logo.svg",
    badge: "Premium",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-700",
    description: "Comprehensive talent solutions",
    features: ["Resume search", "Talent network", "Hiring insights"],
  },
  {
    name: "Greenhouse",
    category: "ATS",
    logo: "https://www.greenhouse.io/hubfs/greenhouse-logo-full-color.svg",
    badge: "ATS Sync",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-700",
    description: "Applicant tracking system",
    features: [
      "Pipeline management",
      "Interview scheduling",
      "Candidate scoring",
    ],
  },
  {
    name: "Lever",
    category: "ATS",
    logo: "https://lever.co/static/media/lever-logo-blue.svg",
    badge: "Bi-directional",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-700",
    description: "Modern recruiting platform",
    features: ["CRM integration", "Analytics dashboard", "Team collaboration"],
  },
  {
    name: "Workday",
    category: "HRIS",
    logo: "https://logos-world.net/wp-content/uploads/2022/01/Workday-Logo.png",
    badge: "Enterprise",
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-700",
    description: "Enterprise HR platform",
    features: [
      "Employee data sync",
      "Workflow automation",
      "Compliance tracking",
    ],
  },
  {
    name: "BambooHR",
    category: "HRIS",
    logo: "https://www.bamboohr.com/images/bamboo-logo.svg",
    badge: "HR Sync",
    color: "from-green-600 to-green-700",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-700",
    description: "Human resources software",
    features: [
      "Employee records",
      "Performance tracking",
      "Benefits management",
    ],
  },
];

export function IntegrationDashboard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-40 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">
              All Your Tools in One Dashboard
            </h2>
            <p className="text-3xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Seamlessly connect with your existing recruiting stack. One
              platform, unlimited possibilities.
            </p>
          </div>
        </ScrollReveal>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {integrations.map((integration, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className={`group relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border-2 ${integration.borderColor} hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform:
                    hoveredCard === index
                      ? "translateY(-8px) scale(1.02)"
                      : "translateY(0) scale(1)",
                }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 ${integration.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Logo */}
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={integration.logo || "/placeholder.svg"}
                      alt={`${integration.name} logo`}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback =
                          target.nextElementSibling as HTMLDivElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <div
                      className={`hidden w-12 h-12 bg-gradient-to-r ${integration.color} rounded-xl items-center justify-center`}
                    >
                      <span className="text-white font-bold text-lg">
                        {integration.name.slice(0, 2)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {integration.category}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {integration.description}
                    </p>
                    <Badge
                      className={`bg-gradient-to-r ${integration.color} text-white px-4 py-1`}
                    >
                      {integration.badge}
                    </Badge>
                  </div>

                  {/* Features (shown on hover) */}
                  <div
                    className={`transition-all duration-300 ${
                      hoveredCard === index
                        ? "opacity-100 max-h-40"
                        : "opacity-0 max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="space-y-2">
                      {integration.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* LinkedIn Exclusive Section */}
        <ScrollReveal delay={800}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-4xl p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <defs>
                  <pattern
                    id="linkedin-pattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="10" cy="10" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#linkedin-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mr-8 backdrop-blur-sm">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    className="w-12 h-12"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-4xl font-bold mb-2">
                    🚀 Exclusive LinkedIn Plugin33
                  </h3>
                  <p className="text-blue-100 text-lg">
                    Direct API Integration • No Scraping • Enterprise Grade
                  </p>
                </div>
              </div>

              <p className="text-3xl text-blue-100 max-w-5xl mx-auto leading-relaxed mb-10">
                Our exclusive LinkedIn plugin automatically sources candidates
                directly from your Recruiter account - a feature competitors
                can't match. Access hidden talent pools with enterprise-grade
                security.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <ExternalLink className="h-8 w-8 mb-4 mx-auto" />
                  <h4 className="font-semibold mb-2">Direct API Access</h4>
                  <p className="text-blue-100 text-sm">
                    Official LinkedIn Recruiter API integration
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <CheckCircle className="h-8 w-8 mb-4 mx-auto" />
                  <h4 className="font-semibold mb-2">Compliance First</h4>
                  <p className="text-blue-100 text-sm">
                    No scraping, fully compliant with ToS
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Zap className="h-8 w-8 mb-4 mx-auto" />
                  <h4 className="font-semibold mb-2">Real-time Sync</h4>
                  <p className="text-blue-100 text-sm">
                    Instant candidate data synchronization
                  </p>
                </div>
              </div>

              <div className="flex justify-center space-x-6">
                <Badge className="bg-white/20 text-white text-xl px-8 py-3 backdrop-blur-sm">
                  500M+ Profiles
                </Badge>
                <Badge className="bg-white/20 text-white text-xl px-8 py-3 backdrop-blur-sm">
                  Real-time Access
                </Badge>
                <Badge className="bg-white/20 text-white text-xl px-8 py-3 backdrop-blur-sm">
                  Enterprise Security
                </Badge>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
