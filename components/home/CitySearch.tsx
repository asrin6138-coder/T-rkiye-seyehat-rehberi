"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CitySearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function CitySearch({ value, onChange, className }: CitySearchProps) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Şehir, bölge veya etiket ara..."
        className="input-field pl-12 pr-12"
        aria-label="Şehir ara"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
          aria-label="Aramayı temizle"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
