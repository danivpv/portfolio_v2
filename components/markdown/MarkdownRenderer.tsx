"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import dynamic from "next/dynamic";
import { LuCopy, LuCheck } from "react-icons/lu";

const MermaidClient = dynamic(() => import("./Mermaid").then((m) => m.Mermaid), {
  ssr: false,
  loading: () => (
    <div className="my-8 p-6 bg-bg-card rounded-xl border border-border-card text-text-muted text-center text-sm font-mono">
      Loading architecture diagram...
    </div>
  ),
});

function CodeBlock({ className, children, ...props }: any) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");
  const codeString = String(children || "").replace(/\n$/, "");
  const isBlock = Boolean(match || codeString.includes("\n"));

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isBlock) {
    return (
      <code
        className="inline bg-bg-card text-accent px-1.5 py-0.5 rounded text-[0.88em] font-mono border border-border-card"
        {...props}
      >
        {children}
      </code>
    );
  }

  const lang = match ? match[1] : "text";
  if (lang === "mermaid") {
    return (
      <div className="not-prose my-8">
        <MermaidClient chart={codeString} />
      </div>
    );
  }

  const label = match ? match[1] : "CODE";
  return (
    <div className="not-prose my-8 rounded-xl border border-border-card bg-bg-card overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between bg-bg-primary px-4 py-2.5 border-b border-border-card">
        <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
          {label}
        </span>
        <button
          onClick={handleCopy}
          type="button"
          aria-label="Copy code block"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-secondary text-text-secondary hover:text-text-primary hover:bg-accent-subtle transition-colors cursor-pointer"
        >
          {copied ? (
            <span className="inline-flex items-center gap-1 text-accent">
              <LuCheck className="w-3.5 h-3.5" /> Copied
            </span>
          ) : (
            <span className="inline-flex items-center gap-1">
              <LuCopy className="w-3.5 h-3.5" /> Copy
            </span>
          )}
        </button>
      </div>
      <div className="text-[0.88em] overflow-x-auto">
        <SyntaxHighlighter
          style={atomOneDark as any}
          language={lang}
          PreTag="div"
          customStyle={{
            margin: 0,
            padding: "1.25rem",
            background: "transparent",
            fontSize: "inherit",
            fontFamily: "var(--font-mono, monospace)",
          }}
          {...props}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

const slugify = (text: any): string => {
  if (typeof text !== "string") {
    if (Array.isArray(text)) {
      return text.map(slugify).join("-");
    }
    return String(text || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
};

const richMarkdownComponents = {
  pre: ({ children }: any) => <>{children}</>,
  code: CodeBlock as any,
  h1: ({ children }: any) => (
    <h1 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-normal text-text-primary mt-12 mb-6 tracking-wide leading-[1.2]">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => {
    const id = slugify(children);
    return (
      <h2 id={id} className="font-primary text-2xl sm:text-3xl font-normal text-text-primary mt-14 mb-6 pb-3 border-b border-border-card tracking-wide leading-relaxed scroll-mt-24">
        {children}
      </h2>
    );
  },
  h3: ({ children }: any) => {
    const id = slugify(children);
    return (
      <h3 id={id} className="font-primary text-xl sm:text-2xl font-normal text-text-primary mt-10 mb-4 tracking-wide leading-relaxed scroll-mt-24">
        {children}
      </h3>
    );
  },
  h4: ({ children }: any) => (
    <h4 className="font-primary text-lg sm:text-xl font-normal text-text-secondary mt-8 mb-4 tracking-wide leading-relaxed">
      {children}
    </h4>
  ),
};

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none prose-p:font-secondary prose-p:text-text-secondary prose-p:leading-relaxed prose-headings:font-primary prose-a:text-accent prose-a:underline-offset-4 prose-li:text-text-secondary prose-strong:text-text-primary prose-blockquote:border-accent prose-blockquote:bg-accent-subtle prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-hr:border-border-card">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={richMarkdownComponents as any}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
