"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Calendar,
  Cookie,
  Settings,
  Shield,
  BarChart3,
  Target,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookiePolicyPage() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  const [showBanner, setShowBanner] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Check if user has already set preferences
    const savedPreferences = localStorage.getItem("cookiePreferences");
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
      setShowBanner(false);
    }
  }, []);

  const handlePreferenceChange = (
    type: keyof CookiePreferences,
    value: boolean
  ) => {
    if (type === "necessary") return; // Cannot disable necessary cookies

    setPreferences((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const savePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    setShowBanner(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem("cookiePreferences", JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <PageLayout>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-2xl z-50 animate-slide-up">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                <Cookie className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    We use cookies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                    We use cookies to enhance your experience, analyze site
                    usage, and assist in our marketing efforts. You can
                    customize your preferences or accept all cookies.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="w-full sm:w-auto bg-transparent"
                >
                  Reject All
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowBanner(false)}
                  className="w-full sm:w-auto"
                >
                  Customize
                </Button>
                <Button
                  onClick={acceptAll}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full sm:w-auto"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-6 bg-green-100 border-green-500 border-l-4 text-green-700 p-4 rounded-lg shadow-lg z-50 animate-slide-in-from-right">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>Cookie preferences saved successfully!</span>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 mb-6 text-base px-4 py-2 animate-float">
              <Calendar className="h-4 w-4 mr-2" />
              Last Updated: March 15, 2024
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Learn about how we use cookies and similar technologies to improve
              your experience on Leelu.ai.
            </p>
          </div>
        </ScrollReveal>

        {/* Cookie Preferences Panel */}
        <ScrollReveal>
          <Card className="border-0 shadow-lg mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Settings className="h-6 w-6 mr-3 text-purple-600" />
                Cookie Preferences
              </h2>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Necessary Cookies
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                      >
                        Always Active
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Essential for the website to function properly. These
                      cookies enable core functionality such as security,
                      network management, and accessibility.
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Examples: Authentication, security, load balancing
                    </div>
                  </div>
                  <Switch
                    checked={preferences.necessary}
                    disabled={true}
                    className="ml-4"
                  />
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Analytics Cookies
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Help us understand how visitors interact with our website
                      by collecting and reporting information anonymously.
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Examples: Google Analytics, usage statistics, performance
                      monitoring
                    </div>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) =>
                      handlePreferenceChange("analytics", checked)
                    }
                    className="ml-4 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-blue-500"
                  />
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Target className="h-5 w-5 text-purple-600" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Marketing Cookies
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Used to track visitors across websites to display relevant
                      and engaging advertisements.
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Examples: Social media pixels, advertising networks,
                      retargeting
                    </div>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) =>
                      handlePreferenceChange("marketing", checked)
                    }
                    className="ml-4 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-blue-500"
                  />
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Settings className="h-5 w-5 text-orange-600" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Functional Cookies
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Enable enhanced functionality and personalization, such as
                      remembering your preferences and settings.
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Examples: Language preferences, theme settings, user
                      interface customization
                    </div>
                  </div>
                  <Switch
                    checked={preferences.functional}
                    onCheckedChange={(checked) =>
                      handlePreferenceChange("functional", checked)
                    }
                    className="ml-4 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  onClick={savePreferences}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex-1"
                >
                  Save Preferences
                </Button>
                <Button
                  variant="outline"
                  onClick={acceptAll}
                  className="flex-1 bg-transparent"
                >
                  Accept All
                </Button>
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="flex-1 bg-transparent"
                >
                  Reject All
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* What Are Cookies */}
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Cookie className="h-8 w-8 mr-3 text-purple-600" />
              What Are Cookies?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work more efficiently and provide information to
                website owners.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
                <div className="flex items-start space-x-3">
                  <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">
                      How Cookies Work
                    </p>
                    <p className="text-blue-700 dark:text-blue-300">
                      Cookies store information about your visit, such as your
                      preferred language and other settings. This can make your
                      next visit easier and the site more useful to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Types of Cookies We Use */}
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Types of Cookies We Use
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-green-600 mr-3" />
                    Session Cookies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Temporary cookies that are deleted when you close your
                    browser. They help us maintain your session and ensure
                    security during your visit.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Duration:</strong> Until browser is closed
                    <br />
                    <strong>Purpose:</strong> Session management, security
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Settings className="h-6 w-6 text-blue-600 mr-3" />
                    Persistent Cookies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Remain on your device for a set period or until you delete
                    them. They remember your preferences and settings for future
                    visits.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Duration:</strong> Up to 2 years
                    <br />
                    <strong>Purpose:</strong> Preferences, personalization
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Target className="h-6 w-6 text-purple-600 mr-3" />
                    First-Party Cookies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Set directly by our website. We use these to provide core
                    functionality and improve your experience on our platform.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Set by:</strong> Leelu.ai
                    <br />
                    <strong>Purpose:</strong> Core functionality, user
                    experience
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <BarChart3 className="h-6 w-6 text-orange-600 mr-3" />
                    Third-Party Cookies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Set by external services we use, such as analytics providers
                    or advertising networks. You can control these through your
                    preferences.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Set by:</strong> External services
                    <br />
                    <strong>Purpose:</strong> Analytics, advertising, social
                    media
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollReveal>

        {/* Managing Cookies */}
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Managing Your Cookies
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                You have several options for managing cookies on our website and
                in your browser:
              </p>

              <h4>On Our Website</h4>
              <ul>
                <li>
                  Use the cookie preference panel above to customize your
                  settings
                </li>
                <li>
                  Your choices are saved and will be remembered for future
                  visits
                </li>
                <li>
                  You can change your preferences at any time by revisiting this
                  page
                </li>
              </ul>

              <h4>In Your Browser</h4>
              <p>
                Most browsers allow you to control cookies through their
                settings. You can usually find these options in the "Privacy" or
                "Security" section of your browser's settings.
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">
                      Important Note
                    </p>
                    <p className="text-yellow-700 dark:text-yellow-300">
                      Disabling certain cookies may affect the functionality of
                      our website and limit your ability to use some features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Contact Information */}
        <ScrollReveal>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Email
                  </h4>
                  <p>
                    <a
                      href="mailto:privacy@leelu.ai"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      privacy@leelu.ai
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Privacy Officer
                  </h4>
                  <p>
                    <a
                      href="mailto:dpo@leelu.ai"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      dpo@leelu.ai
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </PageLayout>
  );
}
