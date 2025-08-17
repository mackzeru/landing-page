import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
const Timeline = ({
  milestones,
}: {
  milestones: {
    year: string;
    title: string;
    description: string;
  }[];
}) => {
  return (
    <section className="py-24 bg-blue-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our mission to democratize AI recruiting
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>

          {milestones.map((milestone, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                <div className="w-1/2"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
