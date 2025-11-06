"use client";

import { useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import type { ChangeEvent, FormEvent } from "react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type PostStatus = "draft" | "published";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function estimateReadTime(md: string) {
  const words = md.trim().split(/\s+/).length || 0;
  return Math.max(1, Math.round(words / 200));
}

function isPostStatus(v: string): v is PostStatus {
  return v === "draft" || v === "published";
}

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("# Ny bloggpost\n\nSkriv här…");
  const [tags, setTags] = useState<string>("");
  const [coverUrl, setCoverUrl] = useState<string>("");
  const [status, setStatus] = useState<PostStatus>("draft");
  const [isSaving, setIsSaving] = useState(false);

  const computedSlug = useMemo(() => slug || slugify(title), [slug, title]);
  const readTime = useMemo(() => estimateReadTime(content), [content]);

  async function uploadCover(file: File) {
    const ext = file.name.split(".").pop();
    const path = `covers/${Date.now()}.${ext ?? "png"}`;

    const { error } = await supabase.storage
      .from("blog-images")
      .upload(path, file, { upsert: true });

    if (error) throw error;

    const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
    setCoverUrl(data.publicUrl);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSaving(true);
    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: computedSlug,
          excerpt,
          content,
          cover_url: coverUrl || null,
          tags: tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
          read_time_minutes: readTime,
          status,
        }),
      });

      const json: unknown = await res.json();
      if (!res.ok) {
        const message =
          typeof json === "object" && json !== null && "error" in json
            ? String((json as { error?: unknown }).error ?? "Kunde inte spara")
            : "Kunde inte spara";
        throw new Error(message);
      }

      const post = json as { post?: { slug?: string } };
      const slugToGo = post.post?.slug ?? computedSlug;

      alert("Post skapad!");
      window.location.href = `/blog/${slugToGo}`;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      alert(message);
    } finally {
      setIsSaving(false);
    }
  }

  function onStatusChange(e: ChangeEvent<HTMLSelectElement>) {
    const v = e.target.value;
    if (isPostStatus(v)) setStatus(v);
  }

  async function onCoverFileChange(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    try {
      await uploadCover(f);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      alert(message);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 px-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Ny bloggartikel</h1>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Titel</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2"
              placeholder="Min första bloggpost"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-neutral-400 mb-1">
                Slug
              </label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2"
                placeholder="min-forsta-bloggpost"
              />
              <p className="text-xs text-neutral-500 mt-1">
                URL: /blog/{computedSlug}
              </p>
            </div>

            <div>
              <label className="block text-sm text-neutral-400 mb-1">
                Status
              </label>
              <select
                value={status}
                onChange={onStatusChange}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2"
              >
                <option value="draft">draft</option>
                <option value="published">published</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Utdrag
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 h-24"
              placeholder="Kort sammanfattning"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Innehåll (Markdown)
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 h-64 font-mono"
              required
            />
            <p className="text-xs text-neutral-500 mt-1">
              Beräknad lästid: {readTime} min
            </p>
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Taggar (kommaseparerade)
            </label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2"
              placeholder="React, Next.js, CSS"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Omslagsbild
            </label>
            <div className="flex items-center gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={onCoverFileChange}
              />
              {coverUrl && (
                <a
                  href={coverUrl}
                  target="_blank"
                  className="text-sm underline"
                >
                  Förhandsgranska
                </a>
              )}
            </div>
            {!!coverUrl && (
              <p className="text-xs text-neutral-500 mt-1 truncate">
                {coverUrl}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-black hover:opacity-90 disabled:opacity-50"
          >
            {isSaving ? "Sparar..." : "Publicera / Spara utkast"}
          </button>
        </form>
      </section>
    </main>
  );
}
