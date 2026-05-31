import Link from "next/link";
import { Compass, Github } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
                <Compass className="h-4 w-4" />
              </div>
              <span className="font-display text-lg font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Popüler Şehirler
            </h3>
            <ul className="space-y-2 text-sm">
              {["istanbul", "antalya", "kapadokya-nevsehir", "izmir"].map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/sehir/${slug === "kapadokya-nevsehir" ? "nevsehir" : slug}`}
                    className="text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
                  >
                    {slug === "kapadokya-nevsehir" ? "Nevşehir" : slug.charAt(0).toUpperCase() + slug.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Özellikler
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Gezilecek yerler ve hikâyeler</li>
              <li>En iyi restoran ve oteller</li>
              <li>Mevsimsel seyahat önerileri</li>
              <li>Harita entegrasyonu</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {currentYear} {SITE_CONFIG.name}. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-zinc-400">
            Next.js · React · TypeScript · Tailwind CSS ile geliştirildi
          </p>
        </div>
      </div>
    </footer>
  );
}
