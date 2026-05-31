"use client";

import Image from "next/image";
import { MapPin, ExternalLink, CalendarCheck, Star } from "lucide-react";
import type { Hotel } from "@/lib/types";
import { RatingBadge } from "@/components/ui/RatingBadge";
import { cn } from "@/lib/utils";

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <article className="glass-card group overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-lg bg-black/60 px-2 py-1 backdrop-blur-sm">
          {Array.from({ length: hotel.stars }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <div className="absolute right-3 top-3">
          <RatingBadge rating={hotel.rating} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 font-display text-lg font-bold">{hotel.name}</h3>
        <p className="mb-4 flex items-start gap-2 text-xs text-zinc-500">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {hotel.address}
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href={hotel.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 text-xs sm:flex-none"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Harita
          </a>
          <a
            href={hotel.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 text-xs sm:flex-none"
          >
            <CalendarCheck className="h-3.5 w-3.5" />
            Rezervasyon
          </a>
        </div>
      </div>
    </article>
  );
}
