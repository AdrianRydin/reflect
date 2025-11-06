import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/Badge";
import { ImageWithFallback } from "@/app/figma/ImageWithFallback";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { createSupabaseStatic } from "@/lib/supabase/static";

export const revalidate = 60;

type DbPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  cover_url: string | null;
  tags: string[] | null;
  read_time_minutes: number | null;
  status: "draft" | "published";
  published_at: string | null;
};

const md: Components = {
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-neutral-200">{children}</p>
  ),
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-white mb-6 mt-10">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-white mb-4 mt-8">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-white mb-3 mt-6">{children}</h3>
  ),
  ul: ({ children }) => <ul className="mb-4 ml-6 list-disc">{children}</ul>,
  ol: ({ children }) => <ol className="mb-4 ml-6 list-decimal">{children}</ol>,
  li: ({ children }) => <li className="text-neutral-300 mb-1">{children}</li>,
  code: ({ children }) => (
    <code className="px-1 py-0.5 rounded bg-neutral-800">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 overflow-auto mb-4">
      {children}
    </pre>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="underline text-blue-400 hover:text-blue-300"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ),
};

export async function generateStaticParams() {
  const sb = createSupabaseStatic();
  const { data, error } = await sb
    .from("blog_posts")
    .select("slug")
    .eq("status", "published");

  if (error || !data) return [];
  return data.map((p: { slug: string }) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const sb = createSupabaseStatic();
  const { data: post } = await sb
    .from("blog_posts")
    .select("title, excerpt")
    .eq("slug", params.slug)
    .eq("status", "published")
    .maybeSingle<Pick<DbPost, "title" | "excerpt">>();

  if (!post) return { title: "Not Found" };
  return { title: `${post.title} - Reflect`, description: post.excerpt ?? "" };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const sb = createSupabaseStatic();

  const { data: post } = await sb
    .from("blog_posts")
    .select("*")
    .eq("slug", params.slug)
    .eq("status", "published")
    .maybeSingle<DbPost>();

  if (!post) {
    const { data: hist } = await sb
      .from("blog_slug_history")
      .select("post_id")
      .eq("old_slug", params.slug)
      .maybeSingle();

    if (hist?.post_id) {
      const { data: latest } = await sb
        .from("blog_posts")
        .select("slug")
        .eq("id", hist.post_id)
        .maybeSingle();

      if (latest?.slug) redirect(`/blog/${latest.slug}`);
    }
  }

  if (!post) return notFound();

  const dateStr = post.published_at
    ? new Date(post.published_at).toLocaleDateString()
    : "";

  return (
    <article className="min-h-screen bg-neutral-950 text-neutral-200 pt-24 px-6">
      <section className="max-w-4xl mx-auto">
        <aside className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <aside className="flex justify-center items-center gap-4 text-sm text-neutral-500">
            <aside className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{dateStr}</span>
            </aside>
            <aside className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.read_time_minutes ?? 5} min read</span>
            </aside>
          </aside>
        </aside>

        {post.cover_url && (
          <aside className="mb-8">
            <ImageWithFallback
              src={post.cover_url}
              alt={post.title}
              className="w-full h-72 object-cover rounded-2xl border border-neutral-800"
            />
          </aside>
        )}

        {post.tags?.length ? (
          <aside className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-neutral-800 text-neutral-300 border-neutral-700"
              >
                {tag}
              </Badge>
            ))}
          </aside>
        ) : null}

        <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>
          {post.content}
        </ReactMarkdown>

        <aside className="mt-16 flex justify-start">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neutral-300 border border-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till bloggen
          </Link>
        </aside>
      </section>
    </article>
  );
}
