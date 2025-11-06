// app/blog/page.tsx
export const dynamic = "force-dynamic";

import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Card } from "@/components/Card";
import { ImageWithFallback } from "@/app/figma/ImageWithFallback";
import { createSupabaseServer } from "@/lib/supabase/server";

export const metadata = {
  title: "Blog - Reflect",
  description: "Read insights and articles about frontend development.",
};

export default async function BlogPage() {
  const supabase = await createSupabaseServer();

  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select(
      "id, slug, title, excerpt, cover_url, tags, read_time_minutes, published_at"
    )
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error(error);
    return (
      <section className="min-h-screen bg-neutral-950 pt-20">
        <div className="max-w-6xl mx-auto px-6 py-24 text-neutral-300">
          Kunde inte ladda poster just nu.
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-neutral-950 pt-20">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <aside className="mb-16">
          <h1 className="mb-4 text-white">Blog</h1>
          <p className="text-neutral-400 max-w-2xl">
            Thoughts, ideas, and insights on web development, technology, and my
            journey.
          </p>
        </aside>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(posts ?? []).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <Card className="overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-neutral-900/50 transition-shadow bg-neutral-900 border-neutral-800">
                <aside className="relative h-48 overflow-hidden bg-neutral-800">
                  <ImageWithFallback
                    src={post.cover_url ?? ""}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </aside>

                <aside className="p-6">
                  <aside className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                    <aside className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {post.published_at
                          ? new Date(post.published_at).toLocaleDateString()
                          : ""}
                      </span>
                    </aside>
                    <aside className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.read_time_minutes ?? 5} min read</span>
                    </aside>
                  </aside>

                  <h3 className="mb-2 text-white group-hover:text-neutral-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    {post.excerpt ?? ""}
                  </p>
                </aside>
              </Card>
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
}
