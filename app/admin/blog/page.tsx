import Link from "next/link";
import { createSupabaseAdmin } from "@/lib/supabase/admin";
import { ArrowUpRight, Pencil, Eye, CheckCircle2, Circle } from "lucide-react";
import AdminRowActions from "./row-actions";

type DbPostRow = {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  updated_at: string | null;
  published_at: string | null;
};

export const dynamic = "force-dynamic";

export default async function AdminBlogListPage() {
  const sb = createSupabaseAdmin();
  const { data, error } = await sb
    .from("blog_posts")
    .select("id, title, slug, status, updated_at, published_at")
    .order("updated_at", { ascending: true });

  if (error) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          Kunde inte ladda poster: {error.message}
        </div>
      </main>
    );
  }

  const posts = (data ?? []) as DbPostRow[];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 px-6">
      <section className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Blogg – Admin</h1>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl hover:opacity-90"
          >
            Ny post <ArrowUpRight className="w-4 h-4" />
          </Link>
        </header>

        <div className="overflow-x-auto rounded-2xl border border-neutral-800">
          <table className="min-w-full text-sm">
            <thead className="bg-neutral-900 text-neutral-400">
              <tr>
                <th className="text-left p-3">Titel</th>
                <th className="text-left p-3">Slug</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Uppdaterad</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-t border-neutral-800">
                  <td className="p-3">{p.title}</td>
                  <td className="p-3 text-neutral-400">/blog/{p.slug}</td>
                  <td className="p-3">
                    {p.status === "published" ? (
                      <span className="inline-flex items-center gap-1 text-green-400">
                        <CheckCircle2 className="w-4 h-4" /> published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-yellow-400">
                        <Circle className="w-4 h-4" /> draft
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-neutral-400">
                    {p.updated_at
                      ? new Date(p.updated_at).toLocaleString()
                      : ""}
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/blog/${p.slug}`}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-neutral-700 hover:bg-neutral-800"
                      >
                        <Eye className="w-4 h-4" /> Visa
                      </Link>
                      <Link
                        href={`/admin/blog/${p.id}/edit`}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-neutral-700 hover:bg-neutral-800"
                      >
                        <Pencil className="w-4 h-4" /> Edit
                      </Link>
                      <AdminRowActions id={p.id} status={p.status} />
                    </div>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td className="p-6 text-neutral-400" colSpan={5}>
                    Inga poster ännu. Skapa din första via “Ny post”.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
