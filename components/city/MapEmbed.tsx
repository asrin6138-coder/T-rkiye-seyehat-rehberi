"use client";

interface MapEmbedProps {
  lat: number;
  lng: number;
  cityName: string;
  zoom?: number;
}

export function MapEmbed({ lat, lng, cityName, zoom = 12 }: MapEmbedProps) {
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div className="glass-card overflow-hidden">
      <div className="border-b border-zinc-200 p-4 dark:border-zinc-700">
        <h3 className="font-semibold">{cityName} Haritası</h3>
        <p className="text-sm text-zinc-500">Şehir merkezi ve çevresindeki önemli noktalar</p>
      </div>
      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        <iframe
          src={src}
          title={`${cityName} haritası`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="border-t border-zinc-200 p-4 dark:border-zinc-700">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          Google Maps&apos;te Aç
        </a>
      </div>
    </div>
  );
}
