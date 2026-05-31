import { cities } from "@/data";
import { SITE_CONFIG } from "@/lib/constants";
import type { City } from "@/lib/types";

export function JsonLdWebsite() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function JsonLdCityList() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Türkiye Şehirleri",
    numberOfItems: cities.length,
    itemListElement: cities.map((city, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: city.name,
      url: `${SITE_CONFIG.url}/sehir/${city.slug}`,
      description: city.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function JsonLdTouristDestination({ city }: { city: City }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: city.name,
    description: city.description,
    url: `${SITE_CONFIG.url}/sehir/${city.slug}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.coordinates.lat,
      longitude: city.coordinates.lng,
    },
    touristType: ["Cultural tourism", "City tourism"],
    includesAttraction: city.attractions.map((a) => ({
      "@type": "TouristAttraction",
      name: a.name,
      description: a.shortDescription,
      address: a.address,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
