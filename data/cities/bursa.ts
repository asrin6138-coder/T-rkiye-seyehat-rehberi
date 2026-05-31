import type { City } from "@/lib/types";
import { getPackingForCity } from "../packing-common";

export const bursa: City = {
  id: "bursa",
  slug: "bursa",
  name: "Bursa",
  region: "Marmara",
  description:
    "Osmanlı'nın ilk başkenti; ipek, kebap, Uludağ kayak merkezi ve Yeşil Bursa'nın tarihî camileriyle Marmara'nın kültür hazinesi.",
  image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
  heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80",
  coordinates: { lat: 40.1885, lng: 29.061 },
  climate: "Ilıman karasal; yazlar sıcak, kışlar karlı (özellikle Uludağ)",
  bestSeason: "İlkbahar, Yaz ve Kış (kayak)",
  tags: ["osmanlı", "uludağ", "ipek", "kebap"],
  attractions: [
    {
      id: "ulu-camii",
      name: "Ulu Camii",
      shortDescription: "20 kubbeli, 12 sütunlu Osmanlı erken döneminin en görkemli camisi.",
      rating: 4.8,
      address: "Osmangazi, Nalbantoğlu Cd., Osmangazi/Bursa",
      image: "https://images.unsplash.com/photo-1591604466104-6b2a3f0c4b0a?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Ulu+Cami+Bursa",
      story: {
        history:
          "1399'da Yıldırım Bayezid'in Niğbolu zaferi sonrası yaptırdığı cami, 1402 Ankara Savaşı'ndaki esirlik nedeniyle tamamlanması gecikmiş, 1399 planına sadık kalınmıştır.",
        culturalSignificance:
          "Osmanlı mimarisinde çok kubbeli cami geleneğinin başlangıcı; hat sanatının en güzel örneklerini barındırır.",
        architecture:
          "Kare plan üzerine 20 kubbe, 12 dev sütun ve Selçuklu-Selatin sentezi taş işçiliği dikkat çeker.",
        interestingFacts: [
          "İç mekândaki hat levhaları Osmanlı hat sanatının zirvesidir.",
          "Şadırvanlı cami geleneğinin en erken örneklerindendir.",
          "Çarşı ve hanlarla çevrili merkezî konumdadır.",
        ],
      },
    },
    {
      id: "yesil-turbe",
      name: "Yeşil Türbe ve Yeşil Camii",
      shortDescription: "Çini kaplamalı yeşil cepheleriyle Bursa'nın simgesi.",
      rating: 4.9,
      address: "Yeşil, Yeşil Cd., Yıldırım/Bursa",
      image: "https://images.unsplash.com/photo-1528183429752-a11d0b50d880?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Yesil+Tomb+Bursa",
      story: {
        history:
          "1421'de I. Mehmed (Çelebi Mehmed) tarafından babası Yıldırım Bayezid için yaptırılan külliye, Mimar Hacı Ivaz'ın baş eseridir.",
        culturalSignificance:
          "Osmanlı çini sanatının doruk noktası; 'Yeşil Bursa' adının kaynağıdır.",
        architecture:
          "Türbe sekizgen planlı, dış cephe turkuaz-yeşil çinilerle kaplıdır. Camii revaklı avlu ve alçak kubbe ile erken Osmanlı üslubunu taşır.",
        interestingFacts: [
          "Çinilerin rengi zamanla turkuaz tonuna dönüşmüştür.",
          "Yeşil Camii'nin içi hat ve çini süslemelerle bezelidir.",
          "Külliye medrese, hamam ve imaret kalıntıları içerir.",
        ],
      },
    },
    {
      id: "cumalikizik",
      name: "Cumalıkızık",
      shortDescription: "UNESCO Dünya Mirası Osmanlı köyü; renkli evler ve sokak lezzetleri.",
      rating: 4.7,
      address: "Cumalıkızık, Yıldırım/Bursa",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Cumalikizik+Bursa",
      story: {
        history:
          "1300'lü yıllarda Osmanlı fetihlerinde konaklama köyü olarak kuruldu. 700 yıllık yerleşim dokusu günümüze ulaştı.",
        culturalSignificance:
          "2014'te UNESCO listesine alındı; Osmanlı kırsal mimarisinin en iyi korunan örneğidir.",
        architecture:
          "Üç katlı ahşap-kargir evler, taş döşeli sokaklar ve cumbalı cepheler tipik Bursa köy mimarisini yansıtır.",
        interestingFacts: [
          "Cumalıkızık köftesi ve ev yapımı reçeller meşhurdur.",
          "Televizyon dizilerine ev sahipliği yapmıştır.",
          "Pazar günleri köy pazarı kurulur.",
        ],
      },
    },
    {
      id: "uludag",
      name: "Uludağ Milli Parkı",
      shortDescription: "Türkiye'nin en büyük kayak merkezlerinden biri; yazın da yayla turizmi.",
      rating: 4.8,
      address: "Uludağ, Osmangazi/Bursa",
      image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Uludag+Ski+Resort",
      story: {
        history:
          "Antik çağda Mysia Olympos'u olarak bilinen dağ, Osmanlı'da keşiş manastırlarıyla ünlüydü. 20. yüzyılda modern kayak tesisi kuruldu.",
        culturalSignificance:
          "Bursa'nın doğal simgesi; kış turizmi ve yaz trekking rotalarının merkezidir.",
        architecture:
          "Teleferik istasyonları, oteller ve pist altyapısı dağın eteklerinden zirveye uzanır.",
        interestingFacts: [
          "Zirve yüksekliği 2543 metredir.",
          "Teleferik Bursa'dan Uludağ'a 22 dakikada çıkar.",
          "Yazın dağ keçisi ve endemik bitki türleri gözlemlenebilir.",
        ],
      },
    },
    {
      id: "koza-han",
      name: "Koza Han",
      shortDescription: "İpek ticaretinin kalbi; 1491'den beri ipek şal ve kumaş çarşısı.",
      rating: 4.6,
      address: "Osmangazi, Ulu Camii Yanı, Osmangazi/Bursa",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Koza+Han+Bursa",
      story: {
        history:
          "1491'de II. Bayezid tarafından yaptırılan han, İpek Yolu'nun batı ucunda koza ticaretinin merkezi oldu.",
        culturalSignificance:
          "Bursa ipeğinin dünyaya tanıtıldığı mekân; han avlusundaki çınar altında çay içmek gelenektir.",
        architecture:
          "İki katlı, revaklı avlulu klasik Osmanlı han mimarisi; ortadaki çınar ağacı simgeseldir.",
        interestingFacts: [
          "Han içinde hâlâ gerçek Bursa ipeği satılır.",
          "Avludaki çınar 600 yıllık olduğu söylenir.",
          "Ulu Camii'ne yürüme mesafesindedir.",
        ],
      },
    },
  ],
  restaurants: [
    {
      id: "iskender-kebap",
      name: "İskender Kebapçısı",
      rating: 4.9,
      cuisine: "İskender Kebap",
      address: "Osmangazi, Atatürk Cd., Osmangazi/Bursa",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Iskender+Kebap+Bursa",
      website: "https://www.iskender.com.tr",
    },
    {
      id: "cag-kebap",
      name: "Çağ Kebap",
      rating: 4.8,
      cuisine: "Erzurum / Kebap",
      address: "Osmangazi, Bursa",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Cag+Kebap+Bursa",
    },
    {
      id: "hacivat-kofte",
      name: "Hacıvat Köfte",
      rating: 4.6,
      cuisine: "Köfte / Bursa",
      address: "Osmangazi, Bursa",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Hacivat+Kofte+Bursa",
    },
    {
      id: "tahinli-pide",
      name: "Tahinli Pidecisi",
      rating: 4.7,
      cuisine: "Pide / Tahinli",
      address: "Osmangazi, Bursa",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Tahinli+Pide+Bursa",
    },
  ],
  hotels: [
    {
      id: "hilton-bursa",
      name: "Hilton Bursa Convention Center & Spa",
      stars: 5,
      rating: 4.7,
      address: "Osmangazi, Bursa",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Hilton+Bursa",
      bookingUrl: "https://www.booking.com/hotel/tr/hilton-bursa.html",
    },
    {
      id: "almira",
      name: "Almira Hotel Thermal Spa & Convention Center",
      stars: 5,
      rating: 4.8,
      address: "Osmangazi, Bursa",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Almira+Hotel+Bursa",
      bookingUrl: "https://www.booking.com/hotel/tr/almira-hotel-bursa.html",
    },
    {
      id: "cotton-house",
      name: "Cotton House Hotel",
      stars: 4,
      rating: 4.5,
      address: "Nilüfer, Bursa",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Cotton+House+Bursa",
      bookingUrl: "https://www.booking.com/hotel/tr/cotton-house-bursa.html",
    },
    {
      id: "karinna",
      name: "Karinna Hotel",
      stars: 3,
      rating: 4.4,
      address: "Osmangazi, Bursa",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Karinna+Hotel+Bursa",
      bookingUrl: "https://www.booking.com/hotel/tr/karinna-hotel.html",
    },
  ],
  packingList: getPackingForCity([
    {
      id: "ski-gear-bursa",
      name: "Kayak Ekipmanı veya Kiralama Notu",
      description: "Uludağ pistleri için kışlık mont, eldiven ve gözlük.",
      icon: "snowflake",
      seasons: ["winter"],
      essential: true,
    },
  ]),
};
