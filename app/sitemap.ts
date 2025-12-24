import { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap {
  return [
    {
      url: "https://daeson.vercel.app/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://daesontechagency.online",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://daesontechagency.online/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://daesontechagency.online/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://daesontechagency.online/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }
  ];
}


