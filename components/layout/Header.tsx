"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Compass, Heart } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { HOME_RESET_EVENT } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const goToHome = () => {
    if (pathname === "/") {
      window.dispatchEvent(new CustomEvent(HOME_RESET_EVENT));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              goToHome();
            }
          }}
          className="group flex items-center gap-2.5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30 transition-transform group-hover:scale-105">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <span className="font-display text-lg font-bold leading-tight">Türkiye</span>
            <span className="block text-xs text-zinc-500 dark:text-zinc-400">Seyahat Rehberi</span>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={goToHome}
            className="hidden font-display text-sm font-bold text-zinc-700 transition-colors hover:text-brand-600 dark:text-zinc-200 dark:hover:text-brand-400 sm:block"
          >
            Türkiye Seyahat Rehberi
          </button>
          <Link
            href="/#favoriler"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-brand-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-brand-400 sm:flex"
          >
            <Heart className="h-4 w-4" />
            Favoriler
          </Link>
          <Link
            href="/#sehirler"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-brand-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-brand-400 lg:block"
          >
            Şehirler
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
