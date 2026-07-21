import React from "react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog-data";
import { BlogPost } from "@/lib/types";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Blog | Daniel Iván Parra Verde",
  description:
    "Production notes and architectural deep dives on machine learning platforms, AI agents, and distributed cloud systems.",
  alternates: {
    canonical: "https://danivpv.com/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-transparent text-slate-100 py-16 px-6 sm:px-12 lg:px-24 selection:bg-emerald-500/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-emerald-400 font-secondary text-xs uppercase tracking-wider border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 mb-8"
          >
            <LuArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-baseline justify-between border-b border-white/[0.07] pb-6">
            <h1 className="font-primary text-4xl sm:text-5xl font-normal text-slate-100 tracking-tight">
              Engineering Blog
            </h1>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              {"// Articles"}
            </span>
          </div>
          <p className="font-secondary text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
            Production notes and architectural deep dives on machine learning platforms, AI agents, and distributed cloud systems.
          </p>
        </div>

        <div className="max-w-3xl grid grid-cols-1 gap-8">
          {posts.map((post: BlogPost) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-white/[0.015] border border-white/[0.06] hover:border-emerald-400/40 transition-all duration-300"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500 uppercase tracking-wider mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTimeMinutes} min read</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block focus:outline-none">
                  <h2 className="font-primary text-xl sm:text-2xl font-normal text-slate-100 group-hover:text-emerald-300 transition-colors tracking-tight leading-snug mb-3">
                    {post.title}
                  </h2>
                </Link>

                <p className="font-secondary text-slate-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {post.summary}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-white/[0.05]">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="font-mono text-xs uppercase tracking-wider text-slate-500 group-hover:text-slate-400 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-secondary text-sm font-medium text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1.5 transition-all duration-300 shrink-0"
                >
                  <span>Read Article</span>
                  <LuArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
