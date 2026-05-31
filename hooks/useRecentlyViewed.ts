"use client";

import { useCallback, useEffect, useState } from "react";
import { STORAGE_KEYS } from "@/lib/constants";
import type { RecentlyViewedEntry } from "@/lib/types";

const MAX_RECENT = 6;

export function useRecentlyViewed() {
  const [recent, setRecent] = useState<RecentlyViewedEntry[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.recentlyViewed);
      if (stored) setRecent(JSON.parse(stored));
    } catch {
      /* ignore */
    }
    setIsLoaded(true);
  }, []);

  const addRecent = useCallback((entry: Omit<RecentlyViewedEntry, "viewedAt">) => {
    setRecent((prev) => {
      if (prev[0]?.slug === entry.slug) return prev;

      const filtered = prev.filter((r) => r.slug !== entry.slug);
      const next = [{ ...entry, viewedAt: Date.now() }, ...filtered].slice(0, MAX_RECENT);
      localStorage.setItem(STORAGE_KEYS.recentlyViewed, JSON.stringify(next));
      return next;
    });
  }, []);

  const clearRecent = useCallback(() => {
    setRecent([]);
    localStorage.removeItem(STORAGE_KEYS.recentlyViewed);
  }, []);

  return { recent, addRecent, clearRecent, isLoaded };
}
