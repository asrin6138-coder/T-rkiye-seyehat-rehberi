"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { RecentlyViewedEntry } from "@/lib/types";

interface RecentlyViewedProps {
  items: RecentlyViewedEntry[];
  onClear: () => void;
}

export function RecentlyViewed({ items, onClear }: RecentlyViewedProps) {
  if (items.length === 0) return null;

  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <Clock className="h-5 w-5 text-brand-600" />
          Son Görüntülenenler
        </h2>
        <button
          onClick={onClear}
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          Temizle
        </button>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/sehir/${item.slug}`}
            className="group flex shrink-0 items-center gap-3 rounded-xl border border-zinc-200 bg-white p-2 pr-4 transition-all hover:border-brand-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-brand-700"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-lg">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="48px" />
            </div>
            <span className="text-sm font-medium group-hover:text-brand-600 dark:group-hover:text-brand-400">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
