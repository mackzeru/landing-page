import { Button } from "@/components/ui/button";
import {
  AlignStartHorizontal,
  PlaneTakeoff,
  Rocket,
  Satellite,
} from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-6 text-center">
      {/* Animated space elements (can replace with your own illustrations) */}
      <div className="relative w-full max-w-2xl mx-auto mb-12">
        <PlaneTakeoff className="absolute top-0 left-1/4 h-16 w-16 text-yellow-400 animate-float-slow" />
        <Satellite className="absolute top-1/4 right-1/4 h-12 w-12 text-blue-300 animate-spin-slow" />
        <AlignStartHorizontal className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-24 w-24 text-white animate-bounce-soft" />

        {/* Main 404 text with glow effect */}
        <div className="relative z-10">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            404
          </h1>
          <div className="absolute inset-0 bg-blue-600/10 dark:bg-purple-400/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>

      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Lost in Space?
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        The page you're looking for doesn't exist or has been moved. Don't
        worry, we'll help you get back on track!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button
          asChild
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Return Home
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/contact" className="flex items-center gap-2">
            Report Issue
          </Link>
        </Button>
      </div>

      {/* Subtle decoration */}
      <div className="absolute bottom-8 left-8 h-16 w-16 rounded-full bg-purple-400/10 blur-xl" />
      <div className="absolute top-8 right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl" />
    </div>
  );
}
