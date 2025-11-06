import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/admin";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createSupabaseAdmin();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", params.id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!data) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
  return NextResponse.json({ post: data });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = (await req.json()) as Partial<{
      title: string;
      slug: string;
      excerpt: string | null;
      content: string;
      cover_url: string | null;
      tags: string[];
      read_time_minutes: number | null;
      status: "draft" | "published";
      published_at: string | null;
    }>;

    const supabase = createSupabaseAdmin();

    const { data: current } = await supabase
      .from("blog_posts")
      .select("id, slug, status, published_at")
      .eq("id", params.id)
      .maybeSingle();

    if (current?.slug && body.slug && body.slug !== current.slug) {
      await supabase
        .from("blog_slug_history")
        .insert([{ post_id: params.id, old_slug: current.slug }]);
    }

    const nextPublishedAt =
      body.status === "published" &&
      !current?.published_at &&
      !body.published_at
        ? new Date().toISOString()
        : body.published_at ?? undefined;

    const { data, error } = await supabase
      .from("blog_posts")
      .update({ ...body, published_at: nextPublishedAt })
      .eq("id", params.id)
      .select("*")
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ post: data });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createSupabaseAdmin();
  const { error } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", params.id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
