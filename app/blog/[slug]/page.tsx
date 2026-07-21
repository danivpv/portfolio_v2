import { Metadata } from "next";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog-data";
import BlogPostClient from "./client-page";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found | Daniel Iván Parra Verde" };

  return {
    title: `${post.title} | Daniel Iván Parra Verde`,
    description: post.summary,
    alternates: {
      canonical: post.canonical_url || `https://danivpv.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://danivpv.com/blog/${slug}`,
      type: "article",
      authors: ["Daniel Iván Parra Verde"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      creator: "@danivpv",
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    author: [
      {
        "@type": "Person",
        name: "Daniel Iván Parra Verde",
        url: "https://danivpv.com",
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.canonical_url || `https://danivpv.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
