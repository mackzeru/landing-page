import { Post } from '@/app/_types/ghost';
import GhostContentAPI, { PostOrPage, PostsOrPages, Tags, Authors } from '@tryghost/content-api';

// Initialize Ghost API
const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API_URL!,
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY!,
  version: "v5.0"
});

// Extended TypeScript interfaces
import type { Tag, Author } from '@tryghost/content-api';

export interface GhostPost extends PostOrPage {
  tags?: Tag[];
  authors?: Author[];
  // Add any custom fields you need
}

export interface GhostSettings {
  title: string;
  description: string;
}

// Helper functions with proper typing
export async function getPosts(options = {}): Promise<PostsOrPages> {
  return await api.posts.browse({
    limit: 10,
    include: ['tags', 'authors'],
    order: 'published_at DESC',
    ...options
  });
}

export async function getPost(slug: string): Promise<GhostPost> {
  return await api.posts.read(
    { slug },
    { include: ['tags', 'authors'] }
  );
}

export async function getFeaturedPosts(limit = 3): Promise<PostsOrPages> {
  return await api.posts.browse({
    limit,
    filter: 'featured:true',
    include: ['tags', 'authors'],
    order: 'published_at DESC'
  });
}

export async function getPostsByTag(tagSlug: string, limit = 5): Promise<PostsOrPages> {
  return await api.posts.browse({
    limit,
    filter: `tag:${tagSlug}`,
    include: ['tags', 'authors'],
    order: 'published_at DESC'
  });
}

/**
 * Fetch all tags from Ghost
 * @returns Promise<Tags>
 */
export async function getAllTags(): Promise<Tags> {
  try {
    return await api.tags.browse({
      limit: 'all',
      order: 'name ASC'
    });
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
}
// Fetch related posts by tag, excluding current post
export async function getRelatedPosts(tagSlug: string, excludePostId: string, limit = 3): Promise<PostsOrPages> {
  return await api.posts.browse({
    limit,
    filter: `tag:${tagSlug}+id:-${excludePostId}`,
    include: ['tags', 'authors'],
    order: 'published_at DESC',
  });
}





export default api;