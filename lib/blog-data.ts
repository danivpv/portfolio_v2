import fs from "fs";
import path from "path";
import { BlogPost } from "./types";

interface BlogPostMetadata extends Omit<BlogPost, "content"> {
  filename?: string;
}

const BLOG_POSTS_METADATA: BlogPostMetadata[] = [
  {
    slug: "what-an-ml-platform-actually-is",
    title: "What an ML Platform Actually Is and Why I Built One Instead of Certifying for One",
    date: "2026-07-18",
    tags: ["mlops", "aws", "mlflow", "feast", "python"],
    canonical_url: "https://danivpv.com/blog/what-an-ml-platform-actually-is",
    summary: "Data scientists solve the last-mile problem. AI/ML/Data/Software engineers build the road. Here is what the ML platform engineer's piece actually looks like when built from scratch, grounded in 27 architectural decisions and hard-earned production lessons.",
    readTimeMinutes: 12,
  },
];

function loadBlogPostContent(slug: string, filename?: string): string {
  try {
    const filePath = path.join(process.cwd(), "content", "blog", filename || `${slug}.md`);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
  } catch (error) {
    console.error(`Failed to read blog post content for slug: ${slug}`, error);
  }
  return "";
}

export function getBlogPosts(): BlogPost[] {
  return BLOG_POSTS_METADATA.map((meta) => ({
    ...meta,
    content: loadBlogPostContent(meta.slug, meta.filename),
  }));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const meta = BLOG_POSTS_METADATA.find((p) => p.slug === slug);
  if (!meta) return undefined;

  return {
    ...meta,
    content: loadBlogPostContent(meta.slug, meta.filename),
  };
}
