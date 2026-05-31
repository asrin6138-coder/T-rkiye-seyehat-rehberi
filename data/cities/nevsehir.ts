import type { City } from "@/lib/types";
import { getPackingForCity } from "../packing-common";

export const nevsehir: City = {
  id: "nevsehir",
  slug: "nevsehir",
  name: "Nevşehir",
  region: "İç Anadolu",
  description:
    "Kapadokya'nın kalbi; peri bacaları, balon turları, yeraltı şehirleri ve kaya otelleriyle dünyanın en büyülü coğrafyalarından biri.",
  image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80",
  heroImage: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1600&q=80",
  coordinates: { lat: 38.6244, lng: 34.7239 },
  climate: "Karasal step; yazlar sıcak, kışlar soğuk; gece-gündüz farkı yüksek",
  bestSeason: "Nisan–Kasım (balon için sabah serin)",
  tags: ["kapadokya", "balon", "peri bacası", "tarih"],
  attractions: [
    {
      id: "goreme-acik-hava",
      name: "Göreme Açık Hava Müzesi",
      shortDescription: "UNESCO Dünya Mirası; kaya kiliseleri ve freskleri.",
      rating: 4.9,
      address: "Göreme, Nevşehir",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Goreme+Open+Air+Museum",
      story: {
        history:
          "4.-13. yüzyıllar arasında Hristiyan keşişlerin yaşam ve ibadet alanı olarak oyuldu. 1985'te UNESCO Dünya Mirası listesine alındı.",
        culturalSignificance:
          "Bizans dönemi kaya sanatının en yoğun örneği; Kapadokya turunun vazgeçilmez durağıdır.",
        architecture:
          "Kaya kiliseleri, refektorium, manastır hücreleri ve Karanlık Kilise freskleri volkanik tüf kayaya oyulmuştur.",
        interestingFacts: [
          "Karanlık Kilise için ekstra bilet gerekir.",
          "Tokalı Kilise iki katlı freskleriyle ünlüdür.",
          "Gün doğumunda balonlar müzenin üzerinden geçer.",
        ],
      },
    },
    {
      id: "uchisar",
      name: "Uçhisar Kalesi",
      shortDescription: "Kapadokya'nın en yüksek noktası; kaya kalesinden 360° panorama.",
      rating: 4.8,
      address: "Uçhisar, Nevşehir",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Uchisar+Castle",
      story: {
        history:
          "Roma ve Bizans dönemlerinden itibaren savunma ve gözetleme kulesi olarak kullanılan kaya kütlesi, Osmanlı'da da yerleşim gördü.",
        culturalSignificance:
          "Kapadokya siluetinin simgesi; gün batımı ve balon manzarası için en iyi seyir noktalarından biridir.",
        architecture:
          "Doğal kaya kütlesine oyulmuş odalar, merdivenler ve tüneller savunma amaçlı düzenlenmiştir.",
        interestingFacts: [
          "Zirveden Erciyes Dağı görülebilir.",
          "Çevresinde butik kaya oteller yoğundur.",
          "Güvercinlikler vadisi yakındadır.",
        ],
      },
    },
    {
      id: "derinkuyu",
      name: "Derinkuyu Yeraltı Şehri",
      shortDescription: "8 kat derinliğinde, 20.000 kişilik antik yeraltı yerleşimi.",
      rating: 4.8,
      address: "Derinkuyu, Nevşehir",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Derinkuyu+Underground+City",
      story: {
        history:
          "Hitit dönemine kadar uzanan yeraltı şehri, Roma ve Bizans baskılarında Hristiyanların sığınak olarak kullandığı düşünülür. 1963'te tesadüfen keşfedildi.",
        culturalSignificance:
          "İnsanlık tarihinin en büyük yeraltı yerleşimlerinden; mühendislik ve inanç tarihinin birleştiği alandır.",
        architecture:
          "Havalandırma bacaları, kiliseler, ahırlar, şarap mahzenleri ve taş kapılar katmanlı bir labirent oluşturur.",
        interestingFacts: [
          "Derinlik 85 metreye iner; ziyaretçiler 8 kata inebilir.",
          "Kaymaklı ile yeraltı tüneliyle bağlantılı olduğu düşünülür.",
          "Dar koridorlarda tek yön ziyaret uygulanır.",
        ],
      },
    },
    {
      id: "pasabag",
      name: "Paşabağ (Rahipler Vadisi)",
      shortDescription: "Çok başlı peri bacaları ve şapel kalıntıları.",
      rating: 4.7,
      address: "Paşabağ, Avanos/Nevşehir",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Pasabag+Valley",
      story: {
        history:
          "Volkanik patlamalar sonucu oluşan tüf ve bazalt tabakaların aşınmasıyla şekillendi. Rahipler vadisinde keşiş hücreleri oyuldu.",
        culturalSignificance:
          "Kapadokya'nın en ikonik peri bacası fotoğraflarının çekildiği alandır.",
        architecture:
          "Mantar veya mantar başlı şekilli peri bacaları; içlerinde küçük şapel ve hücreler bulunur.",
        interestingFacts: [
          "Üç başlı peri bacası en çok fotoğraflanan formdur.",
          "Gün batımı altın ışığında renk değiştirir.",
          "Avanos çömlek atölyelerine yakındır.",
        ],
      },
    },
    {
      id: "avanos",
      name: "Avanos ve Kızılırmak",
      shortDescription: "Çanak çömlek geleneği; Kızılırmak kıyısında el sanatları köyü.",
      rating: 4.6,
      address: "Avanos, Nevşehir",
      image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Avanos+Cappadocia",
      story: {
        history:
          "Hitit döneminden beri çömlek üretim merkezi olan Avanos, Kızılırmak'ın kırmızı kilini kullanarak binlerce yıldır üretim yapar.",
        culturalSignificance:
          "Kapadokya el sanatlarının yaşayan merkezi; atölye turları ve çömlekçi çarkı deneyimi sunar.",
        architecture:
          "Kızılırmak üzerindeki asma köprü, çömlek dükkanları ve kaya evleri geleneksel dokuyu korur.",
        interestingFacts: [
          "Çömlek atölyelerinde ücretsiz demo yapılır.",
          "Chez Galip'in saç müzesi ilginç bir duraktır.",
          "Güvercinlikler vadisi turları buradan başlar.",
        ],
      },
    },
  ],
  restaurants: [
    {
      id: "seten",
      name: "Seten Restaurant",
      rating: 4.8,
      cuisine: "Kapadokya / Anadolu",
      address: "Göreme, Nevşehir",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Seten+Restaurant+Goreme",
      website: "https://www.setenrestaurant.com",
    },
    {
      id: "topdeck",
      name: "Topdeck Cave Restaurant",
      rating: 4.7,
      cuisine: "Testi Kebabı / Türk",
      address: "Göreme, Nevşehir",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Topdeck+Cave+Restaurant",
    },
    {
      id: "dimrit",
      name: "Dimrit Cafe & Restaurant",
      rating: 4.6,
      cuisine: "Kafe / Kapadokya",
      address: "Uçhisar, Nevşehir",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Dimrit+Cafe+Uchisar",
    },
    {
      id: "zikri",
      name: "Ziggy's Shoppe ve Cafe",
      rating: 4.7,
      cuisine: "Fusion / Kahvaltı",
      address: "Ürgüp, Nevşehir",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Ziggy+Cafe+Urgup",
    },
  ],
  hotels: [
    {
      id: "museum-hotel",
      name: "Museum Hotel",
      stars: 5,
      rating: 4.9,
      address: "Uçhisar, Nevşehir",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Museum+Hotel+Cappadocia",
      bookingUrl: "https://www.booking.com/hotel/tr/museum-hotel.html",
    },
    {
      id: "sultan-cave",
      name: "Sultan Cave Suites",
      stars: 4,
      rating: 4.8,
      address: "Göreme, Nevşehir",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Sultan+Cave+Suites",
      bookingUrl: "https://www.booking.com/hotel/tr/sultan-cave-suites.html",
    },
    {
      id: "argos",
      name: "Argos in Cappadocia",
      stars: 5,
      rating: 4.8,
      address: "Uçhisar, Nevşehir",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Argos+in+Cappadocia",
      bookingUrl: "https://www.booking.com/hotel/tr/argos-in-cappadocia.html",
    },
    {
      id: "kaya-konak",
      name: "Kaya Konak Cave Hotel",
      stars: 3,
      rating: 4.5,
      address: "Göreme, Nevşehir",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kaya+Konak+Cave+Hotel",
      bookingUrl: "https://www.booking.com/hotel/tr/kaya-konak-cave.html",
    },
  ],
  packingList: getPackingForCity([
    {
      id: "warm-morning-nevsehir",
      name: "Sabahlık Polar ve Bere",
      description: "Balon turu ve açık hava müzelerinde sabah serinliği için.",
      icon: "shirt",
      seasons: ["spring", "summer", "autumn", "winter"],
      essential: true,
    },
    {
      id: "hiking-shoes-nevsehir",
      name: "Patika Yürüyüş Ayakkabısı",
      description: "Vadiler ve yeraltı şehri merdivenleri için kaymaz taban.",
      icon: "footprints",
      seasons: ["spring", "summer", "autumn"],
      essential: true,
    },
  ]),
};
