"use client";
import { PageLayout } from "@/components/custom/page-layou";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle,
  Globe,
  Users,
  Database,
  Server,
  Award,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SecurityPage() {
  const [activeCompliance, setActiveCompliance] = useState("gdpr");

  const complianceData = {
    gdpr: {
      title: "GDPR Compliance",
      description: "European General Data Protection Regulation",
      rights: [
        "Right to be informed about data collection",
        "Right of access to your personal data",
        "Right to rectification of inaccurate data",
        "Right to erasure (right to be forgotten)",
        "Right to restrict processing",
        "Right to data portability",
        "Right to object to processing",
        "Rights related to automated decision making",
      ],
    },
    ccpa: {
      title: "CCPA Compliance",
      description: "California Consumer Privacy Act",
      rights: [
        "Right to know what personal information is collected",
        "Right to know if personal information is sold or disclosed",
        "Right to say no to the sale of personal information",
        "Right to access personal information",
        "Right to equal service and price",
        "Right to delete personal information",
        "Right to non-discrimination for exercising privacy rights",
      ],
    },
    soc2: {
      title: "SOC 2 Type II",
      description: "System and Organization Controls",
      rights: [
        "Security - Protection against unauthorized access",
        "Availability - System operates effectively",
        "Processing Integrity - System processing is complete and accurate",
        "Confidentiality - Information designated as confidential is protected",
        "Privacy - Personal information is collected, used, retained, and disclosed",
      ],
    },
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        {/* Hero Section */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full mb-8">
              <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-700 dark:text-purple-300 font-semibold">
                Enterprise Security
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Data Security &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Your data security is our top priority. We maintain the highest
              standards of compliance and security to protect your sensitive
              recruiting information.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Badge
                variant="outline"
                className="px-6 py-3 text-lg border-green-200 text-green-700 dark:border-green-800 dark:text-green-300"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                SOC 2 Type II Certified
              </Badge>
              <Badge
                variant="outline"
                className="px-6 py-3 text-lg border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300"
              >
                <Globe className="h-5 w-5 mr-2" />
                GDPR Compliant
              </Badge>
              <Badge
                variant="outline"
                className="px-6 py-3 text-lg border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-300"
              >
                <Shield className="h-5 w-5 mr-2" />
                ISO 27001 Aligned
              </Badge>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Enterprise-Grade Security Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "End-to-End Encryption",
                  description:
                    "All data is encrypted in transit and at rest using AES-256 encryption standards.",
                },
                {
                  icon: Database,
                  title: "Secure Data Centers",
                  description:
                    "Data hosted in SOC 2 compliant facilities with 24/7 monitoring and access controls.",
                },
                {
                  icon: Eye,
                  title: "Access Controls",
                  description:
                    "Role-based permissions and multi-factor authentication for all user accounts.",
                },
                {
                  icon: Server,
                  title: "Infrastructure Security",
                  description:
                    "Regular security audits, penetration testing, and vulnerability assessments.",
                },
                {
                  icon: FileText,
                  title: "Audit Logging",
                  description:
                    "Comprehensive logging of all system activities with tamper-proof audit trails.",
                },
                {
                  icon: Users,
                  title: "Privacy by Design",
                  description:
                    "Built with privacy principles from the ground up, minimizing data collection.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 border-0 shadow-xl dark:shadow-gray-900/50"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-8 bg-white/50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Regulatory Compliance
            </h2>

            <Tabs
              value={activeCompliance}
              onValueChange={setActiveCompliance}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl">
                <TabsTrigger
                  value="gdpr"
                  className="text-lg py-4 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                >
                  GDPR
                </TabsTrigger>
                <TabsTrigger
                  value="ccpa"
                  className="text-lg py-4 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                >
                  CCPA
                </TabsTrigger>
                <TabsTrigger
                  value="soc2"
                  className="text-lg py-4 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                >
                  SOC 2
                </TabsTrigger>
              </TabsList>

              {Object.entries(complianceData).map(([key, data]) => (
                <TabsContent key={key} value={key}>
                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl dark:shadow-gray-900/50">
                    <CardHeader className="text-center pb-8">
                      <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {data.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                        {data.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {data.rights.map((right, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                          >
                            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {right}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">
              Security Certifications & Audits
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "SOC 2 Type II", status: "Certified", color: "green" },
                { name: "ISO 27001", status: "Aligned", color: "blue" },
                { name: "GDPR", status: "Compliant", color: "purple" },
                { name: "CCPA", status: "Compliant", color: "indigo" },
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-110 bg-white dark:bg-gray-800 border-0 shadow-xl dark:shadow-gray-900/50"
                >
                  <CardContent className="p-8 text-center">
                    <Award className="h-16 w-16 mx-auto mb-4 text-purple-600 dark:text-purple-400 group-hover:text-purple-500 transition-colors duration-300" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <Badge
                      className={`bg-${cert.color}-100 text-${cert.color}-700 dark:bg-${cert.color}-900/30 dark:text-${cert.color}-300`}
                    >
                      {cert.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Our Security?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Our security team is here to answer any questions about our
              compliance, certifications, or data protection practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Contact Security Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
              >
                Download Security Whitepaper
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
