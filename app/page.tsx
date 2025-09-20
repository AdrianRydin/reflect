// app/page.tsx
import { createClient } from "@supabase/supabase-js"; // a thin helper
import Link from "next/link";
import dotenv from "dotenv";

dotenv.config();

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data: posts } = await supabase
    .from("posts")
    .select("title, slug, summary, published_at")
    .not("published_at", "is", null)
    .order("published_at", { ascending: false })
    .limit(10);

  console.log(posts);

  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Latest essays</h1>
      <ul className="space-y-6">
        {posts?.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/p/${p.slug}`}
              className="text-xl font-medium hover:underline text-white"
            >
              {p.title}
            </Link>
            {p.summary && (
              <p className="text-sm opacity-80 mt-1 text-white">{p.summary}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
