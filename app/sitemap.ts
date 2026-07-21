import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://danivpv.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: "https://danivpv.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://danivpv.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogRoutes,
    {
      url: "https://danivpv.com/cv.pdf",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
