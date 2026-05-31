"use client";

import { useEffect, useState } from "react";
import type { City, Attraction } from "@/lib/types";
import { sortByRating } from "@/lib/utils";
import { useFavorites } from "@/hooks/useFavorites";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { CityHero } from "@/components/city/CityHero";
import { TabNavigation, type CityTab } from "@/components/city/TabNavigation";
import { AttractionCard } from "@/components/city/AttractionCard";
import { RestaurantCard } from "@/components/city/RestaurantCard";
import { HotelCard } from "@/components/city/HotelCard";
import { PackingList } from "@/components/city/PackingList";
import { MapEmbed } from "@/components/city/MapEmbed";
import { StoryModal } from "@/components/city/StoryModal";
import { motion, AnimatePresence } from "framer-motion";

interface CityPageClientProps {
  city: City;
}

export function CityPageClient({ city }: CityPageClientProps) {
  const [activeTab, setActiveTab] = useState<CityTab>("attractions");
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addRecent } = useRecentlyViewed();

  useEffect(() => {
    addRecent({ slug: city.slug, name: city.name, image: city.image });
  }, [city.slug, city.name, city.image, addRecent]);

  const sortedRestaurants = sortByRating(city.restaurants);
  const sortedHotels = sortByRating(city.hotels);

  const tabContent: Record<CityTab, React.ReactNode> = {
    attractions: (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {city.attractions.map((attraction, i) => (
          <motion.div
            key={attraction.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <AttractionCard
              attraction={attraction}
              onReadStory={() => setSelectedAttraction(attraction)}
            />
          </motion.div>
        ))}
      </div>
    ),
    restaurants: (
      <div className="space-y-4">
        {sortedRestaurants.map((restaurant, i) => (
          <motion.div
            key={restaurant.id}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <RestaurantCard restaurant={restaurant} />
          </motion.div>
        ))}
      </div>
    ),
    hotels: (
      <div className="grid gap-6 md:grid-cols-2">
        {sortedHotels.map((hotel, i) => (
          <motion.div
            key={hotel.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <HotelCard hotel={hotel} />
          </motion.div>
        ))}
      </div>
    ),
    packing: <PackingList items={city.packingList} />,
    map: (
      <MapEmbed
        lat={city.coordinates.lat}
        lng={city.coordinates.lng}
        cityName={city.name}
      />
    ),
  };

  const tabTitles: Record<CityTab, string> = {
    attractions: "Gezilecek Yerler",
    restaurants: "En Yüksek Puanlı Restoranlar",
    hotels: "En Yüksek Puanlı Oteller",
    packing: "Yanınıza Mutlaka Almanız Gerekenler",
    map: "Harita",
  };

  return (
    <>
      <CityHero
        city={city}
        isFavorite={isFavorite(city.slug)}
        onToggleFavorite={() => toggleFavorite(city.slug)}
      />

      <TabNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        counts={{
          attractions: city.attractions.length,
          restaurants: city.restaurants.length,
          hotels: city.hotels.length,
          packing: city.packingList.length,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="section-title mb-6">{tabTitles[activeTab]}</h2>
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>

      <StoryModal
        attraction={selectedAttraction}
        isOpen={!!selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
      />
    </>
  );
}
