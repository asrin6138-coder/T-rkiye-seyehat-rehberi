"use client";

import Image from "next/image";
import { MapPin, ExternalLink, Globe } from "lucide-react";
import type { Restaurant } from "@/lib/types";
import { RatingBadge } from "@/components/ui/RatingBadge";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <article className="glass-card group flex flex-col overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-xl sm:flex-row">
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:h-auto sm:w-48">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          sizes="192px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold">{restaurant.name}</h3>
          <RatingBadge rating={restaurant.rating} size="sm" />
        </div>
        <span className="mb-2 inline-block w-fit rounded-md bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-950/50 dark:text-orange-400">
          {restaurant.cuisine}
        </span>
        <p className="mb-4 flex items-start gap-2 text-xs text-zinc-500">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {restaurant.address}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          <a
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Harita
          </a>
          {restaurant.website && (
            <a
              href={restaurant.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              <Globe className="h-3.5 w-3.5" />
              Web Sitesi
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
