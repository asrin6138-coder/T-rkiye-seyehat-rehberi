export type Season = "spring" | "summer" | "autumn" | "winter";

export type CityRegion =
  | "Marmara"
  | "Ege"
  | "Akdeniz"
  | "Karadeniz"
  | "İç Anadolu"
  | "Güneydoğu Anadolu";

export interface AttractionStory {
  history: string;
  culturalSignificance: string;
  architecture: string;
  interestingFacts: string[];
}

export interface Attraction {
  id: string;
  name: string;
  shortDescription: string;
  rating: number;
  address: string;
  image: string;
  mapsUrl: string;
  story: AttractionStory;
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  cuisine: string;
  address: string;
  image: string;
  mapsUrl: string;
  website?: string;
}

export interface Hotel {
  id: string;
  name: string;
  stars: number;
  rating: number;
  address: string;
  image: string;
  mapsUrl: string;
  bookingUrl: string;
}

export interface PackingItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  seasons: Season[];
  essential: boolean;
}

export interface City {
  id: string;
  slug: string;
  name: string;
  region: CityRegion;
  description: string;
  image: string;
  heroImage: string;
  coordinates: { lat: number; lng: number };
  climate: string;
  bestSeason: string;
  tags: string[];
  attractions: Attraction[];
  restaurants: Restaurant[];
  hotels: Hotel[];
  packingList: PackingItem[];
}

export type CitySummary = Pick<
  City,
  "id" | "slug" | "name" | "region" | "description" | "image" | "tags" | "bestSeason"
>;

export type CityFilter = "all" | CityRegion;

export interface RecentlyViewedEntry {
  slug: string;
  name: string;
  image: string;
  viewedAt: number;
}
