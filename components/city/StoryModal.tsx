"use client";

import { Modal } from "@/components/ui/Modal";
import type { Attraction } from "@/lib/types";
import { RatingBadge } from "@/components/ui/RatingBadge";

interface StoryModalProps {
  attraction: Attraction | null;
  isOpen: boolean;
  onClose: () => void;
}

export function StoryModal({ attraction, isOpen, onClose }: StoryModalProps) {
  if (!attraction) return null;

  const { story } = attraction;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={attraction.name}>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <RatingBadge rating={attraction.rating} size="lg" />
          <span className="text-sm text-zinc-500">{attraction.address}</span>
        </div>

        <section>
          <h3 className="mb-2 font-semibold text-brand-600 dark:text-brand-400">Tarihçe</h3>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{story.history}</p>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-brand-600 dark:text-brand-400">Kültürel Önemi</h3>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {story.culturalSignificance}
          </p>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-brand-600 dark:text-brand-400">Mimari Özellikler</h3>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{story.architecture}</p>
        </section>

        <section>
          <h3 className="mb-3 font-semibold text-brand-600 dark:text-brand-400">İlgi Çekici Bilgiler</h3>
          <ul className="space-y-2">
            {story.interestingFacts.map((fact, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {fact}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Modal>
  );
}
