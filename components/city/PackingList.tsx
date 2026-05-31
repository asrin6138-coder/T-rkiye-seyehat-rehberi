"use client";

import { useState } from "react";
import {
  Sun,
  CloudRain,
  Droplets,
  BatteryCharging,
  Footprints,
  Camera,
  Shirt,
  HardHat,
  CreditCard,
  Backpack,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { PackingItem, Season } from "@/lib/types";
import { SEASONS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  sun: Sun,
  "cloud-rain": CloudRain,
  droplets: Droplets,
  "battery-charging": BatteryCharging,
  footprints: Footprints,
  camera: Camera,
  shirt: Shirt,
  "hard-hat": HardHat,
  "credit-card": CreditCard,
  backpack: Backpack,
};

interface PackingListProps {
  items: PackingItem[];
}

export function PackingList({ items }: PackingListProps) {
  const [selectedSeason, setSelectedSeason] = useState<Season | "all">("all");

  const filteredItems =
    selectedSeason === "all"
      ? items
      : items.filter((item) => item.seasons.includes(selectedSeason));

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedSeason("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all",
            selectedSeason === "all"
              ? "bg-brand-600 text-white"
              : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
          )}
        >
          Tüm Mevsimler
        </button>
        {SEASONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedSeason(s.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              selectedSeason === s.id
                ? "bg-brand-600 text-white"
                : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => {
          const Icon = iconMap[item.icon] || Backpack;
          return (
            <div
              key={item.id}
              className={cn(
                "glass-card flex gap-4 p-4 transition-all hover:shadow-md",
                item.essential && "ring-1 ring-brand-200 dark:ring-brand-800"
              )}
            >
              <div
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                  item.essential
                    ? "bg-brand-100 text-brand-600 dark:bg-brand-950 dark:text-brand-400"
                    : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <h4 className="font-semibold">{item.name}</h4>
                  {item.essential && (
                    <span className="rounded bg-brand-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-brand-700 dark:bg-brand-950 dark:text-brand-400">
                      Zorunlu
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
