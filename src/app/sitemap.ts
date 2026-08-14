import type { MetadataRoute } from "next";
import { blogArticles } from "@/data/blog";
import { bookGuides } from "@/data/book-guides";
import { bookCategories } from "@/data/categories";
import { siteUrl } from "@/lib/site";

const editorialUpdate = new Date("2026-08-14");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: editorialUpdate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/catalogo`,
      lastModified: editorialUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: editorialUpdate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/sobre-nosotros`,
      lastModified: editorialUpdate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/politica-editorial`,
      lastModified: editorialUpdate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...blogArticles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...bookGuides.map((guide) => ({
      url: `${siteUrl}/libros/${guide.slug}`,
      lastModified: editorialUpdate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...bookCategories.map((category) => ({
      url: `${siteUrl}/categoria/${category.slug}`,
      lastModified: editorialUpdate,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    {
      url: `${siteUrl}/audiolibros`,
      lastModified: editorialUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/divulgacion-afiliados`,
      lastModified: editorialUpdate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/contacto`,
      lastModified: editorialUpdate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/privacidad`,
      lastModified: editorialUpdate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/terminos`,
      lastModified: editorialUpdate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
