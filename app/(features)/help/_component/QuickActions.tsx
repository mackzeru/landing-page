import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { QuickAType } from "../demo";

const QuickActions = ({ quickActions }: { quickActions: QuickAType[] }) => {
  return (
    <section className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 border-0 shadow-xl dark:shadow-gray-900/50"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r from-${action.color}-500 to-${action.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <action.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {action.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {action.description}
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-xl font-semibold">
                  {action.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
