"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

export function DemoInterface() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-6 text-green-400 font-mono text-sm shadow-2xl border border-gray-700 dark:border-gray-600">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <Badge className="bg-green-900 dark:bg-green-800 text-green-400 dark:text-green-300 text-xs">
          LEELU.AI v2.1.0
        </Badge>
      </div>

      <div className="space-y-2">
        <div className="text-blue-400 dark:text-blue-300">
          [LEELU.AI AUTO SOURCE PLUGIN v2.1.0] 🔗
        </div>
        <div className="text-white dark:text-gray-100">Job Configuration:</div>
        <div className="ml-4 space-y-1">
          <div>
            - JOB OPENING ID:{" "}
            <span className="text-yellow-400 dark:text-yellow-300">
              [DEV-2025-001]
            </span>
          </div>
          <div>
            - CAMPAIGN ID:{" "}
            <span className="text-yellow-400 dark:text-yellow-300">
              [CAMP-2025-001]
            </span>
          </div>
        </div>
        <div className="mt-4">
          <Button
            onClick={() => setIsActive(!isActive)}
            className={`${
              isActive
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            } text-white font-mono text-sm`}
          >
            {isActive ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                [Pause Sourcing]
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                [▶ Start Sourcing]
              </>
            )}
          </Button>
        </div>
        {isActive && (
          <div className="mt-4 space-y-1 animate-pulse">
            <div className="text-green-400 dark:text-green-300">
              ✓ LinkedIn: 247 candidates found
            </div>
            <div className="text-green-400 dark:text-green-300">
              ✓ Indeed: 189 candidates found
            </div>
            <div className="text-green-400 dark:text-green-300">
              ✓ Monster: 156 candidates found
            </div>
            <div className="text-yellow-400 dark:text-yellow-300">
              ⟳ Processing CareerBuilder...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
