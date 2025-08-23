import GhostContentAPI, {
  PostOrPage,
  PostsOrPages,
  Tags,
} from "@tryghost/content-api";

// Initialize Ghost API
const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API_URL ?? "http://localhost:2368",
  key:
    process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY ??
    "d1430b72c0476d0b563776b904",
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
  tagSlug: string,
  currentPage: number,
  limit: number,
  search?: string
): Promise<PostsOrPages> {
  const filters: string[] = []; 
  filters.push(`tag:${tagSlug}`);
  if (search) {
    filters.push(`title:~'${search.replace(/'/g, "\\'")}*'`);
  }
  const filterString = filters.length ? filters.join("+") : undefined;

  return await api.posts.browse({
    filter: filterString, // This will now be "tag:tag-blog" instead of "tag:blog"
    limit,
    page: currentPage,
    include: ["tags", "authors"],
    order: "published_at DESC",
  });
}



/**
 * Fetch single post by slug
 */
export async function getPost(slug: string): Promise<GhostPost> {
  return await api.posts.read({ slug }, { include: ["tags", "authors"] });
}

/**
 * Fetch featured posts
 */
export async function getFeaturedPosts(limit = 3): Promise<PostsOrPages> {
  return await api.posts.browse({
    limit,
    filter: "featured:true",
    include: ["tags", "authors"],
    order: "published_at DESC",
  });
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


// import GhostContentAPI, {
//   PostOrPage,
//   PostsOrPages,
//   Tags,
//   Authors,
// } from "@tryghost/content-api";

// // Initialize Ghost API
// const api = new GhostContentAPI({
//   url: process.env.NEXT_PUBLIC_GHOST_API_URL ?? "192.168.43.62:2368",
//   key:
//     process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY ??
//     "d1430b72c0476d0b563776b904",
//   version: "v5.0",
// });

// // Extended TypeScript interfaces
// import type { Tag, Author } from "@tryghost/content-api";

// export interface GhostPost extends PostOrPage {
//   tags?: Tag[];
//   authors?: Author[];
//   // Add any custom fields you need
// }

// export interface GhostSettings {
//   title: string;
//   description: string;
// }
// // services/content-api.ts
// export async function getPosts(
//   tagSlug?: string, // Change from 'filter' to 'tagSlug' for clarity
//   currentPage: number = 1,
//   limit: number = 10,
//   search?:string, 
// ): Promise<PostsOrPages> {
//   let filter = ""; 
//   if (tagSlug && tagSlug !== "All") {
//     filter = `tag:${tagSlug}`;
//   }
//   return await api.posts.browse({
//     filter,
//     limit: limit,
//     page: currentPage,
//     include: ["tags", "authors"],
//     order: "published_at DESC",
//   });
// }


// export async function getPost(slug: string): Promise<GhostPost> {
//   return await api.posts.read({ slug }, { include: ["tags", "authors"] });
// }

// export async function getFeaturedPosts(limit = 3): Promise<PostsOrPages> {
//   return await api.posts.browse({
//     limit,
//     filter: "featured:true",
//     include: ["tags", "authors"],
//     order: "published_at DESC",
//   });
// }

// export async function getPostsByTag(
//   tagSlug: string, // This parameter should be the full tag slug
//   limit = 5
// ): Promise<PostsOrPages> {
//   return await api.posts.browse({
//     limit,
//     filter: `tag:${tagSlug}`, // This is the correct syntax
//     include: ["tags", "authors"],
//     order: "published_at DESC",
//   });
// }

// /**
//  * Fetch all tags from Ghost
//  * @returns Promise<Tags>
//  */
// export async function getAllTags(): Promise<Tags> {
//   try {
//     return await api.tags.browse({
//       limit: "all",
//       order: "name ASC",
//      filter: "slug:~'^tag-blog'"  // Filter for slugs starting with 'tag-blog'
//     });
//   } catch (error) {
//     console.error("Error fetching blog tags:", error);
//     throw error;
//   }
// }

// // Fetch related posts by tag, excluding current post
// export async function getRelatedPosts(
//   tagSlug: string,
//   excludePostId: string,
//   limit = 3
// ): Promise<PostsOrPages> {
//   return await api.posts.browse({
//     limit,
//     filter: `tag:${tagSlug}+id:-${excludePostId}`,
//     include: ["tags", "authors"],
//     order: "published_at DESC",
//   });
// }

// export default api;



// // // Helper functions with proper typing
// // export async function getPosts(
// //   filter: string | undefined,
// //   currentPage: number,
// //   limit: number
// // ): Promise<PostsOrPages> {
// //   console.log(filter);
  
// //   // Start with the base "blog" tag slug
// //   let categoryFilter = "tag:tag-blog";
  
// //   // If a sub-filter is provided, append it to the base slug
// //   if (filter) {
// //     // This creates filters like "tag:tag-blog-technology"
// //     categoryFilter = `tag:tag-blog-${filter}`;
// //   }
  
// //   return await api.posts.browse({
// //     filter: categoryFilter, // Use the corrected filter
// //     limit: limit,
// //     page: currentPage,
// //     include: ["tags", "authors"],
// //     order: "published_at DESC",
// //   });
// // }