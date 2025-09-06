import GhostContentAPI, {
  PostOrPage,
  PostsOrPages,
  Tags,
} from "@tryghost/content-api";

// Initialize Ghost API
const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API_URL??"",
  key:
    process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY??"",
  version: "v5.0",
});

import type { Tag, Author } from "@tryghost/content-api";

export interface GhostPost extends PostOrPage {
  tags?: Tag[];
  authors?: Author[];
}

export interface GhostSettings {
  title: string;
  description: string;
}

/**
 * Fetch posts dynamically by optional tagSlug and optional search term
 */

export async function getPosts(
  tagSlug?: string,
  currentPage: number = 1,
  limit: number = 10,
  search?: string,
  isFeatured?: boolean,
): Promise<PostsOrPages> {
  const options: any = {
    limit,
    page: currentPage,
    include: ["tags", "authors"],
    order: "published_at DESC",
  };

  // Build filter array
  const filterParts: string[] = [];
  
  if (tagSlug) {
    const cleanTagSlug = tagSlug.replace(/^tag:/, '');
    filterParts.push(`tag:${cleanTagSlug}`);
  }
  
  if (isFeatured) {
    filterParts.push("featured:true");
  }
  
  // Apply filter if we have any filter parts
  if (filterParts.length > 0) {
    options.filter = filterParts.join("+");
  }
  
  // Apply search separately (Ghost handles this better)
  if (search) {
    options.search = search; // Ghost automatically adds wildcards for search
  }

  return await api.posts.browse(options);
}



/**
 * Fetch single post by slug
 */
export async function getPost(slug: string): Promise<GhostPost> {
  return await api.posts.read({ slug }, { include: ["tags", "authors"] });
}

/**
 * Fetch tags dynamically by optional prefix
 */slug:~'^tag-blog'
export async function getAllTags(prefix?: string): Promise<Tags> {
  try {
    const filter = prefix ? `slug:~'^${prefix}'` : undefined;
    return await api.tags.browse({
      limit: "all",
      order: "name ASC",
      filter,
    });
  } catch (error) {
    console.error("Error fetching tags:", error);
    throw error;
  }
}

/**
 * Fetch posts by a tag and exclude a post
 */
export async function getRelatedPosts(
  tagSlug: string,
  excludePostId: string,
  limit = 3
): Promise<PostsOrPages> {
  return await api.posts.browse({
    limit,
    filter: `tag:${tagSlug}+id:-${excludePostId}`,
    include: ["tags", "authors"],
    order: "published_at DESC",
  });
}

export default api;