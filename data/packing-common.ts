import type { PackingItem } from "@/lib/types";

export const commonPackingItems: PackingItem[] = [
  {
    id: "walking-shoes",
    name: "Rahat Yürüyüş Ayakkabısı",
    description: "Şehir içi geziler ve tarihi sokaklarda uzun yürüyüşler için vazgeçilmez.",
    icon: "footprints",
    seasons: ["spring", "summer", "autumn", "winter"],
    essential: true,
  },
  {
    id: "water-bottle",
    name: "Su Matarası",
    description: "Gün boyu hidrasyon için yeniden doldurulabilir matara.",
    icon: "droplets",
    seasons: ["spring", "summer", "autumn"],
    essential: true,
  },
  {
    id: "powerbank",
    name: "Powerbank",
    description: "Harita, fotoğraf ve rehber uygulamaları için ekstra şarj.",
    icon: "battery-charging",
    seasons: ["spring", "summer", "autumn", "winter"],
    essential: true,
  },
  {
    id: "sunscreen",
    name: "Güneş Kremi (SPF 50+)",
    description: "Güneşli günlerde cilt koruması için yüksek faktörlü krem.",
    icon: "sun",
    seasons: ["spring", "summer", "autumn"],
    essential: false,
  },
  {
    id: "hat",
    name: "Şapka veya Bere",
    description: "Yazın güneş, kışın soğuktan korunma.",
    icon: "hard-hat",
    seasons: ["spring", "summer", "autumn", "winter"],
    essential: false,
  },
  {
    id: "raincoat",
    name: "Yağmurluk veya Katlanabilir Şemsiye",
    description: "Ani yağmur ve rüzgarlı havalara karşı hazırlık.",
    icon: "cloud-rain",
    seasons: ["spring", "autumn", "winter"],
    essential: false,
  },
  {
    id: "light-jacket",
    name: "Hafif Ceket veya Polar",
    description: "Akşam serinliği ve yüksek rakımlı geziler için.",
    icon: "shirt",
    seasons: ["spring", "autumn", "winter"],
    essential: false,
  },
  {
    id: "camera",
    name: "Fotoğraf Makinesi veya Telefon",
    description: "Unutulmaz anları ölümsüzleştirmek için.",
    icon: "camera",
    seasons: ["spring", "summer", "autumn", "winter"],
    essential: true,
  },
];

export function getPackingForCity(extra: PackingItem[] = []): PackingItem[] {
  const ids = new Set(extra.map((e) => e.id));
  return [...commonPackingItems.filter((i) => !ids.has(i.id)), ...extra];
}
