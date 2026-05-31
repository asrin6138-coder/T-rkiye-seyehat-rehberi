"use client";

import { useEffect, useState } from "react";
import { STORAGE_KEYS } from "@/lib/constants";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.favorites);
      if (stored) setFavorites(JSON.parse(stored));
    } catch {
      /* ignore */
    }
    setIsLoaded(true);
  }, []);

  const toggleFavorite = (slug: string) => {
    setFavorites((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(next));
      return next;
    });
  };

  const isFavorite = (slug: string) => favorites.includes(slug);

  return { favorites, toggleFavorite, isFavorite, isLoaded };
}
