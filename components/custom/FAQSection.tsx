"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does autonomous mode work?",
    answer:
      "Our AI Copilot operates independently once activated. It sources candidates from multiple platforms, sends personalized outreach messages, analyzes responses, and automatically books interviews when candidates show interest. You can pause or adjust settings anytime.",
  },
  {
    question: "Is the LinkedIn integration compliant?",
    answer:
      "Yes, our LinkedIn plugin uses official LinkedIn Recruiter APIs with proper authentication. We don't scrape data or violate terms of service. This direct integration is why we can access candidates that other tools can't reach.",
  },
  {
    question: "Can I pause the AI anytime?",
    answer:
      "Absolutely. You have full control over the AI Copilot. You can pause, resume, or modify settings at any time through your dashboard. The AI will immediately stop all activities when paused and resume exactly where it left off when reactivated.",
  },
  {
    question: "How does the PhD-level resume scoring work?",
    answer:
      "Our AI uses advanced natural language processing and machine learning models trained on millions of successful hires. It evaluates skills, experience, career progression, and cultural fit indicators to score candidates with the precision of a PhD-level analyst.",
  },
  {
    question: "What platforms do you search simultaneously?",
    answer:
      "We search LinkedIn (via direct API), Indeed, Monster, CareerBuilder, and integrate with major ATS systems like Greenhouse, Lever, and Workday. We also search your internal candidate database - all simultaneously, not sequentially.",
  },
  {
    question: "How is this different from other recruiting tools?",
    answer:
      "Unlike competitors who search platforms one by one, we use true parallel processing. Our exclusive LinkedIn plugin, autonomous engagement until completion, and PhD-level scoring set us apart. We don't just find candidates - we get them to the interview stage.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about Leelu.ai
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
