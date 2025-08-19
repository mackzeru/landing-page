// types/blog.ts
export interface Author {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: Author | string; // Can be object or just name string
  date: string;
  readTime: string;
  category: string;
  tags?: string[];
  image?: string;
  featured?: boolean;
  slug?: string;
  feature_image?: string;
  primary_tag?:{
    id: string ;
    name: string;
  } 
}

export interface FeaturedPost extends BlogPost {
  featured: true;
}
