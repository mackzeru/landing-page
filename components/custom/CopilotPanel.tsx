"use client";

import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function CopilotPanel() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          AI COPILOT SETTINGS
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            AI Status:
          </span>
          <Badge
            className={
              isActive
                ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                : "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
            }
          >
            {isActive ? "ACTIVE" : "PAUSED"}
          </Badge>
          <Switch checked={isActive} onCheckedChange={setIsActive} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300">
            ✓ Schedule Range:
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            Dec 15-22, 9AM-5PM
          </span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300">
            ✓ Meeting Platform:
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            Microsoft Teams
          </span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300">
            ✓ Response Limit:
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            1 reply per candidate
          </span>
        </div>
        <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <span className="text-blue-700 dark:text-blue-300">✓ AI Status:</span>
          <span className="font-medium text-blue-900 dark:text-blue-200">
            {isActive ? "ACTIVE" : "PAUSED"}
          </span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Autonomous Mode:</strong> AI will continue engaging candidates
          and booking interviews until you pause or all qualified candidates are
          processed.
        </p>
      </div>
    </div>
  );
}
