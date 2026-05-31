import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/data";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityUrls = getAllCitySlugs().map((slug) => ({
    url: `${SITE_CONFIG.url}/sehir/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...cityUrls,
  ];
}
