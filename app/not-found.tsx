import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
        <Compass className="h-10 w-10" />
      </div>
      <h1 className="font-display text-3xl font-bold">Sayfa Bulunamadı</h1>
      <p className="mt-3 max-w-md text-zinc-600 dark:text-zinc-400">
        Aradığınız şehir veya sayfa mevcut değil. Ana sayfadan şehirlerimizi keşfedebilirsiniz.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
