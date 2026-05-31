"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import type { CitySummary } from "@/lib/types";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { cn } from "@/lib/utils";

interface CityCardProps {
  city: CitySummary;
  index?: number;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function CityCard({ city, index = 0, isFavorite, onToggleFavorite }: CityCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group relative"
    >
      <Link href={`/sehir/${city.slug}`} className="block">
        <div className="glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={city.image}
              alt={city.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute right-3 top-3">
              <FavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} size="sm" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="mb-1 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                {city.region}
              </span>
              <h3 className="font-display text-2xl font-bold text-white">{city.name}</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {city.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {city.bestSeason}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {city.region}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {city.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-950/50 dark:text-brand-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
