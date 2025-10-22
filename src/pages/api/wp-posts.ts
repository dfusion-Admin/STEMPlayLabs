import { Post, PostImage } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

const WP_BASE = "https://blog.stemplaylabs.org";
// const WP_BASE = "https://dfusioninc.com";

/** Safely pick a good image size from the embedded media object */
function extractFeaturedImage(media: PostImage | null): PostImage | null {
  if (!media) return null;

  // Prefer a medium/large size if available, fall back to original
  const sizes = media?.media_details?.sizes || {};
  const pick =
    sizes?.medium_large ||
    sizes?.large ||
    sizes?.medium ||
    sizes?.full ||
    null;

  const src = pick?.source_url || media?.source_url || null;
  const width = pick?.width || media?.media_details?.width || undefined;
  const height = pick?.height || media?.media_details?.height || undefined;

  // WordPress stores alt text on the media object
  const alt =
    media?.alt_text ||
    media?.title?.rendered?.replace(/<[^>]*>/g, "") ||
    "";

  if (!src) return null;
  return { src, alt, width, height };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { categoryId, perPage = "3", page = "1" } = req.query;

    const id = Number(categoryId);
    if (!id || Number.isNaN(id)) {
      return res.status(400).json({ error: "Missing or invalid ?categoryId=NUMBER" });
    }

    // IMPORTANT: use `_embed=1` so featured media comes inline
    // (We omit _fields here to ensure _embedded is included.)
    const qs = new URLSearchParams({
      // per_page: String(perPage),
      // page: String(page),
      // categories: String(id),
      _embed: "1",
    });

    const wpRes = await fetch(`${WP_BASE}/wp-json/wp/v2/posts?${qs.toString()}`, {
      headers: { Accept: "application/json" },
    });

    if (!wpRes.ok) {
      const text = await wpRes.text();
      return res.status(wpRes.status).json({ error: "Failed to fetch posts", detail: text });
    }

    const posts = await wpRes.json();

    // Normalize the response: lift featured image into a simple `image` field.
    const normalized = posts.map((p: Post) => {
      const media = p?._embedded?.["wp:featuredmedia"]?.[0] || null;
      const image = extractFeaturedImage(media);

      return {
        id: p.id,
        title: p.title,                 // { rendered: string }
        excerpt: p.excerpt,             // { rendered: string }
        link: p.link,
        date: p.date,
        categories: p.categories,       // number[]
        tags: p.tags,                   // number[]
        image,                          // { src, alt, width?, height? } | null
      };
    });

    return res.status(200).json(normalized);
  } catch (err: unknown) {
    console.error("Error fetching posts:", err);
    if (err instanceof Error) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(500).json({ error: "Unknown error" });
  }
}
