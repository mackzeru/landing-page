"use client";

import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function CopilotPanel() {
  const [isActive, setIsActive] = useState(true);

  // Mock data extracted from the JSON
  const campaignData = {
    name: "Software Engineer Campaign",
    status: "sourcing_completed",
    activeDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    timeRange: { start: "10:25 AM", end: "11:04 PM" },
    timeZone: "Asia/Kolkata",
    platforms: {
      autoSource: 31,
      monster: 50,
      cb: 82,
      local: 85,
    },
    minimumScore: 82,
    aiSettings: {
      minDelay: "16 min",
      maxDelay: "1.23 hrs",
      followupDelay: "23 hrs",
    },
    campaignPeriod: "Aug 12 - Oct 4, 2025",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {campaignData.name}
        </h3>
        <div className="flex items-center space-x-2">
          <Badge
            className={
              isActive
                ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                : "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300"
            }
          >
            {campaignData.status.replace("_", " ").toUpperCase()}
          </Badge>
          <Switch checked={isActive} onCheckedChange={setIsActive} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300">
            ✓ Active Days:
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            {campaignData.activeDays.join(", ")}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300">
            ✓ Daily Time Range:
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            {campaignData.timeRange.start} - {campaignData.timeRange.end} (
            {campaignData.timeZone})
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300">
            ✓ Campaign Period:
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            {campaignData.campaignPeriod}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <span className="text-blue-700 dark:text-blue-300">
            ✓ Sourcing Targets:
          </span>
          <div className="flex space-x-2">
            <Badge variant="outline" className="text-xs">
              Auto: {campaignData.platforms.autoSource}
            </Badge>
            <Badge variant="outline" className="text-xs">
              Local: {campaignData.platforms.local}
            </Badge>
            <Badge variant="outline" className="text-xs">
              CB: {campaignData.platforms.cb}
            </Badge>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300">
            ✓ Minimum Score:
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            {campaignData.minimumScore}/100
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300">
            ✓ AI Response Delay:
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            {campaignData.aiSettings.minDelay} -{" "}
            {campaignData.aiSettings.maxDelay}
          </span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Autonomous Sourcing Mode:</strong> AI will source candidates
          from configured platforms, engage qualified candidates (
          {campaignData.minimumScore}+ score), and follow up automatically.
        </p>
      </div>
    </div>
  );
}
