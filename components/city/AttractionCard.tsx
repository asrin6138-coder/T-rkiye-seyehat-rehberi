"use client";

import Image from "next/image";
import { MapPin, ExternalLink, BookOpen } from "lucide-react";
import type { Attraction } from "@/lib/types";
import { RatingBadge } from "@/components/ui/RatingBadge";

interface AttractionCardProps {
  attraction: Attraction;
  onReadStory: () => void;
}

export function AttractionCard({ attraction, onReadStory }: AttractionCardProps) {
  return (
    <article className="glass-card group overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={attraction.image}
          alt={attraction.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3">
          <RatingBadge rating={attraction.rating} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 font-display text-xl font-bold">{attraction.name}</h3>
        <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {attraction.shortDescription}
        </p>
        <p className="mb-4 flex items-start gap-2 text-xs text-zinc-500">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {attraction.address}
        </p>
        <div className="flex flex-wrap gap-2">
          <button onClick={onReadStory} className="btn-primary flex-1 sm:flex-none">
            <BookOpen className="h-4 w-4" />
            Hikayesini Oku
          </button>
          <a
            href={attraction.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 sm:flex-none"
          >
            <ExternalLink className="h-4 w-4" />
            Haritada Gör
          </a>
        </div>
      </div>
    </article>
  );
}
