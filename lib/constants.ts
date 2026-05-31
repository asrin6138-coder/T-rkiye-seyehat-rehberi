import type { Season } from "./types";

export const SEASONS: { id: Season; label: string }[] = [
  { id: "spring", label: "İlkbahar" },
  { id: "summer", label: "Yaz" },
  { id: "autumn", label: "Sonbahar" },
  { id: "winter", label: "Kış" },
];

export const REGIONS = [
  "Marmara",
  "Ege",
  "Akdeniz",
  "Karadeniz",
  "İç Anadolu",
  "Güneydoğu Anadolu",
] as const;

export const STORAGE_KEYS = {
  favorites: "turkiye-rehber-favorites",
  recentlyViewed: "turkiye-rehber-recent",
  theme: "turkiye-rehber-theme",
} as const;

export const HOME_RESET_EVENT = "turkiye-rehber-home-reset";

export const SITE_CONFIG = {
  name: "Türkiye Seyahat Rehberi",
  description:
    "Türkiye'nin en güzel şehirlerini keşfedin. Gezilecek yerler, en iyi restoranlar, oteller ve seyahat ipuçları.",
  url: "https://turkiye-seyahat-rehberi.vercel.app",
  locale: "tr_TR",
} as const;
