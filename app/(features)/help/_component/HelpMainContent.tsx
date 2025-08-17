"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, ChevronRight, Clock, Star, ExternalLink } from "lucide-react";
import { useState } from "react";

type ContentType = {
  categories: {
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    count: number;
  }[];
  articles: {
    title: string;
    description: string;
    category: string;
    readTime: string;
    rating: number;
    views: string;
  }[];
  videos: {
    title: string;
    duration: string;
    thumbnail?: string;
    views: string;
    category: string;
  }[];
  guides: {
    title: string;
    category: string;
  }[];
};

const HelpMainContent = ({ content }: { content: ContentType }) => {
  const [activeCategory, setActiveCategory] = useState(
    content.categories[0].id
  );
  const [activeTab, setActiveTab] = useState("articles");

  // Filter content based on active category
  const filteredArticles = content.articles.filter(
    (article) => article.category.toLowerCase() === activeCategory
  );
  const filteredVideos = content.videos.filter(
    (video) => video.category.toLowerCase() === activeCategory
  );
  const filteredGuides = content.guides.filter(
    (guide) => guide.category.toLowerCase() === activeCategory
  );

  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 overflow-y-auto max-h-[calc(100vh-4rem)] pb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Categories
              </h3>
              <div className="space-y-2 pr-2">
                {content.categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="h-5 w-5" />
                      <span className="font-medium">{category.label}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${
                        activeCategory === category.id
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl h-16">
                <TabsTrigger
                  value="articles"
                  className="text-lg py-3 rounded-xl text-center transition-colors
                    data-[state=active]:bg-gradient-to-r 
                    data-[state=active]:from-purple-500 
                    data-[state=active]:to-blue-500 
                    data-[state=active]:text-white
                    data-[state=inactive]:text-gray-600
                    data-[state=inactive]:dark:text-gray-300
                    data-[state=inactive]:hover:text-gray-900
                    data-[state=inactive]:dark:hover:text-white"
                >
                  Articles
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="text-lg py-3 rounded-xl text-center transition-colors
                    data-[state=active]:bg-gradient-to-r 
                    data-[state=active]:from-purple-500 
                    data-[state=active]:to-blue-500 
                    data-[state=active]:text-white
                    data-[state=inactive]:text-gray-600
                    data-[state=inactive]:dark:text-gray-300
                    data-[state=inactive]:hover:text-gray-900
                    data-[state=inactive]:dark:hover:text-white"
                >
                  Videos
                </TabsTrigger>
                <TabsTrigger
                  value="guides"
                  className="text-lg py-3 rounded-xl text-center transition-colors
                    data-[state=active]:bg-gradient-to-r 
                    data-[state=active]:from-purple-500 
                    data-[state=active]:to-blue-500 
                    data-[state=active]:text-white
                    data-[state=inactive]:text-gray-600
                    data-[state=inactive]:dark:text-gray-300
                    data-[state=inactive]:hover:text-gray-900
                    data-[state=inactive]:dark:hover:text-white"
                >
                  Guides
                </TabsTrigger>
              </TabsList>

              <TabsContent value="articles">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {activeCategory === "all"
                      ? "Popular Articles"
                      : `Articles in ${
                          content.categories.find(
                            (c) => c.id === activeCategory
                          )?.label
                        }`}
                  </h2>
                  {(filteredArticles.length > 0
                    ? filteredArticles
                    : content.articles
                  ).map((article, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.01] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <Badge
                                variant="outline"
                                className="text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
                              >
                                {article.category}
                              </Badge>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{article.readTime}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 text-yellow-500" />
                                  <span>{article.rating}</span>
                                </div>
                                <span>{article.views} views</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {article.description}
                            </p>
                          </div>
                          <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 ml-4" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {activeCategory === "all"
                      ? "Video Tutorials"
                      : `Videos in ${
                          content.categories.find(
                            (c) => c.id === activeCategory
                          )?.label
                        }`}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {(filteredVideos.length > 0
                      ? filteredVideos
                      : content.videos
                    ).map((video, index) => (
                      <Card
                        key={index}
                        className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50 overflow-hidden"
                      >
                        <div className="relative">
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium">
                            {video.duration}
                          </div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Video className="h-8 w-8 text-purple-600 ml-1" />
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge
                              variant="outline"
                              className="text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
                            >
                              {video.category}
                            </Badge>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {video.views} views
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {video.title}
                          </h3>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="guides">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Step-by-Step Guides
                  </h2>
                  <div className="grid gap-6">
                    {(filteredGuides.length > 0
                      ? filteredGuides
                      : content.guides
                    ).map((guide, index) => (
                      <Card
                        key={index}
                        className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.01] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                                {index + 1}
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                  {guide.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                  Comprehensive step-by-step instructions
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                              <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpMainContent;
