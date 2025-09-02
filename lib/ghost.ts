import GhostContentAPI, {
  PostOrPage,
  PostsOrPages,
} from "@tryghost/content-api";

// Initialize Ghost API
const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API_URL ?? "",
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY ?? "",
  version: "v5.0",
});

// Define TypeScript interfaces (optional, but recommended)
export interface GhostPost extends PostOrPage {
  // Add custom fields if needed
}

export interface GhostSettings {
  title: string;
  description: string;
}

export default api;
