import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCityBySlug, getAllCitySlugs } from "@/data";
import { CityPageClient } from "@/components/city/CityPageClient";
import { JsonLdTouristDestination } from "@/components/seo/JsonLd";

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) return { title: "Şehir Bulunamadı" };

  return {
    title: `${city.name} Seyahat Rehberi`,
    description: city.description,
    openGraph: {
      title: `${city.name} - Gezilecek Yerler, Restoranlar ve Oteller`,
      description: city.description,
      images: [{ url: city.heroImage, width: 1200, height: 630, alt: city.name }],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) notFound();

  return (
    <>
      <JsonLdTouristDestination city={city} />
      <CityPageClient city={city} />
    </>
  );
}
