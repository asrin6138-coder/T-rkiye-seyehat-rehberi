"use client";

import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function FavoriteButton({ isFavorite, onToggle, size = "md", className }: FavoriteButtonProps) {
  const sizes = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-12 w-12" };
  const iconSizes = { sm: 16, md: 20, lg: 24 };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle();
      }}
      className={cn(
        "flex items-center justify-center rounded-full border bg-white/90 shadow-md backdrop-blur-sm transition-all hover:scale-110 dark:bg-zinc-900/90",
        isFavorite
          ? "border-red-200 text-red-500 dark:border-red-900"
          : "border-zinc-200 text-zinc-400 hover:text-red-400 dark:border-zinc-700",
        sizes[size],
        className
      )}
      aria-label={isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"}
    >
      <Heart
        size={iconSizes[size]}
        className={cn("transition-all", isFavorite && "fill-red-500")}
      />
    </button>
  );
}
