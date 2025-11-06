export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/admin";

function json(status: number, body: unknown) {
  return NextResponse.json(body, { status });
}

export async function POST(req: Request) {
  interface PostgresError {
    code?: string;
    message: string;
  }

  function isPostgresError(err: unknown): err is PostgresError {
    return typeof err === "object" && err !== null && "message" in err;
  }

  try {
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      console.error("[/api/blog] Missing envs", {
        hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasService: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      });
      return json(500, {
        error: "Server misconfiguration: missing Supabase env vars",
      });
    }

    // 2) Body parse + validering
    const body = (await req.json().catch(() => null)) as Partial<{
      title: string;
      slug: string;
      excerpt: string | null;
      content: string;
      cover_url: string | null;
      tags: string[];
      read_time_minutes: number;
      status: "draft" | "published";
      published_at: string | null;
    }> | null;

    if (!body) return json(400, { error: "Invalid JSON" });

    const {
      title,
      slug,
      content,
      excerpt = null,
      cover_url = null,
      tags = [],
      read_time_minutes = 5,
      status = "draft",
      published_at = null,
    } = body;

    if (!title || !slug || !content) {
      return json(400, { error: "title, slug, content krävs" });
    }

    const supabase = createSupabaseAdmin();
    const autoPublishedAt =
      status === "published" ? published_at ?? new Date().toISOString() : null;

    const { data, error } = await supabase
      .from("blog_posts")
      .insert([
        {
          title,
          slug: slug.toLowerCase(),
          excerpt,
          content,
          cover_url,
          tags,
          read_time_minutes,
          status,
          published_at: autoPublishedAt,
        },
      ])
      .select("*")
      .single();

    if (error) {
      // Unika constraint-violations → 409 Conflict
      if (isPostgresError(error) && error.code === "23505") {
        return json(409, { error: "Slug already exists" });
      }
      // RLS/permission fel → oftast service key saknas
      if (/row level security|permission|not allowed/i.test(error.message)) {
        return json(403, {
          error: "Permission denied (check service role key / RLS)",
        });
      }
      console.error("[/api/blog] Insert error:", error);
      return json(500, { error: error.message });
    }

    return json(201, { ok: true, post: data });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error("[/api/blog] Uncaught error:", msg);
    return json(500, { error: msg });
  }
}
