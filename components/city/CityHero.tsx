"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Thermometer, Calendar } from "lucide-react";
import type { City } from "@/lib/types";
import { FavoriteButton } from "@/components/ui/FavoriteButton";

interface CityHeroProps {
  city: City;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function CityHero({ city, isFavorite, onToggleFavorite }: CityHeroProps) {
  return (
    <section className="relative -mt-px overflow-hidden">
      <div className="relative h-[40vh] min-h-[280px] max-h-[480px] w-full">
        <Image
          src={city.heroImage}
          alt={city.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 lg:p-8">
        <div className="mx-auto flex w-full max-w-7xl items-start justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-black/30 px-3 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-black/50"
          >
            <ArrowLeft className="h-4 w-4" />
            Geri
          </Link>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={onToggleFavorite}
            size="lg"
            className="border-white/20"
          />
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
            {city.region}
          </span>
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {city.name}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/90 sm:text-lg">{city.description}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <Thermometer className="h-4 w-4" />
              {city.climate}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              En iyi: {city.bestSeason}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {city.region}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
