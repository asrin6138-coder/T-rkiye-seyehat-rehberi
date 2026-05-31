import { HomePageClient } from "@/components/home/HomePageClient";
import { SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  return <HomePageClient />;
}

export const metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
};
