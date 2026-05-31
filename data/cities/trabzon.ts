import type { City } from "@/lib/types";
import { getPackingForCity } from "../packing-common";

export const trabzon: City = {
  id: "trabzon",
  slug: "trabzon",
  name: "Trabzon",
  region: "Karadeniz",
  description:
    "Yeşil Karadeniz'in incisi; Sümela Manastırı, Uzungöl, hamsi ve çay bahçeleriyle mistik dağlar ve Karadeniz kültürünün buluştuğu şehir.",
  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
  coordinates: { lat: 41.0027, lng: 39.7168 },
  climate: "Ilıman okyanusal etkili; yazlar ılık, kışlar yağışlı ve nemli",
  bestSeason: "Yaz ve Erken Sonbahar",
  tags: ["karadeniz", "doğa", "manastır", "hamsi"],
  attractions: [
    {
      id: "sumela",
      name: "Sümela Manastırı",
      shortDescription: "Maçka'da kayalığa oyulmuş Bizans manastırı; efsanevi manzara.",
      rating: 4.9,
      address: "Maçka, Sümela Manastırı, Trabzon",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Sumela+Monastery",
      story: {
        history:
          "MS 386'da iki rahibin rüyasında gördükleri Meryem Ana ikonası üzerine kurulan manastır, 1923'e kadar aktif kalmış, uzun süre kapalı kaldıktan sonra restore edilerek 2020'de yeniden açıldı.",
        culturalSignificance:
          "Pontus Rum ve Ortodoks dünyasının kutsal merkezlerinden; Karadeniz'in en tanınmış dini yapısıdır.",
        architecture:
          "1200 metre yükseklikte dik yamaçtaki kayaya oyulmuş kilise, şapel ve yaşam alanları freskleriyle ünlüdür.",
        interestingFacts: [
          "Manastıra ulaşım için yeni yürüyüş yolu düzenlenmiştir.",
          "İç fresklerde İncil sahneleri görülür.",
          "Altındaki Mela Deresi vadisi yürüyüş rotasıdır.",
        ],
      },
    },
    {
      id: "uzungol",
      name: "Uzungöl",
      shortDescription: "Dağlar arasındaki göl ve ahşap evleriyle ünlü turistik köy.",
      rating: 4.7,
      address: "Uzungöl, Çaykara/Trabzon",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Uzungol+Trabzon",
      story: {
        history:
          "Heyelan sonucu oluştuğu düşünülen göl, çevresindeki Laz ve Hemşin köyleriyle 20. yüzyılda turizm destinasyonuna dönüştü.",
        culturalSignificance:
          "Karadeniz doğa turizminin simgesi; yerel mimari ve yöresel kahvaltı kültürünün tanıtıldığı alandır.",
        architecture:
          "Göl çevresindeki ahşap oteller ve cami, geleneksel Karadeniz köy mimarisini yansıtır.",
        interestingFacts: [
          "Göl uzunluğu yaklaşık 1000 metredir.",
          "Sisli havalarda manzara mistik bir görünüm alır.",
          "Balık restoranları göl kıyısındadır.",
        ],
      },
    },
    {
      id: "ayasofya-trabzon",
      name: "Trabzon Ayasofya Müzesi",
      shortDescription: "1204'te inşa edilen Bizans kilisesi; mozaik ve freskleriyle ünlü.",
      rating: 4.8,
      address: "Aya Sofya, Ortahisar/Trabzon",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4ab9?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Trabzon+Ayasofya+Museum",
      story: {
        history:
          "Komnenos hanedanı döneminde 1204-1263 arasında inşa edildi. 1461 fethinden sonra camiye, 1964'te müzeye dönüştürüldü; 2013'te tekrar cami oldu, müze bölümü korunuyor.",
        culturalSignificance:
          "Karadeniz Bizans sanatının en önemli örneği; Pontus Rum kültürünün izlerini taşır.",
        architecture:
          "Haç planlı, kubbeli ve freskli iç mekân; dış cephe taş işçiliği Komnenos üslubunu yansıtır.",
        interestingFacts: [
          "Fresklerde İncil ve Komnenos ailesi sahneleri vardır.",
          "Deniz manzaralı bahçesi fotoğraf için idealdir.",
          "İstanbul Ayasofya'dan bağımsız bir yapıdır.",
        ],
      },
    },
    {
      id: "boztepe",
      name: "Boztepe Seyir Terası",
      shortDescription: "Trabzon ve Karadeniz manzarası; çay içmek için en popüler tepe.",
      rating: 4.6,
      address: "Boztepe, Ortahisar/Trabzon",
      image: "https://images.unsplash.com/photo-1486325212027-8081b485255e?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Boztepe+Trabzon",
      story: {
        history:
          "Şehrin güneyindeki tepe, Osmanlı'dan beri seyir noktası olarak bilinir. Modern teras ve teleferik 2000'lerde eklendi.",
        culturalSignificance:
          "Trabzonluların misafir ağırladığı, çay ve mısır ekmeği yedikleri buluşma yeridir.",
        architecture:
          "Seyir terasları, kafeler ve teleferik istasyonu şehir siluetine hakim konumdadır.",
        interestingFacts: [
          "Gece şehir ışıkları panoraması sunar.",
          "Teleferik şehir merkezinden Boztepe'ye çıkar.",
          "Sisli günlerde manzara bulutların üzerindedir.",
        ],
      },
    },
    {
      id: "ataturk-kosku",
      name: "Atatürk Köşkü Müzesi",
      shortDescription: "Atatürk'ün Trabzon'da kaldığı ahşap köşk ve müze.",
      rating: 4.7,
      address: "Soguksu, Trabzon",
      image: "https://images.unsplash.com/photo-1528183429752-a11d0b50d880?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Ataturk+Kosku+Trabzon",
      story: {
        history:
          "1903'te Konstantin Kabayanidis tarafından yaptırılan köşk, 1930-1937 arasında Atatürk'ün Trabzon ziyaretlerinde kullanıldı. 1964'te müzeye dönüştürüldü.",
        culturalSignificance:
          "Cumhuriyet tarihinin Trabzon'daki en önemli anıtı; Atatürk'ün eşyaları ve odaları korunmaktadır.",
        architecture:
          "Üç katlı ahşap-Rum mimarisi; geniş balkonlar ve bahçe Trabzon'un tarihî villalarını temsil eder.",
        interestingFacts: [
          "Atatürk'ün odası olduğu gibi korunmuştur.",
          "Bahçede çay içilebilir.",
          "Soğuksu semtinde denize yakın konumdadır.",
        ],
      },
    },
  ],
  restaurants: [
    {
      id: "cigerci-niyazi",
      name: "Ciğerci Niyazi Usta",
      rating: 4.8,
      cuisine: "Ciğer / Karadeniz",
      address: "Ortahisar, Trabzon",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Cigerci+Niyazi+Trabzon",
    },
    {
      id: "hamsi-lokanta",
      name: "Kalender Hamsi",
      rating: 4.7,
      cuisine: "Hamsi / Balık",
      address: "Ortahisar, Trabzon",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kalender+Hamsi+Trabzon",
    },
    {
      id: "sahil-balik",
      name: "Sahil Balık Restaurant",
      rating: 4.6,
      cuisine: "Deniz Ürünleri",
      address: "Yalı, Ortahisar/Trabzon",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Sahil+Balik+Trabzon",
    },
    {
      id: "mihlama-evi",
      name: "Mıhlama Evi",
      rating: 4.7,
      cuisine: "Karadeniz / Kahvaltı",
      address: "Akçaabat, Trabzon",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Mihlama+Evi+Trabzon",
    },
  ],
  hotels: [
    {
      id: "zorlu-grand",
      name: "Zorlu Grand Hotel Trabzon",
      stars: 5,
      rating: 4.7,
      address: "Ortahisar, Trabzon",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Zorlu+Grand+Trabzon",
      bookingUrl: "https://www.booking.com/hotel/tr/zorlu-grand-trabzon.html",
    },
    {
      id: "radisson-trabzon",
      name: "Radisson Blu Hotel Trabzon",
      stars: 5,
      rating: 4.6,
      address: "Ortahisar, Trabzon",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Radisson+Blu+Trabzon",
      bookingUrl: "https://www.booking.com/hotel/tr/radisson-blu-trabzon.html",
    },
    {
      id: "uzungol-surmen",
      name: "Sürmen Hotel Uzungöl",
      stars: 4,
      rating: 4.5,
      address: "Uzungöl, Çaykara/Trabzon",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Surmen+Hotel+Uzungol",
      bookingUrl: "https://www.booking.com/hotel/tr/surmen-uzungol.html",
    },
    {
      id: "horon-hotel",
      name: "Horon Hotel",
      stars: 3,
      rating: 4.4,
      address: "Ortahisar, Trabzon",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Horon+Hotel+Trabzon",
      bookingUrl: "https://www.booking.com/hotel/tr/horon-hotel-trabzon.html",
    },
  ],
  packingList: getPackingForCity([
    {
      id: "waterproof-trabzon",
      name: "Su Geçirmez Mont ve Bot",
      description: "Karadeniz'in ani yağmurları ve nemli havası için.",
      icon: "cloud-rain",
      seasons: ["spring", "summer", "autumn", "winter"],
      essential: true,
    },
  ]),
};
