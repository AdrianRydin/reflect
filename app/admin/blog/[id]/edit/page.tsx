import { createSupabaseAdmin } from "@/lib/supabase/admin";
import type { Metadata } from "next";
import EditForm from "./ui-edit-form";

export const metadata: Metadata = { title: "Edit post - Admin" };
export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: { id: string };
}) {
  const sb = createSupabaseAdmin();
  const { data: post, error } = await sb
    .from("blog_posts")
    .select("*")
    .eq("id", params.id)
    .maybeSingle();

  if (error) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 px-6">
        <div className="max-w-3xl mx-auto">
          Kunde inte ladda: {error.message}
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 px-6">
        <div className="max-w-3xl mx-auto">Hittade ingen post.</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 px-6">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Edit: {post.title}</h1>
        <EditForm post={post} />
      </section>
    </main>
  );
}
