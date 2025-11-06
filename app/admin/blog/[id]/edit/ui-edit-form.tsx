"use client";

import { useMemo, useState, type FormEvent } from "react";

type PostStatus = "draft" | "published";
type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_url: string | null;
  tags: string[] | null;
  read_time_minutes: number | null;
  status: PostStatus;
};

function estimateReadTime(md: string) {
  const words = md.trim().split(/\s+/).length || 0;
  return Math.max(1, Math.round(words / 200));
}

export default function EditForm({ post }: { post: Post }) {
  const [title, setTitle] = useState(post.title);
  const [slug, setSlug] = useState(post.slug);
  const [excerpt, setExcerpt] = useState(post.excerpt ?? "");
  const [content, setContent] = useState(post.content);
  const [tags, setTags] = useState<string>((post.tags ?? []).join(", "));
  const [coverUrl, setCoverUrl] = useState<string>(post.cover_url ?? "");
  const [status, setStatus] = useState<PostStatus>(post.status);
  const [saving, setSaving] = useState(false);

  const readTime = useMemo(() => estimateReadTime(content), [content]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch(`/api/blog/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
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
      const j = await res.json();
      if (!res.ok) throw new Error(j?.error ?? "Kunde inte spara");
      alert("Sparat!");
    } catch (e: unknown) {
      alert(e instanceof Error ? e.message : String(e));
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="block text-sm text-neutral-400 mb-1">Titel</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-neutral-400 mb-1">Slug</label>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-400 mb-1">Status</label>
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value === "published" ? "published" : "draft")
            }
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2"
          >
            <option value="draft">draft</option>
            <option value="published">published</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-neutral-400 mb-1">Utdrag</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 h-24"
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
        />
      </div>

      <div>
        <label className="block text-sm text-neutral-400 mb-1">
          Omslagsbild URL
        </label>
        <input
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2"
          placeholder="https://..."
        />
      </div>

      <button
        type="submit"
        disabled={saving}
        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-black hover:opacity-90 disabled:opacity-50"
      >
        {saving ? "Sparar..." : "Spara ändringar"}
      </button>
    </form>
  );
}
