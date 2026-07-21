"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { LuArrowLeft } from "react-icons/lu";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import TableOfContents, { parseHierarchicalTableOfContents } from "@/components/blog/TableOfContents";

export default function BlogPostClient({ post }: { post: BlogPost }) {
  // Rely directly on React 19 babel-plugin-react-compiler for automatic memoization
  const toc = parseHierarchicalTableOfContents(post.content);

  return (
    <div className="min-h-screen bg-transparent text-slate-100 py-16 px-6 sm:px-12 lg:px-24 selection:bg-emerald-500/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Back Button + Article Header + Content stacked vertically */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-emerald-400 font-secondary text-xs uppercase tracking-wider border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300"
              >
                <LuArrowLeft className="w-4 h-4" />
                <span>Back to Overview</span>
              </Link>
            </div>

            <header className="border-b border-white/[0.1] pb-8">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm text-emerald-400 uppercase tracking-widest mb-6">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTimeMinutes} min read</span>
              </div>

              <h1 className="font-primary text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-100 tracking-tight leading-[1.18] mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300 tracking-wide"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            <main className="relative z-10">
              <MarkdownRenderer
                content={post.content.replace(/^\s*#\s+[^\n]+(?:\r?\n)+/, "")}
              />
            </main>
          </div>

          {/* Right Column: Scrollable Table of Contents sticky horizontal to the left group */}
          {toc.length > 0 && <TableOfContents sections={toc} />}
        </div>
      </div>
    </div>
  );
}
