import type { City } from "@/lib/types";
import { getPackingForCity } from "../packing-common";

export const mugla: City = {
  id: "mugla",
  slug: "mugla",
  name: "Muğla",
  region: "Ege",
  description:
    "Bodrum, Marmaris, Fethiye ve Datça'yı kapsayan turkuaz kıyılar, antik kentler ve yelken cenneti; Ege ve Akdeniz'in buluştuğu il.",
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
  coordinates: { lat: 37.2153, lng: 28.3636 },
  climate: "Akdeniz iklimi; yazlar sıcak, kışlar ılıman ve yağışlı",
  bestSeason: "Mayıs–Ekim",
  tags: ["ege", "tekne", "bodrum", "ölüdeniz"],
  attractions: [
    {
      id: "bodrum-kalesi",
      name: "Bodrum Kalesi ve Sualtı Arkeoloji Müzesi",
      shortDescription: "St. Peter Kalesi; dünyanın en önemli sualtı arkeoloji müzelerinden biri.",
      rating: 4.8,
      address: "Kale, Çarşı Mh., Bodrum/Muğla",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Bodrum+Castle",
      story: {
        history:
          "1402'de St. Jean Şövalyeleri tarafından inşa edilen kale, Osmanlı fethinden sonra cami ve tersane olarak kullanıldı. 1962'de müzeye dönüştürüldü.",
        culturalSignificance:
          "Uluslararası Bodrum Kültür ve Sanat Festivali'nin mekânı; Kaçakçılık ve Batık Gemi salonları dünyaca ünlüdür.",
        architecture:
          "Beş kuleli gotik kale, denize bakan surları ve iç avludaki cami kalıntıları çok katmanlı tarihi yansıtır.",
        interestingFacts: [
          "Uluburun Batığı sergisi müzenin yıldızıdır.",
          "Kaleden Bodrum yarımadası panoraması görülür.",
          "Yaz konserleri kale içinde düzenlenir.",
        ],
      },
    },
    {
      id: "oludeniz",
      name: "Ölüdeniz Lagünü",
      shortDescription: "Turkuaz lagün ve Babadağ yamaç paraşütüyle dünyaca ünlü plaj.",
      rating: 4.9,
      address: "Ölüdeniz, Fethiye/Muğla",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Oludeniz+Lagoon",
      story: {
        history:
          "Antik Lycia kıyısında 'Kıdrak' olarak bilinen bölge, 20. yüzyılda turizmle Ölüdeniz adını aldı. Lagün doğal koruma altındadır.",
        culturalSignificance:
          "Yamaç paraşütü (tandem) turizminin Türkiye'deki başlangıç noktası; Likya Yolu'nun batı ucudur.",
        architecture:
          "Doğal kumsal seti lagünü açık denizden ayırır; çevrede ahşap bungalov ve butik tesisler yer alır.",
        interestingFacts: [
          "Babadağ'dan 1960 metre yükseklikten atlayış yapılır.",
          "Lagün suyu tuzlu ve tatlı karışımıdır.",
          "Belcekız Plajı lagünün açık deniz tarafıdır.",
        ],
      },
    },
    {
      id: "kaya-koy",
      name: "Kayaköy (Levissi)",
      shortDescription: "Terk edilmiş Rum köyü; taş evler ve Likya Yolu üzerinde hayalet kasaba.",
      rating: 4.7,
      address: "Kayaköy, Fethiye/Muğla",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kayakoy+Fethiye",
      story: {
        history:
          "1923 nüfus mübadelesi sonrası terk edilen Levissi köyü, 600'den fazla eviyle açık hava müzesi niteliğindedir.",
        culturalSignificance:
          "Türkiye-Yunanistan ortak kültürel miras projelerinin konusu; barış ve hafıza turizminin sembolüdür.",
        architecture:
          "Taş evler, kilise kalıntıları ve teraslı sokaklar Akdeniz kırsal mimarisinin dokusunu korur.",
        interestingFacts: [
          "Russell Crowe'un 'Su ve Ateş' filminde mekân olarak kullanılmıştır.",
          "Likya Yolu rotası köyden geçer.",
          "Gün batımı manzarası eşsizdir.",
        ],
      },
    },
    {
      id: "saklikent",
      name: "Saklıkent Kanyonu",
      shortDescription: "18 kilometrelik dar kanyon; serin suda yürüyüş ve rafting.",
      rating: 4.6,
      address: "Saklıkent, Seydikemer/Muğla",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Saklikent+Canyon",
      story: {
        history:
          "Kanyon 1990'larda keşfedilip turizme açıldı. Akdeniz ile Ege'yi ayıran Toros eteğinde doğal oluşumdur.",
        culturalSignificance:
          "Yaz sıcağında serinlemek isteyenlerin; doğa sporları tutkunlarının vazgeçilmez durağıdır.",
        architecture:
          "300 metreye varan kayalık duvarlar arasında ahşap platformlar ve asma köprüler gezi rotasını oluşturur.",
        interestingFacts: [
          "Kanyonun bir bölümü yıl boyunca güneş ışığı almaz.",
          "Su sıcaklığı yazın bile serindir.",
          "Çevredeki restoranlarda ayakta su içinde yemek yenir.",
        ],
      },
    },
    {
      id: "kaunos",
      name: "Kaunos Antik Kenti",
      shortDescription: "Kaya mezarları ve antik liman; Dalyan'da Caretta caretta plajları.",
      rating: 4.8,
      address: "Kaunos, Dalyan/Muğla",
      image: "https://images.unsplash.com/photo-1555992336-fb0d3f8fc4c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kaunos+Ancient+City",
      story: {
        history:
          "MÖ 10. yüzyılda kurulan Kaunos, Pers, Helenistik ve Roma dönemlerinde önemli bir liman kentiydi. Dalyan Kanalı ile denize bağlanır.",
        culturalSignificance:
          "Likya-Pers kültür sentezi; İztuzu Plajı'nda caretta caretta üreme alanı koruma altındadır.",
        architecture:
          "Kayaya oyulmuş tapınak tipi mezarlar, tiyatro ve surlar Dalyan nehri manzarasıyla birleşir.",
        interestingFacts: [
          "Kaya mezarları nehir turunun simgesidir.",
          "İztuzu'na tekne veya dolmuşla gidilir.",
          "Tuz Gölü ve Kaplıca yakındadır.",
        ],
      },
    },
  ],
  restaurants: [
    {
      id: "gemibasi",
      name: "Gemibaşı Restaurant",
      rating: 4.8,
      cuisine: "Deniz Ürünleri / Bodrum",
      address: "Bodrum Merkez, Bodrum/Muğla",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Gemibasi+Bodrum",
    },
    {
      id: "zeytin-aga",
      name: "Zeytin Ağacı",
      rating: 4.7,
      cuisine: "Ege / Zeytinyağlı",
      address: "Göcek, Fethiye/Muğla",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Zeytin+Agaci+Gocek",
    },
    {
      id: "cin-balik",
      name: "Çın Balık",
      rating: 4.6,
      cuisine: "Balık / Marmaris",
      address: "Marmaris Merkez, Marmaris/Muğla",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Cin+Balik+Marmaris",
    },
    {
      id: "kordon-datca",
      name: "Kordon Restaurant",
      rating: 4.7,
      cuisine: "Datça / Meze",
      address: "Datça Merkez, Datça/Muğla",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kordon+Restaurant+Datca",
    },
  ],
  hotels: [
    {
      id: "mandarin-bodrum",
      name: "Mandarin Oriental Bodrum",
      stars: 5,
      rating: 4.9,
      address: "Paradise Bay, Bodrum/Muğla",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Mandarin+Oriental+Bodrum",
      bookingUrl: "https://www.booking.com/hotel/tr/mandarin-oriental-bodrum.html",
    },
    {
      id: "d-mar-gocek",
      name: "D-Resort Göcek",
      stars: 5,
      rating: 4.8,
      address: "Göcek, Fethiye/Muğla",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=D-Resort+Gocek",
      bookingUrl: "https://www.booking.com/hotel/tr/d-resort-gocek.html",
    },
    {
      id: "liberty-fethiye",
      name: "Liberty Hotels Lykia",
      stars: 5,
      rating: 4.6,
      address: "Ölüdeniz, Fethiye/Muğla",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Liberty+Hotels+Lykia",
      bookingUrl: "https://www.booking.com/hotel/tr/liberty-hotels-lykia.html",
    },
    {
      id: "green-bay",
      name: "Green Bay Hotel",
      stars: 4,
      rating: 4.5,
      address: "Marmaris, Muğla",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Green+Bay+Hotel+Marmaris",
      bookingUrl: "https://www.booking.com/hotel/tr/green-bay-marmaris.html",
    },
  ],
  packingList: getPackingForCity([
    {
      id: "boat-bag-mugla",
      name: "Su Geçirmez Çanta",
      description: "Tekne turları ve koy gezilerinde telefon ve eşyalar için.",
      icon: "bag",
      seasons: ["summer", "spring", "autumn"],
      essential: true,
    },
    {
      id: "parasol-mugla",
      name: "Güneş Şemsiyesi veya UV Gözlük",
      description: "Açık deniz ve plajlarda yoğun güneşe karşı koruma.",
      icon: "sun",
      seasons: ["summer"],
      essential: false,
    },
  ]),
};
