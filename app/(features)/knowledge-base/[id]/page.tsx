"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink,
  Copy,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Mail,
  Send,
  Bot,
  Database,
  Settings,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { PageLayout } from "@/components/custom/page-layou";

interface Article {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  content: {
    overview: string;
    sections: {
      title: string;
      type: "steps" | "info" | "warning" | "code";
      content: string | string[];
    }[];
  };
}

export default function KnowledgeBaseArticlePage() {
  const params = useParams();
  const articleId = Number.parseInt(params.id as string);
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null);
  const [copied, setCopied] = useState(false);

  // Sample article data - in a real app, this would come from an API or database
  const articles: Article[] = [
    {
      id: 1,
      category: "email-accounts",
      title: "How to fix common email SMTP connection errors",
      description:
        "Learn about SMTP and IMAP errors, their possible reasons and how to fix them when connecting email accounts to Leelu.ai.",
      author: "Leelu Support Team",
      date: "2025-01-14",
      readTime: "8 min",
      tags: ["SMTP", "Email", "Connection"],
      content: {
        overview:
          "SMTP (Simple Mail Transfer Protocol) and IMAP (Internet Message Access Protocol) errors are common when connecting email accounts to Leelu.ai. This guide will help you identify and resolve the most frequent connection issues.",
        sections: [
          {
            title: "Common SMTP Error Codes",
            type: "info",
            content:
              "SMTP errors are identified by three-digit codes. Here are the most common ones you might encounter when setting up email accounts in Leelu.ai:",
          },
          {
            title: "Error 535: Authentication Failed",
            type: "steps",
            content: [
              "Verify your email address and password are correct",
              "Check if two-factor authentication is enabled on your email account",
              "For Gmail: Generate an App Password instead of using your regular password",
              "For Outlook: Ensure OAuth authentication is properly configured",
              "Try logging into your email provider's web interface to confirm credentials",
            ],
          },
          {
            title: "Error 587: Port Configuration Issues",
            type: "steps",
            content: [
              "Ensure you're using the correct SMTP port (usually 587 for TLS or 465 for SSL)",
              "Check that your firewall isn't blocking the SMTP ports",
              "Verify the encryption method matches your email provider's requirements",
              "For corporate networks, contact your IT administrator about port restrictions",
            ],
          },
          {
            title: "Gmail-Specific Setup",
            type: "warning",
            content:
              "Gmail requires App Passwords for third-party applications. Regular passwords will not work. You must enable 2-factor authentication first, then generate an App Password.",
          },
          {
            title: "Setting up Gmail App Password",
            type: "steps",
            content: [
              "Go to your Google Account settings (myaccount.google.com)",
              "Navigate to Security > 2-Step Verification",
              "Enable 2-Step Verification if not already enabled",
              "Go to Security > App passwords",
              "Select 'Mail' as the app and 'Other' as the device",
              "Enter 'Leelu.ai' as the device name",
              "Copy the generated 16-character password",
              "Use this App Password in Leelu.ai instead of your regular Gmail password",
            ],
          },
          {
            title: "Outlook/Exchange OAuth Setup",
            type: "steps",
            content: [
              "In Leelu.ai, select 'Connect with OAuth' for Outlook accounts",
              "Click the Microsoft login button",
              "Enter your Outlook credentials in the popup window",
              "Grant permissions for Leelu.ai to access your email",
              "If authentication fails, clear your browser cache and try again",
              "For Exchange servers, contact your IT administrator for OAuth configuration",
            ],
          },
          {
            title: "Testing Your Connection",
            type: "info",
            content:
              "After configuring your email settings, Leelu.ai will automatically test the connection. Look for the green checkmark indicating successful authentication.",
          },
          {
            title: "Advanced Troubleshooting",
            type: "steps",
            content: [
              "Check your email provider's security settings for third-party app access",
              "Temporarily disable antivirus email scanning to test connection",
              "Verify your internet connection is stable",
              "Try connecting from a different network to rule out firewall issues",
              "Contact your email provider's support if issues persist",
            ],
          },
        ],
      },
    },
    {
      id: 2,
      category: "email-accounts",
      title: "How to reconnect your Outlook/Exchange accounts through OAuth",
      description:
        "Learn how to restore the connection with your Outlook/Exchange accounts so that you can resume sending campaigns.",
      author: "Leelu Support Team",
      date: "2025-01-10",
      readTime: "6 min",
      tags: ["Outlook", "OAuth", "Exchange"],
      content: {
        overview:
          "OAuth connections can sometimes expire or become disconnected. This guide will walk you through reconnecting your Outlook or Exchange account to Leelu.ai using OAuth authentication.",
        sections: [
          {
            title: "Why OAuth Connections Disconnect",
            type: "info",
            content:
              "OAuth tokens can expire due to security policies, password changes, or account security updates. Microsoft regularly refreshes these tokens for security purposes.",
          },
          {
            title: "Signs Your Account Needs Reconnection",
            type: "warning",
            content:
              "You'll see error messages like 'Authentication Failed', 'Token Expired', or campaigns will show as 'Paused' with connection errors.",
          },
          {
            title: "Reconnecting Your Outlook Account",
            type: "steps",
            content: [
              "Go to Settings > Email Accounts in your Leelu.ai dashboard",
              "Find your Outlook account showing a 'Disconnected' or 'Error' status",
              "Click the 'Reconnect' button next to your account",
              "A new browser window will open with Microsoft's login page",
              "Enter your Outlook credentials (email and password)",
              "If prompted, complete any two-factor authentication steps",
              "Review and accept the permissions Leelu.ai is requesting",
              "Wait for the 'Connection Successful' confirmation",
              "Close the popup window and return to Leelu.ai",
            ],
          },
          {
            title: "Exchange Server Reconnection",
            type: "steps",
            content: [
              "Contact your IT administrator before attempting reconnection",
              "Ensure your Exchange server supports OAuth 2.0",
              "Follow the same steps as Outlook, but use your corporate credentials",
              "If connection fails, your IT team may need to whitelist Leelu.ai",
              "Some Exchange servers require additional security approvals",
            ],
          },
          {
            title: "Troubleshooting Connection Issues",
            type: "steps",
            content: [
              "Clear your browser cache and cookies",
              "Disable browser extensions that might interfere with popups",
              "Try using an incognito/private browsing window",
              "Ensure popups are allowed for app.leelu.ai",
              "Check if your organization has conditional access policies",
              "Verify your account hasn't been suspended or restricted",
            ],
          },
          {
            title: "Preventing Future Disconnections",
            type: "info",
            content:
              "To minimize disconnections, avoid changing your Microsoft account password frequently, and ensure Leelu.ai remains in your organization's approved apps list.",
          },
        ],
      },
    },
    {
      id: 8,
      category: "ai-copilot",
      title: "Why AI Copilot actions may be skipped",
      description:
        "Learn why AI Copilot automation actions may be skipped in Leelu.ai and how to fix it. Discover common reasons and tips to ensure your tasks run smoothly.",
      author: "Leelu Support Team",
      date: "2025-01-15",
      readTime: "9 min",
      tags: ["AI Copilot", "Automation", "Troubleshooting"],
      content: {
        overview:
          "AI Copilot actions can be skipped for various reasons including rate limits, data quality issues, or configuration problems. Understanding these causes will help you optimize your automation workflows.",
        sections: [
          {
            title: "Common Reasons for Skipped Actions",
            type: "info",
            content:
              "AI Copilot may skip actions to protect your account, maintain data quality, or comply with platform restrictions. Here are the most common scenarios:",
          },
          {
            title: "Rate Limiting and API Restrictions",
            type: "warning",
            content:
              "LinkedIn, email providers, and other platforms have strict rate limits. AI Copilot automatically respects these limits to prevent your accounts from being restricted or banned.",
          },
          {
            title: "Resolving Rate Limit Issues",
            type: "steps",
            content: [
              "Check your AI Copilot dashboard for rate limit notifications",
              "Reduce the frequency of automated actions in your settings",
              "Spread actions across multiple time periods instead of bulk processing",
              "Consider upgrading to premium platform accounts for higher limits",
              "Monitor your daily/hourly action quotas in the analytics section",
            ],
          },
          {
            title: "Data Quality Issues",
            type: "info",
            content:
              "AI Copilot skips actions when candidate data is incomplete, invalid, or doesn't meet your specified criteria. This protects your outreach quality.",
          },
          {
            title: "Fixing Data Quality Problems",
            type: "steps",
            content: [
              "Review skipped candidates in the AI Copilot activity log",
              "Check for missing required fields (email, name, company)",
              "Verify email addresses are properly formatted",
              "Ensure LinkedIn profiles are accessible and complete",
              "Update your data quality thresholds in AI Copilot settings",
              "Use the data enrichment feature to fill missing information",
            ],
          },
          {
            title: "Configuration and Template Issues",
            type: "steps",
            content: [
              "Verify all message templates have required variables filled",
              "Check that automation rules don't conflict with each other",
              "Ensure target criteria aren't too restrictive",
              "Review sequence timing settings for realistic intervals",
              "Test templates with sample data before activating automation",
            ],
          },
          {
            title: "Platform-Specific Restrictions",
            type: "warning",
            content:
              "Some platforms may temporarily restrict automated actions due to suspicious activity detection or policy changes. AI Copilot will pause to protect your account.",
          },
          {
            title: "Handling Platform Restrictions",
            type: "steps",
            content: [
              "Check for notifications from LinkedIn or other platforms",
              "Reduce automation frequency if warnings are received",
              "Manually perform some actions to maintain account authenticity",
              "Review and update your automation patterns to appear more human-like",
              "Contact platform support if restrictions seem unfair",
            ],
          },
          {
            title: "Monitoring and Prevention",
            type: "steps",
            content: [
              "Regularly review AI Copilot activity logs and skip reasons",
              "Set up alerts for high skip rates in your campaigns",
              "Maintain a healthy balance of automated and manual actions",
              "Keep your candidate data clean and up-to-date",
              "Stay informed about platform policy changes",
            ],
          },
        ],
      },
    },
  ];

  const article = articles.find((a) => a.id === articleId);

  const relatedArticles = articles
    .filter((a) => a.id !== articleId && a.category === article?.category)
    .slice(0, 3);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const getCategoryInfo = (categoryId: string) => {
    const categoryMap = {
      "email-accounts": {
        title: "Email Accounts",
        icon: Mail,
        color: "text-green-600",
      },
      campaigns: { title: "Campaigns", icon: Send, color: "text-purple-600" },
      "ai-copilot": {
        title: "AI Copilot",
        icon: Bot,
        color: "text-orange-600",
      },
      sourcing: {
        title: "Multi-Source Sourcing",
        icon: Database,
        color: "text-cyan-600",
      },
      integrations: {
        title: "Integrations",
        icon: Settings,
        color: "text-pink-600",
      },
      general: { title: "General", icon: HelpCircle, color: "text-gray-600" },
    };
    return (
      categoryMap[categoryId as keyof typeof categoryMap] || {
        title: "Articles",
        icon: BookOpen,
        color: "text-blue-600",
      }
    );
  };

  if (!article) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 flex items-center justify-center">
          <div className="text-center">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Article Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/knowledge-base">
              <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Knowledge Base
              </Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const categoryInfo = getCategoryInfo(article.category);

  const renderSection = (
    section: Article["content"]["sections"][0],
    index: number
  ) => {
    switch (section.type) {
      case "steps":
        return (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              {section.title}
            </h3>
            <ol className="space-y-3">
              {(section.content as string[]).map((step, stepIndex) => (
                <li key={stepIndex} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {stepIndex + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        );

      case "warning":
        return (
          <div
            key={index}
            className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 flex items-center mb-3">
              <AlertTriangle className="h-5 w-5 mr-2" />
              {section.title}
            </h3>
            <p className="text-yellow-700 dark:text-yellow-300 leading-relaxed">
              {section.content as string}
            </p>
          </div>
        );

      case "info":
        return (
          <div
            key={index}
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 flex items-center mb-3">
              <Info className="h-5 w-5 mr-2" />
              {section.title}
            </h3>
            <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
              {section.content as string}
            </p>
          </div>
        );

      case "code":
        return (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {section.title}
            </h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{section.content as string}</code>
              </pre>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        {/* Header */}
        <section className="py-8 px-8 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <Link
                href="/knowledge-base"
                className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Knowledge Base
              </Link>
              <span>/</span>
              <span className="flex items-center space-x-1">
                <categoryInfo.icon className="h-4 w-4" />
                <span>{categoryInfo.title}</span>
              </span>
            </nav>

            {/* Back Button */}
            <Link href="/knowledge-base">
              <Button
                variant="ghost"
                className="mb-6 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Knowledge Base
              </Button>
            </Link>

            {/* Article Header */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {article.description}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} read</span>
                </div>
              </div>

              {/* Share Button */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 bg-transparent"
                >
                  {copied ? (
                    <CheckCircle className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 bg-transparent"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50">
                  <CardContent className="p-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                      {/* Overview */}
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-100 dark:border-red-800 rounded-xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <BookOpen className="h-6 w-6 text-red-500 mr-3" />
                          Overview
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                          {article.content.overview}
                        </p>
                      </div>

                      {/* Content Sections */}
                      <div className="space-y-8">
                        {article.content.sections.map((section, index) =>
                          renderSection(section, index)
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Feedback Section */}
                <Card className="mt-8 bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Was this article helpful?
                    </h3>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant={isHelpful === true ? "default" : "outline"}
                        onClick={() => setIsHelpful(true)}
                        className={
                          isHelpful === true
                            ? "bg-green-600 hover:bg-green-700"
                            : "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                        }
                      >
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Yes, helpful
                      </Button>
                      <Button
                        variant={isHelpful === false ? "default" : "outline"}
                        onClick={() => setIsHelpful(false)}
                        className={
                          isHelpful === false
                            ? "bg-red-600 hover:bg-red-700"
                            : "text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                        }
                      >
                        <ThumbsDown className="h-4 w-4 mr-2" />
                        No, not helpful
                      </Button>
                    </div>
                    {isHelpful !== null && (
                      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          Thank you for your feedback!{" "}
                          {isHelpful
                            ? "We're glad this helped."
                            : "We'll work to improve this article."}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                        >
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Leave additional feedback
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Table of Contents */}
                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Table of Contents
                      </h3>
                      <nav className="space-y-2">
                        <a
                          href="#overview"
                          className="block text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                        >
                          Overview
                        </a>
                        {article.content.sections.map((section, index) => (
                          <a
                            key={index}
                            href={`#section-${index}`}
                            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                          >
                            {section.title}
                          </a>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>

                  {/* Need More Help */}
                  <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3">
                        Still Need Help?
                      </h3>
                      <p className="text-red-100 text-sm mb-4">
                        Our support team is here to help you resolve any issues.
                      </p>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full bg-white text-red-600 hover:bg-gray-100"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Support
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-12 px-8 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/knowledge-base/${relatedArticle.id}`}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50 cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {relatedArticle.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                          {relatedArticle.description}
                        </p>
                        <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
                          <span>{relatedArticle.readTime}</span>
                          <ExternalLink className="h-4 w-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </PageLayout>
  );
}
