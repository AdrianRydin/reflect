// app/page.tsx (server)
import { createClient } from "@supabase/supabase-js";
import Hero from "@/app/sections/Hero"; // client component
import { About } from "@/app/sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
// ❌ Don't use dotenv in Next.js app code; Next already injects process.env

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

  // Render static/SSR HTML and pass only serializable data to clients
  return (
    <main className="min-h-screen bg-neutral-950 ">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
