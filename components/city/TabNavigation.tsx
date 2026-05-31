"use client";

import { cn } from "@/lib/utils";
import { MapPin, Landmark, UtensilsCrossed, Hotel, Backpack } from "lucide-react";

export type CityTab = "attractions" | "restaurants" | "hotels" | "packing" | "map";

interface TabNavigationProps {
  activeTab: CityTab;
  onTabChange: (tab: CityTab) => void;
  counts: {
    attractions: number;
    restaurants: number;
    hotels: number;
    packing: number;
  };
}

const tabs: { id: CityTab; label: string; icon: typeof MapPin }[] = [
  { id: "attractions", label: "Gezilecek Yerler", icon: Landmark },
  { id: "restaurants", label: "Restoranlar", icon: UtensilsCrossed },
  { id: "hotels", label: "Oteller", icon: Hotel },
  { id: "packing", label: "Yanınıza Alın", icon: Backpack },
  { id: "map", label: "Harita", icon: MapPin },
];

export function TabNavigation({ activeTab, onTabChange, counts }: TabNavigationProps) {
  const countMap: Record<CityTab, number> = {
    attractions: counts.attractions,
    restaurants: counts.restaurants,
    hotels: counts.hotels,
    packing: counts.packing,
    map: 0,
  };

  return (
    <nav className="sticky top-16 z-30 -mx-4 border-b border-zinc-200 bg-white/90 px-4 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/90 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto py-2 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/25"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              )}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
              {countMap[tab.id] > 0 && (
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-xs",
                    isActive ? "bg-white/20" : "bg-zinc-200 dark:bg-zinc-700"
                  )}
                >
                  {countMap[tab.id]}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
