"use client";

import { cn } from "@/lib/utils";
import type { CityFilter } from "@/lib/types";
import { REGIONS } from "@/lib/constants";

interface CityFiltersProps {
  activeRegion: CityFilter;
  onRegionChange: (region: CityFilter) => void;
  showFavoritesOnly: boolean;
  onToggleFavorites: () => void;
  favoriteCount: number;
}

export function CityFilters({
  activeRegion,
  onRegionChange,
  showFavoritesOnly,
  onToggleFavorites,
  favoriteCount,
}: CityFiltersProps) {
  const filters: { id: CityFilter; label: string }[] = [
    { id: "all", label: "Tümü" },
    ...REGIONS.map((r) => ({ id: r as CityFilter, label: r })),
  ];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onRegionChange(filter.id)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all",
              activeRegion === filter.id
                ? "bg-brand-600 text-white shadow-md shadow-brand-600/25"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <button
        onClick={onToggleFavorites}
        className={cn(
          "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all",
          showFavoritesOnly
            ? "bg-red-500 text-white shadow-md shadow-red-500/25"
            : "border border-zinc-200 bg-white text-zinc-600 hover:border-red-200 hover:text-red-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
        )}
      >
        ❤️ Favoriler {favoriteCount > 0 && `(${favoriteCount})`}
      </button>
    </div>
  );
}
