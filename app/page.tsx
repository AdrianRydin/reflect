// app/page.tsx
import { createClient } from "@supabase/supabase-js"; // a thin helper
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("title, slug, summary, published_at")
    .not("published_at", "is", null)
    .order("published_at", { ascending: false })
    .limit(10);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Latest essays</h1>
      <ul className="space-y-6">
        {posts?.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/p/${p.slug}`}
              className="text-xl font-medium hover:underline"
            >
              {p.title}
            </Link>
            {p.summary && (
              <p className="text-sm opacity-80 mt-1">{p.summary}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
