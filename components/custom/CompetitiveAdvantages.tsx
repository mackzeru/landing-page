import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Check } from "lucide-react";

const CompetitiveAdvantages = () => {
  return (
    <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-40 right-40 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The competitive advantages
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300">
              The competitive advantages that set us apart
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {[
              {
                title: "True Parallel Processing",
                desc: "Not sequential like competitors",
                color: "green",
              },
              {
                title: "LinkedIn Plugin",
                desc: "No scraping - direct API access",
                color: "blue",
              },
              {
                title: "Autonomous Until Done",
                desc: "Not just 1-2 messages like others",
                color: "purple",
              },
              {
                title: "PhD-Level Resume Scoring",
                desc: "Skills/experience matching precision",
                color: "orange",
              },
            ].map((advantage, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div
                  className={`group flex items-center space-x-6 p-8 bg-${advantage.color}-50 dark:bg-${advantage.color}-900/20 rounded-3xl border border-${advantage.color}-200 dark:border-${advantage.color}-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform cursor-pointer`}
                >
                  <div
                    className={`w-12 h-12 ${
                      advantage.color === "green"
                        ? "bg-green-600"
                        : advantage.color === "blue"
                        ? "bg-blue-600"
                        : advantage.color === "purple"
                        ? "bg-purple-600"
                        : "bg-orange-600"
                    } rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {advantage.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Performance Stats
              </h3>
              <div className="space-y-10">
                {[
                  {
                    value: "85%",
                    label: "Time saved vs manual recruiting",
                    color: "blue",
                  },
                  {
                    value: "3x",
                    label: "Higher response rates",
                    color: "purple",
                  },
                  {
                    value: "48%",
                    label: "Average candidate response rate",
                    color: "green",
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className={`text-6xl font-bold text-${stat.color}-600 mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-lg text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantages;
