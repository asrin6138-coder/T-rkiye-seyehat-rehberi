"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { filterCities, getFavoriteCities } from "@/data";
import { useFavorites } from "@/hooks/useFavorites";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { HOME_RESET_EVENT } from "@/lib/constants";
import { CitySearch } from "@/components/home/CitySearch";
import { CityFilters } from "@/components/home/CityFilters";
import { CityCard } from "@/components/home/CityCard";
import { RecentlyViewed } from "@/components/home/RecentlyViewed";
import type { CityFilter } from "@/lib/types";

export function HomePageClient() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<CityFilter>("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();
  const { recent, clearRecent, isLoaded: recentLoaded } = useRecentlyViewed();

  useEffect(() => {
    const resetHome = () => {
      setQuery("");
      setRegion("all");
      setShowFavoritesOnly(false);
    };

    window.addEventListener(HOME_RESET_EVENT, resetHome);
    return () => window.removeEventListener(HOME_RESET_EVENT, resetHome);
  }, []);

  const cities = useMemo(() => {
    const filtered = filterCities(query, region, favorites);
    if (showFavoritesOnly) {
      return getFavoriteCities(favorites).filter((city) =>
        filtered.some((f) => f.slug === city.slug)
      );
    }
    return filtered;
  }, [query, region, showFavoritesOnly, favorites]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Türkiye&apos;yi Keşfedin
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Hayalinizdeki Seyahat
              <br />
              <span className="text-brand-200">Bir Tık Uzağınızda</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Gezilecek yerler, en iyi restoranlar, oteller ve seyahat ipuçlarıyla
              Türkiye&apos;nin en güzel şehirlerini keşfedin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <CitySearch value={query} onChange={setQuery} className="mx-auto max-w-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70"
          >
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> 10 Şehir
            </span>
            <span>•</span>
            <span>50+ Gezilecek Yer</span>
            <span>•</span>
            <span>Restoran & Otel Önerileri</span>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {recentLoaded && recent.length > 0 && (
          <RecentlyViewed items={recent} onClear={clearRecent} />
        )}

        <section id="sehirler">
          <div className="mb-8">
            <CityFilters
              activeRegion={region}
              onRegionChange={setRegion}
              showFavoritesOnly={showFavoritesOnly}
              onToggleFavorites={() => setShowFavoritesOnly((p) => !p)}
              favoriteCount={favorites.length}
            />
          </div>

          {isLoaded && cities.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-zinc-500">
                {showFavoritesOnly
                  ? "Henüz favori şehriniz yok. Bir şehir kartındaki kalp ikonuna tıklayarak ekleyin."
                  : "Aramanızla eşleşen şehir bulunamadı."}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((city, i) => (
                <CityCard
                  key={city.slug}
                  city={city}
                  index={i}
                  isFavorite={isFavorite(city.slug)}
                  onToggleFavorite={() => toggleFavorite(city.slug)}
                />
              ))}
            </div>
          )}
        </section>

        <section id="favoriler" className="mt-16 scroll-mt-24">
          {favorites.length > 0 && (
            <div>
              <h2 className="section-title mb-6">Favori Şehirleriniz</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {getFavoriteCities(favorites).map((city, i) => (
                  <CityCard
                    key={city.slug}
                    city={city}
                    index={i}
                    isFavorite={true}
                    onToggleFavorite={() => toggleFavorite(city.slug)}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
