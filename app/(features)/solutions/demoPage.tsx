// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Users,
//   Briefcase,
//   Sparkles,
//   CheckCircle,
//   ArrowRight,
//   Target,
//   Zap,
//   Star,
//   Award,
//   ChevronRight,
//   Play,
//   Download,
//   BookOpen,
//   MessageSquare,
// } from "lucide-react";
// import { ScrollReveal } from "@/components/custom/ScrollReveal";
// import { PageLayout } from "@/components/custom/page-layou";
// import { industries, stakeholders } from "./demo";

// export default function SolutionsPage() {
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("[data-section]");
//       const scrollPosition = window.scrollY + 100;

//       sections.forEach((section) => {
//         const element = section as HTMLElement;
//         const top = element.offsetTop;
//         const height = element.offsetHeight;
//         const id = element.getAttribute("data-section");

//         if (scrollPosition >= top && scrollPosition < top + height) {
//           setActiveSection(id || "");
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.querySelector(`[data-section="${sectionId}"]`);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <PageLayout>
//       {/* Hero Section */}
//       <section className="relative py-24 bg-gradient-to-br from-blue-50 via-purple-50/30 to-green-50/30 dark:from-blue-900/10 dark:via-purple-900/5 dark:to-green-900/10 overflow-hidden">
//         <div className="absolute inset-0">
//           <svg
//             className="absolute inset-0 w-full h-full opacity-20"
//             viewBox="0 0 1440 800"
//             fill="none"
//           >
//             <defs>
//               <pattern
//                 id="solutions-grid"
//                 width="60"
//                 height="60"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <path
//                   d="M 60 0 L 0 0 0 60"
//                   fill="none"
//                   stroke="#e0e7ff"
//                   strokeWidth="1"
//                   opacity="0.5"
//                 />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#solutions-grid)" />
//           </svg>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
//           <ScrollReveal>
//             <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 mb-6 text-base px-6 py-3 border-0">
//               <Sparkles className="h-4 w-4 mr-2" />
//               AI-Powered Solutions for Every Industry
//             </Badge>
//             <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
//               Tailored Recruiting Solutions
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
//                 for Your Industry & Role
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
//               Whether you're a talent acquisition leader, recruiter, hiring
//               manager, or talent operations professional, our AI adapts to your
//               unique challenges and industry requirements.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
//                 Explore Solutions
//                 <ArrowRight className="h-5 w-5 ml-2" />
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-2 border-gray-300 dark:border-gray-600 px-8 py-4 rounded-full font-semibold text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
//               >
//                 <Play className="h-5 w-5 mr-2" />
//                 Watch Demo
//               </Button>
//             </div>
//           </ScrollReveal>
//         </div>
//       </section>

//       {/* Quick Navigation */}
//       <section className="sticky top-16 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 py-4">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex items-center justify-center space-x-8 overflow-x-auto">
//             <div className="flex items-center space-x-6">
//               <span className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
//                 Jump to:
//               </span>
//               {["Stakeholders", "Industries"].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section.toLowerCase())}
//                   className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
//                     activeSection.includes(section.toLowerCase())
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                       : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//                   }`}
//                 >
//                   {section}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stakeholders Section */}
//       <section
//         data-section="stakeholders"
//         className="py-24 bg-white dark:bg-gray-900"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <ScrollReveal>
//             <div className="text-center mb-20">
//               <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6 text-base px-4 py-2">
//                 <Users className="h-4 w-4 mr-2" />
//                 By Role & Responsibility
//               </Badge>
//               <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
//                 Solutions by Stakeholder
//               </h2>
//               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//                 Tailored AI recruiting solutions designed for your specific role
//                 and challenges
//               </p>
//             </div>
//           </ScrollReveal>

//           <div className="space-y-32">
//             {stakeholders.map((stakeholder, index) => (
//               <div
//                 key={stakeholder.id}
//                 data-section={stakeholder.id}
//                 className="scroll-mt-32"
//               >
//                 <ScrollReveal delay={index * 100}>
//                   <div
//                     className={`grid lg:grid-cols-2 gap-16 items-center ${
//                       index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
//                     }`}
//                   >
//                     {/* Content */}
//                     <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
//                       <div className="flex items-center mb-6">
//                         <div
//                           className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stakeholder.color} flex items-center justify-center shadow-lg mr-4`}
//                         >
//                           <stakeholder.icon className="h-8 w-8 text-white" />
//                         </div>
//                         <div>
//                           <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
//                             {stakeholder.title}
//                           </h3>
//                           <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
//                             {stakeholder.description}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Pain Points */}
//                       <div className="mb-8">
//                         <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
//                           <Target className="h-5 w-5 mr-2 text-red-500" />
//                           Common Challenges
//                         </h4>
//                         <ul className="space-y-3">
//                           {stakeholder.painPoints.map((point, i) => (
//                             <li
//                               key={i}
//                               className="flex items-start text-gray-600 dark:text-gray-300"
//                             >
//                               <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                               {point}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       {/* Solutions */}
//                       <div className="mb-8">
//                         <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
//                           <Zap className="h-5 w-5 mr-2 text-green-900" />
//                           Leelu.ai Solutions
//                         </h4>
//                         <ul className="space-y-3">
//                           {stakeholder.solutions.map((solution, i) => (
//                             <li
//                               key={i}
//                               className="flex items-start text-gray-600 dark:text-gray-300"
//                             >
//                               <CheckCircle className="h-5 w-5 text-green-900 mr-3 mt-0.5 flex-shrink-0" />
//                               {solution}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       {/* Metrics */}
//                       <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-6 mb-8">
//                         <div className="grid grid-cols-2 gap-6">
//                           <div>
//                             <div
//                               className={`text-3xl font-bold bg-gradient-to-r ${stakeholder.color} bg-clip-text text-transparent`}
//                             >
//                               {stakeholder.metrics.primary}
//                             </div>
//                             <div className="text-sm text-gray-600 dark:text-gray-400">
//                               {stakeholder.metrics.secondary}
//                             </div>
//                           </div>
//                           <div>
//                             <div className="text-lg font-semibold text-gray-900 dark:text-white">
//                               {stakeholder.metrics.tertiary}
//                             </div>
//                             <div className="text-sm text-gray-600 dark:text-gray-400">
//                               average improvement
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* CTA */}
//                       <div className="flex flex-col sm:flex-row gap-4">
//                         <Button
//                           className={`bg-gradient-to-r ${stakeholder.color} hover:shadow-lg transition-all duration-300 text-white px-6 py-3 rounded-full font-semibold`}
//                         >
//                           Get Started
//                           <ArrowRight className="h-4 w-4 ml-2" />
//                         </Button>
//                         <Button
//                           variant="outline"
//                           className="px-6 py-3 rounded-full font-semibold bg-transparent"
//                         >
//                           <BookOpen className="h-4 w-4 mr-2" />
//                           Learn More
//                         </Button>
//                       </div>
//                     </div>

//                     {/* Testimonial Card */}
//                     <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
//                       <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50">
//                         <CardContent className="p-8">
//                           <div className="flex items-center mb-6">
//                             <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                             <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                             <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                             <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                             <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                           </div>
//                           <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
//                             "{stakeholder.testimonial.quote}"
//                           </blockquote>
//                           <div className="flex items-center">
//                             <div
//                               className={`w-12 h-12 rounded-full bg-gradient-to-r ${stakeholder.color} flex items-center justify-center text-white font-bold text-lg mr-4`}
//                             >
//                               {stakeholder.testimonial.author
//                                 .split(" ")
//                                 .map((n) => n[0])
//                                 .join("")}
//                             </div>
//                             <div>
//                               <div className="font-semibold text-gray-900 dark:text-white">
//                                 {stakeholder.testimonial.author}
//                               </div>
//                               <div className="text-sm text-gray-600 dark:text-gray-400">
//                                 {stakeholder.testimonial.role} at{" "}
//                                 {stakeholder.testimonial.company}
//                               </div>
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </div>
//                   </div>
//                 </ScrollReveal>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries Section */}
//       <section
//         data-section="industries"
//         className="py-24 bg-gray-50 dark:bg-gray-800"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <ScrollReveal>
//             <div className="text-center mb-20">
//               <Badge className="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 mb-6 text-base px-4 py-2">
//                 <Briefcase className="h-4 w-4 mr-2" />
//                 Industry Expertise
//               </Badge>
//               <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
//                 Solutions by Industry
//               </h2>
//               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//                 Deep industry knowledge and specialized recruiting solutions for
//                 your sector
//               </p>
//             </div>
//           </ScrollReveal>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {industries.map((industry, index) => (
//               <ScrollReveal key={industry.id} delay={index * 50}>
//                 <Card
//                   data-section={industry.id}
//                   className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group scroll-mt-32"
//                   onClick={() => scrollToSection(industry.id)}
//                 >
//                   <CardContent className="p-6">
//                     <div
//                       className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       <industry.icon className="h-7 w-7 text-white" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                       {industry.title}
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
//                       {industry.description}
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
//                         <span>{industry.stats.companies} companies</span>
//                         <span>{industry.stats.hires} hires</span>
//                       </div>
//                       <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
//                     </div>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>
//             ))}
//           </div>

//           {/* Detailed Industry Sections */}
//           <div className="mt-32 space-y-24">
//             {industries.map((industry, index) => (
//               <div
//                 key={`${industry.id}-detail`}
//                 data-section={`${industry.id}-detail`}
//                 className="scroll-mt-32"
//               >
//                 <ScrollReveal delay={index * 100}>
//                   <Card className="border-0 shadow-xl bg-white dark:bg-gray-900">
//                     <CardContent className="p-12">
//                       <div className="grid lg:grid-cols-3 gap-12">
//                         {/* Header */}
//                         <div className="lg:col-span-3">
//                           <div className="flex items-center mb-6">
//                             <div
//                               className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center shadow-lg mr-6`}
//                             >
//                               <industry.icon className="h-8 w-8 text-white" />
//                             </div>
//                             <div>
//                               <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
//                                 {industry.title}
//                               </h3>
//                               <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
//                                 {industry.description}
//                               </p>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Challenges */}
//                         <div>
//                           <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
//                             <Target className="h-5 w-5 mr-2 text-red-500" />
//                             Industry Challenges
//                           </h4>
//                           <ul className="space-y-4">
//                             {industry.challenges.map((challenge, i) => (
//                               <li
//                                 key={i}
//                                 className="flex items-start text-gray-600 dark:text-gray-300"
//                               >
//                                 <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                                 {challenge}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         {/* Solutions */}
//                         <div>
//                           <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
//                             <Zap className="h-5 w-5 mr-2 text-green-900" />
//                             Our Solutions
//                           </h4>
//                           <ul className="space-y-4">
//                             {industry.solutions.map((solution, i) => (
//                               <li
//                                 key={i}
//                                 className="flex items-start text-gray-600 dark:text-gray-300"
//                               >
//                                 <CheckCircle className="h-5 w-5 text-green-900 mr-3 mt-0.5 flex-shrink-0" />
//                                 {solution}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         {/* Stats & Case Study */}
//                         <div>
//                           <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
//                             <Award className="h-5 w-5 mr-2 text-blue-500" />
//                             Success Story
//                           </h4>

//                           {/* Stats */}
//                           <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-6 mb-6">
//                             <div className="grid grid-cols-3 gap-4 text-center">
//                               <div>
//                                 <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
//                                   {industry.stats.companies}
//                                 </div>
//                                 <div className="text-xs text-gray-600 dark:text-gray-400">
//                                   Companies
//                                 </div>
//                               </div>
//                               <div>
//                                 <div className="text-2xl font-bold text-green-600 dark:text-green-400">
//                                   {industry.stats.hires}
//                                 </div>
//                                 <div className="text-xs text-gray-600 dark:text-gray-400">
//                                   Successful Hires
//                                 </div>
//                               </div>
//                               <div>
//                                 <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
//                                   {industry.stats.satisfaction}
//                                 </div>
//                                 <div className="text-xs text-gray-600 dark:text-gray-400">
//                                   Satisfaction
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           {/* Case Study */}
//                           <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
//                             <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
//                               {industry.caseStudy.company}
//                             </h5>
//                             <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
//                               <strong>Challenge:</strong>{" "}
//                               {industry.caseStudy.challenge}
//                             </p>
//                             <p className="text-sm text-green-600 dark:text-green-400">
//                               <strong>Result:</strong>{" "}
//                               {industry.caseStudy.result}
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* CTA */}
//                       <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                           <Button
//                             className={`bg-gradient-to-r ${industry.color} hover:shadow-lg transition-all duration-300 text-white px-8 py-3 rounded-full font-semibold`}
//                           >
//                             Get Industry Solution
//                             <ArrowRight className="h-4 w-4 ml-2" />
//                           </Button>
//                           <Button
//                             variant="outline"
//                             className="px-8 py-3 rounded-full font-semibold bg-transparent"
//                           >
//                             <MessageSquare className="h-4 w-4 mr-2" />
//                             Talk to Expert
//                           </Button>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </ScrollReveal>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <svg
//             className="absolute inset-0 w-full h-full opacity-10"
//             viewBox="0 0 1440 800"
//             fill="none"
//           >
//             <defs>
//               <pattern
//                 id="cta-pattern"
//                 width="80"
//                 height="80"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <circle cx="40" cy="40" r="2" fill="white" opacity="0.5" />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#cta-pattern)" />
//           </svg>
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
//           <ScrollReveal>
//             <h2 className="text-5xl font-bold text-white mb-6">
//               Ready to Transform Your Recruiting?
//             </h2>
//             <p className="text-xl text-blue-100 mb-12 leading-relaxed">
//               Join thousands of companies who've found their perfect recruiting
//               solution with Leelu.ai. Get started with a personalized demo
//               tailored to your industry and role.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
//                 <Play className="h-5 w-5 mr-2" />
//                 Get Personalized Demo
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg bg-transparent"
//               >
//                 <Download className="h-5 w-5 mr-2" />
//                 Download Industry Guide
//               </Button>
//             </div>
//           </ScrollReveal>
//         </div>
//       </section>
//     </PageLayout>
//   );
// }
