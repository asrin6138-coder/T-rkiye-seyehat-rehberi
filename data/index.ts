import { istanbul } from "./cities/istanbul";
import { ankara } from "./cities/ankara";
import { izmir } from "./cities/izmir";
import { antalya } from "./cities/antalya";
import { bursa } from "./cities/bursa";
import { mugla } from "./cities/mugla";
import { trabzon } from "./cities/trabzon";
import { nevsehir } from "./cities/nevsehir";
import { gaziantep } from "./cities/gaziantep";
import { eskisehir } from "./cities/eskisehir";
import type { City, CityFilter, CitySummary } from "@/lib/types";

export const cities: City[] = [
  istanbul,
  ankara,
  izmir,
  antalya,
  bursa,
  mugla,
  trabzon,
  nevsehir,
  gaziantep,
  eskisehir,
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getCitySummaries(): CitySummary[] {
  return cities.map(({ id, slug, name, region, description, image, tags, bestSeason }) => ({
    id,
    slug,
    name,
    region,
    description,
    image,
    tags,
    bestSeason,
  }));
}

export function filterCities(
  query: string,
  region: CityFilter,
  favorites: string[] = []
): CitySummary[] {
  const summaries = getCitySummaries();
  const normalizedQuery = query.toLowerCase().trim();

  return summaries.filter((city) => {
    const matchesRegion = region === "all" || city.region === region;
    const matchesQuery =
      !normalizedQuery ||
      city.name.toLowerCase().includes(normalizedQuery) ||
      city.region.toLowerCase().includes(normalizedQuery) ||
      city.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)) ||
      city.description.toLowerCase().includes(normalizedQuery);

    return matchesRegion && matchesQuery;
  });
}

export function getFavoriteCities(favoriteSlugs: string[]): CitySummary[] {
  return getCitySummaries().filter((c) => favoriteSlugs.includes(c.slug));
}
