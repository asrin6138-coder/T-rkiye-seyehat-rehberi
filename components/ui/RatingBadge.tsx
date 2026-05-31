"use client";

import { Star } from "lucide-react";
import { cn, formatRating } from "@/lib/utils";

interface RatingBadgeProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function RatingBadge({ rating, size = "md", showLabel = true, className }: RatingBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-sm px-2.5 py-1 gap-1",
    lg: "text-base px-3 py-1.5 gap-1.5",
  };

  const iconSizes = { sm: 12, md: 14, lg: 16 };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg bg-amber-50 font-semibold text-amber-700 dark:bg-amber-950/50 dark:text-amber-400",
        sizeClasses[size],
        className
      )}
    >
      <Star className="fill-amber-400 text-amber-400" size={iconSizes[size]} />
      {showLabel && formatRating(rating)}
    </span>
  );
}
