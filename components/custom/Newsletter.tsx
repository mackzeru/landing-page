import React from "react";

// Newsletter Component
const Newsletter = () => (
  <div className="bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/20 rounded-3xl p-10 mb-16 border border-blue-100 dark:border-blue-800">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stay Updated
      </h3>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Get the latest updates on AI recruiting trends and product features
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default Newsletter;
