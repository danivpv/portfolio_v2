import React from "react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog-data";
import { BlogPost } from "@/lib/types";
import { LuArrowRight } from "react-icons/lu";

export default function ProjectsSection() {
  const posts = getBlogPosts();

  return (
    <section id="projects" className="scroll-mt-20 py-8 sm:py-10">
      <div className="flex items-baseline justify-between border-b border-border-card pb-4 mb-8 sm:mb-10">
        {/* Large display h2 heading ONLY uses --font-primary (Serif) */}
        <h2 className="font-primary text-4xl sm:text-5xl font-normal text-text-primary tracking-wide leading-relaxed">
          Blog
        </h2>
        {/* Small uppercase metadata tag ONLY uses --font-mono */}
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          03 // How
        </span>
      </div>

      <div className="max-w-3xl grid grid-cols-1 gap-8">
        {posts.map((post: BlogPost) => (
          <article
            key={post.slug}
            className="group flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-bg-card border border-border-card hover:border-accent/40 hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.12)] hover:-translate-y-1 focus-within:ring-2 focus-within:ring-accent/50 transition-all duration-300"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTimeMinutes} min read</span>
              </div>

              <Link href={`/blog/${post.slug}`} className="block focus:outline-none">
                <h3 className="font-primary text-xl sm:text-2xl font-normal text-text-primary group-hover:text-accent transition-colors tracking-tight leading-snug mb-3">
                  {post.title}
                </h3>
              </Link>

              <p className="font-secondary text-text-secondary text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {post.summary}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-border-card">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="font-mono text-xs uppercase tracking-wider text-text-muted group-hover:text-text-secondary transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 font-secondary text-sm font-medium text-accent hover:text-accent/80 group-hover:translate-x-1.5 transition-all duration-300 shrink-0"
              >
                <span>Read Article</span>
                <LuArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

