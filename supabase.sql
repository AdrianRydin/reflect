-- 1) Enum för status
create type public.post_status as enum ('draft','published');

-- 2) Tabell
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  content text not null,           -- markdown
  cover_url text,
  tags text[] default '{}',
  read_time_minutes int default 5,
  status post_status not null default 'draft',
  published_at timestamptz,
  author_id uuid,                  -- valfritt: koppla till auth.users
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists blog_posts_slug_idx on public.blog_posts(slug);
create index if not exists blog_posts_status_idx on public.blog_posts(status);
create index if not exists blog_posts_tags_idx on public.blog_posts using gin (tags);

-- 3) Trigger för updated_at
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists t_set_updated_at on public.blog_posts;
create trigger t_set_updated_at
before update on public.blog_posts
for each row execute procedure public.set_updated_at();

-- 4) RLS
alter table public.blog_posts enable row level security;

-- Läs: alla får läsa PUBLICERADE poster
create policy "read published posts"
on public.blog_posts
for select
to public
using (status = 'published');

-- New 

alter table public.blog_posts
  add constraint blog_posts_slug_key unique (slug);

create table if not exists public.blog_slug_history (
  post_id uuid references public.blog_posts(id) on delete cascade,
  old_slug text not null,
  changed_at timestamptz default now(),
  primary key (post_id, old_slug)
);