export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export const posts: Post[] = [
  {
    slug: "on-silence-and-code",
    title: "On Silence and Code",
    excerpt:
      "The best interfaces disappear. The best thoughts, too. A short meditation on subtraction as a design and life principle.",
    date: "2026-06-14",
    readingTime: "4 min read",
    tags: ["philosophy", "design"],
    content: `## The empty room\n\nThere is a kind of silence that isn't the absence of sound, but the presence of everything that hasn't been said yet. Interfaces have their own version of this. A blank canvas. A cursor blinking on an empty file.\n\nWe often confuse *doing more* with *doing better*. Another button, another animation, another gradient. But the interfaces that stay with me — the ones I return to daily — are almost embarrassingly quiet.\n\n> "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry\n\n## Subtraction as practice\n\nWhen I sit down to write code, my first pass is always too loud. Too many abstractions, too many options, too many "just in case" branches. The second pass — the one where the software finally feels *itself* — is almost entirely deletion.\n\nThe same is true, I think, of how we live. We collect. We accumulate. And once a year, if we're lucky, we sit down and ask: *what of this is actually mine?*\n\n## A small ritual\n\nAt the end of every week I do one thing: I open the code I wrote and delete one line I don't love. Just one. Some weeks it's an entire component. Some weeks it's a semicolon.\n\nIt's a small ritual, but it keeps me honest.`,
  },
  {
    slug: "the-craft-of-frontend",
    title: "The Craft of Frontend",
    excerpt:
      "Frontend is often dismissed as surface-level. That framing misses what the work actually is.",
    date: "2026-05-02",
    readingTime: "6 min read",
    tags: ["frontend", "craft"],
    content: `## Surface is substance\n\nPeople talk about frontend the way they talk about paint on a house. Cosmetic. Optional. Something you do at the end, if there's budget left over.\n\nBut the surface of software is not a coat of paint. It's the entire contract between a person and a system. Every affordance, every microcopy, every 200ms of latency is part of what the software *is*, not what it looks like.\n\n## What we're actually doing\n\nWhen I write a component, I'm not decorating. I'm making a hundred small decisions about *what a person is allowed to feel* while using this thing. Trust. Confidence. Frustration. Delight. These are not "UX metrics." They are the product.\n\n## The tools follow\n\nNext, Vue, React, Tailwind — the tooling is downstream of taste. A framework can help you ship faster, but it can't help you *care* more. And in my experience, the work that endures is almost entirely a function of care.`,
  },
  {
    slug: "notes-on-being-a-beginner",
    title: "Notes on Being a Beginner",
    excerpt:
      "Every year I pick something I'm bad at. Here's what a decade of that has taught me.",
    date: "2026-03-21",
    readingTime: "5 min read",
    tags: ["philosophy", "learning"],
    content: `## The pact\n\nEvery January I sign a small pact with myself: this year I will be publicly bad at something new. Not "get better at" — *bad*. There's a difference.\n\nOne year it was chess. Another, drawing. This year it's writing every week, even when I have nothing to say.\n\n## Why it works\n\nBeing a beginner is uncomfortable in a way that most adult life protects you from. You are, briefly, allowed to be slow. You are allowed to not know. And in the space that opens up, you remember what learning actually feels like — not the productive, LinkedIn version, but the real one, with the confusion and the small breakthroughs and the quiet joy.\n\n## What it teaches\n\nMostly it teaches humility. But it also teaches *transfer* — the discovery that patience with a rook translates, weirdly, into patience with a bug. Care with a pencil line translates into care with a border radius. Everything is everything.`,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
