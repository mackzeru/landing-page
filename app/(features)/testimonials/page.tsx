"use client";

import { PageLayout } from "@/components/custom/page-layou";
import CTASection from "./_components/CTASection";
// import DetailedCaseStudies from "./_components/DetailedCaseStudies";
import TestimonialsGrid from "./_components/TestimonialsGrid";
import FeaturedTestimonial from "./_components/FeaturedTestimonial";
import HeroSection from "./_components/HeroSection";
import { Post } from "@/app/_types/ghost";
import { getAllTags, getPosts } from "@/services/content-api";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/custom/use-debounce";
const limit = 10;
export default function TestimonialsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [category, setCategory] = useState<string[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("tag:testimonial");
  // Fetch posts based on selected tag dynamically
  const fetchPosts = async (tagSlug: string = "All") => {
    try {
      setIsLoading(true);
      const ghostPosts: any = await getPosts(
        tagSlug === "All" ? "tag-testimonial" : tagSlug.replace("tag:", "tag-"),
        currentPage,
        limit,
        debouncedSearch
      );      
      setTotalPage(ghostPosts?.meta?.pagination?.pages);
      if (currentPage === 1) {
        setPosts(ghostPosts || []);
      } else {
        setPosts((prev) => [...prev, ...(ghostPosts || [])]);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(selectedCategory);
  }, [debouncedSearch, currentPage, selectedCategory]);

  
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection />


      {/* Featured Testimonial */}
      <FeaturedTestimonial />


      {/* Testimonials Grid */}
      <TestimonialsGrid  isLoading={isLoading} posts={posts} />


      {/* Detailed Case Studies */}
      {/* <DetailedCaseStudies /> */}


      {/* CTA Section */}
      <CTASection />
    </PageLayout>
  );
}
