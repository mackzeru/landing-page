import { PostsOrPages } from '@tryghost/content-api';
import api from './content-api';

export interface FAQPost {
  question: string;
  answer: string;
  category: string;
  tags: string[];
  slug: string;
}

// Convert Ghost posts to FAQ format
function ghostPostToFAQ(post: any): FAQPost {
  return {
    question: post.title || '',
    answer: post.html || '',
    category: post.primary_tag?.name || 'Uncategorized',
    tags: post.tags?.map((tag: any) => tag.name) || [],
    slug: post.slug || '',
  };
}

// Fetch all FAQ posts from Ghost
export async function getFAQPosts(): Promise<FAQPost[]> {
  try {
    const posts: PostsOrPages = await api.posts.browse({
      limit: 'all',
      filter: 'tag:faq',
      include: ['tags', 'authors'],
    });

    return posts.map(ghostPostToFAQ);
  } catch (error) {
    console.error('Error fetching FAQ posts:', error);
    return [];
  }
}

// Fetch FAQ posts by category
export async function getFAQPostsByCategory(category: string): Promise<FAQPost[]> {
  try {
    const posts: PostsOrPages = await api.posts.browse({
      limit: 'all',
      filter: `tag:faq+tag:${category}`,
      include: ['tags', 'authors'],
    });

    return posts.map(ghostPostToFAQ);
  } catch (error) {
    console.error(`Error fetching FAQ posts for category ${category}:`, error);
    return [];
  }
}

// Search FAQ posts
export async function searchFAQPosts(query: string): Promise<FAQPost[]> {
  try {
    const posts: PostsOrPages = await api.posts.browse({
      limit: 'all',
      filter: `tag:faq`,
      include: ['tags', 'authors'],
    });

    const searchTerm = query.toLowerCase();
    return posts
      .map(ghostPostToFAQ)
      .filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm) ||
          faq.answer.toLowerCase().includes(searchTerm) ||
          faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
          faq.category.toLowerCase().includes(searchTerm)
      );
  } catch (error) {
    console.error('Error searching FAQ posts:', error);
    return [];
  }
}