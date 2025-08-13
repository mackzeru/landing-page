"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  Rocket,
  Mail,
  CalendarDays,
  Clock,
  Target,
  Activity,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function DemoInterface() {
  const [isActive, setIsActive] = useState(true);
  const [progress, setProgress] = useState(0);

  // Mock data for the demo
  const demoData = {
    campaignName: "Senior Frontend Developer",
    campaignId: "CAMP-2024-001",
    status: "in_sourcing",
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    stats: {
      monster: 42,
      careerBuilder: 38,
      local: 15,
      emailsSent: 95,
      totalSourced: 95,
    },
    mode: "complex",
    minScore: 85,
  };

  // Simulate progress when active
  useState(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + Math.random() * 5, 100));
      }, 2000);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                LEELU.AI Auto Source
              </h3>
              <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800 mt-1">
                {isActive ? "Active" : "Paused"}
              </Badge>
            </div>
          </div>

          <Button
            onClick={() => {
              setIsActive(!isActive);
              if (!isActive) setProgress(0);
            }}
            size="sm"
            variant={isActive ? "secondary" : "outline"}
            className="gap-2"
          >
            {isActive ? (
              <>
                <Pause className="h-4 w-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Start
              </>
            )}
          </Button>
        </div>

        {/* Status Panel */}
        <div className="bg-background dark:bg-gray-950 rounded-lg p-4 mb-4 font-mono text-sm border border-blue-200 dark:border-gray-600">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-800 dark:text-green-800">
              {isActive ? "RUNNING" : "PAUSED"}
            </span>
          </div>

          <div className="space-y-1 text-blue-950 dark:text-blue-900 font-bold">
            <div>
              Job:{" "}
              <span className="text-yellow-700">{demoData.campaignName}</span>
            </div>
            <div>
              Campaign:{" "}
              <span className="text-yellow-700">{demoData.campaignId}</span>
            </div>
          </div>

          {isActive && (
            <div className="mt-3 space-y-1 animate-pulse">
              <div>
                ✓ LinkedIn: {Math.floor(demoData.stats.totalSourced * 0.4)}{" "}
                candidates
              </div>
              <div>
                ✓ Indeed: {Math.floor(demoData.stats.totalSourced * 0.3)}{" "}
                candidates
              </div>
              <div>✓ Monster: {demoData.stats.monster} candidates</div>
              <div className="text-yellow-900">
                ⟳ Processing CareerBuilder...
              </div>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Sourcing Progress</span>
            <span className="font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Configuration Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              <span>
                {demoData.startDate.toLocaleDateString()} -{" "}
                {demoData.endDate.toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Daily: 9AM - 5PM</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="h-4 w-4" />
              <span>Min Score: {demoData.minScore}%</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Activity className="h-4 w-4" />
              <span className="capitalize">{demoData.mode} Mode</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-3 flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Emails Sent</div>
                <div className="font-bold">{demoData.stats.emailsSent}</div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">
                  Total Sourced
                </div>
                <div className="font-bold">{demoData.stats.totalSourced}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
