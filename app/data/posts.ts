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
    slug: "In Development",
    title: "In Development",
    excerpt: "In Development",
    date: "2026-06-14",
    readingTime: "4 min read",
    tags: ["philosophy", "design"],
    content: `In Development`,
  },
  {
    slug: "In-Development",
    title: "In Development",
    excerpt: "In Development",
    date: "2026-06-14",
    readingTime: "4 min read",
    tags: ["philosophy", "design"],
    content: `In Development`,
  },
  {
    slug: "InDevelopment",
    title: "In Development",
    excerpt: "In Development",
    date: "2026-06-14",
    readingTime: "4 min read",
    tags: ["philosophy", "design"],
    content: `In Development`,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
