import type { City } from "@/lib/types";
import { getPackingForCity } from "../packing-common";

export const izmir: City = {
  id: "izmir",
  slug: "izmir",
  name: "İzmir",
  region: "Ege",
  description:
    "Ege'nin incisi; Kordon boyu, antik Efes, lezzetli deniz ürünleri ve hoşgörülü şehir kültürüyle Türkiye'nin en yaşanabilir kıyı kentlerinden biri.",
  image: "https://images.unsplash.com/photo-1591604466104-6b2a3f0c4b0a?w=800&q=80",
  heroImage: "https://images.unsplash.com/photo-1591604466104-6b2a3f0c4b0a?w=1600&q=80",
  coordinates: { lat: 38.4192, lng: 27.1287 },
  climate: "Akdeniz iklimi; yazlar sıcak ve kurak, kışlar ılıman ve yağışlı",
  bestSeason: "İlkbahar, Yaz ve Sonbahar",
  tags: ["ege", "deniz", "efes", "kordon"],
  attractions: [
    {
      id: "saat-kulesi",
      name: "İzmir Saat Kulesi",
      shortDescription: "Konak Meydanı'nın simgesi; 1901'den beri şehrin buluşma noktası.",
      rating: 4.8,
      address: "Konak, Saat Kulesi, Konak/İzmir",
      image: "https://images.unsplash.com/photo-1591604466104-6b2a3f0c4b0a?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Izmir+Clock+Tower",
      story: {
        history:
          "1901'de II. Abdülhamid'in tahta çıkışının 25. yılında Sadrazam Mehmet Said Paşa tarafından yaptırıldı. Raymond Charles Père'in tasarımıdır.",
        culturalSignificance:
          "İzmirlilerin 'Saat Kulesi altında buluşalım' dediği şehrin en tanınmış simgesidir; bayram ve kutlamaların merkezidir.",
        architecture:
          "Dört katlı, 25 metre yüksekliğinde Osmanlı dönemi saat kulesi; mermer sütunlar ve kemerli nişlerle süslenmiştir.",
        interestingFacts: [
          "Kuledeki saatler Alman İmparatoru II. Wilhelm'den hediyedir.",
          "Çevresindeki Konak Camii ve Yalı Camii ile tarihî bir üçgen oluşturur.",
          "Yeni Yıl ve 9 Eylül kutlamalarının odak noktasıdır.",
        ],
      },
    },
    {
      id: "efes",
      name: "Efes Antik Kenti",
      shortDescription: "Antik dünyanın en iyi korunmuş kentlerinden biri; Celsus Kütüphanesi ve Büyük Tiyatro.",
      rating: 4.9,
      address: "Atatürk, Efes Antik Kenti, Selçuk/İzmir",
      image: "https://images.unsplash.com/photo-1555992336-fb0d3f8fc4c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Ephesus+Ancient+City",
      story: {
        history:
          "MÖ 10. yüzyılda kurulan Efes, Roma döneminde Asya Eyaleti'nin başkenti oldu. Aziz Paul'un vaaz verdiği kent, Artemis Tapınağı ile ünlüdür.",
        culturalSignificance:
          "UNESCO Dünya Mirası; Hristiyanlık ve pagan kültürlerin kesiştiği, antik tiyatronun hâlâ konserlere ev sahipliği yaptığı eşsiz bir alandır.",
        architecture:
          "Celsus Kütüphanesi'nin iki katlı cephesi, mermer Curetes Caddesi ve 25.000 kişilik Büyük Tiyatro Roma mimarisinin zirvesini gösterir.",
        interestingFacts: [
          "Celsus Kütüphanesi'nin cephesi 2004'te restore edilmiştir.",
          "Büyük Tiyatro akustik testlerde hâlâ mükemmel sonuç verir.",
          "Yakınındaki Meryem Ana Evi hac merkezidir.",
        ],
      },
    },
    {
      id: "kordon",
      name: "Alsancak Kordon",
      shortDescription: "Ege kıyısında bisiklet yolları, kafeler ve gün batımı manzarası.",
      rating: 4.7,
      address: "Alsancak, Kordon, Konak/İzmir",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kordon+Izmir",
      story: {
        history:
          "19. yüzyılda liman ve ticaretin gelişmesiyle şekillenen sahil şeridi, 2000'lerde yaya ve bisiklet dostu Kordon projesiyle yenilendi.",
        culturalSignificance:
          "İzmir'in sosyal yaşamının kalbi; koşucular, balıkçılar ve akşamüstü çay içenlerin buluşma yeridir.",
        architecture:
          "Geniş kaldırımlar, palmiye ağaçları ve tarihî binaların denize bakan cepheleri modern kentsel tasarımla birleşir.",
        interestingFacts: [
          "Toplam uzunluk 8 kilometreyi aşan sahil şeridinin parçasıdır.",
          "İzmir Maratonu rotasının en görkemli bölümüdür.",
          "Kordon'da midye dolma ve gevrek satıcıları gelenektir.",
        ],
      },
    },
    {
      id: "kemeralti",
      name: "Kemeraltı Çarşısı",
      shortDescription: "Osmanlı'dan günümüze uzanan devasa çarşı; baharat, kuyumcu ve hanlar.",
      rating: 4.6,
      address: "Konak, Kemeraltı, Konak/İzmir",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kemeralti+Bazaar+Izmir",
      story: {
        history:
          "17. yüzyıldan itibaren liman ticaretinin merkezi olan Kemeraltı, Kızlarağası ve Hisarönü hanlarıyla genişledi.",
        culturalSignificance:
          "Çok dinli ticaret geleneğinin yaşadığı; sinagog, cami ve kiliselerin yan yana olduğu tarihî ticaret bölgesidir.",
        architecture:
          "Taş kemerli hanlar, dar sokaklar ve kubbeli dükkânlar klasik Osmanlı çarşı dokusunu korur.",
        interestingFacts: [
          "Kızlarağası Hanı çini ve halı alışverişinin merkezidir.",
          "Çarşıda 15.000'den fazla iş yeri bulunur.",
          "Şadırvan Camii ve Havra Sokağı tur rotasının parçasıdır.",
        ],
      },
    },
    {
      id: "kadifekale",
      name: "Kadifekale",
      shortDescription: "Kadifekale Surları'ndan İzmir Körfezi'ne panoramik bakış.",
      rating: 4.5,
      address: "Kadifekale, İzmir",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kadifekale+Izmir",
      story: {
        history:
          "MÖ 4. yüzyılda Büyük İskender'in generallerinden Lysimachos tarafından kurulan Smyrna'nın akropolis surlarıdır.",
        culturalSignificance:
          "Antik İzmir ile modern kentin üst üste bindiği noktada şehrin tarihini okumak için ideal bir seyir noktasıdır.",
        architecture:
          "Helenistik ve Roma dönemi sur taşları, burç kalıntıları ve tiyatro izleri görülebilir.",
        interestingFacts: [
          "Adını Osmanlı döneminde surların kadife gibi yumuşak görünümünden aldığı söylenir.",
          "Gün batımı fotoğrafları için popüler bir noktadır.",
          "Çevresindeki Kadifekale mahallesi canlı sokak kültürü sunar.",
        ],
      },
    },
  ],
  restaurants: [
    {
      id: "deniz-restaurant-izmir",
      name: "Deniz Restaurant",
      rating: 4.9,
      cuisine: "Deniz Ürünleri / Ege",
      address: "Kordon, Alsancak/İzmir",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Deniz+Restaurant+Izmir",
      website: "https://www.denizrestaurant.com.tr",
    },
    {
      id: "kordon-boyu",
      name: "Kordon Boyu Balık",
      rating: 4.7,
      cuisine: "Balık / Meze",
      address: "Pasaport, Kordon/İzmir",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kordon+Boyu+Balik+Izmir",
    },
    {
      id: "sakiz-agaci",
      name: "Sakız Ağacı",
      rating: 4.6,
      cuisine: "Ege / Zeytinyağlı",
      address: "Alaçatı, Çeşme/İzmir",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Sakiz+Agaci+Alacati",
    },
    {
      id: "kumru-cesme",
      name: "Kumru Evi",
      rating: 4.8,
      cuisine: "Sokak Lezzeti / Kumru",
      address: "Çeşme Merkez, Çeşme/İzmir",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kumru+Evi+Cesme",
    },
  ],
  hotels: [
    {
      id: "swissotel-izmir",
      name: "Swissôtel Büyük Efes İzmir",
      stars: 5,
      rating: 4.8,
      address: "Alsancak, Gaziosmanpaşa Bulvarı, Konak/İzmir",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Swissotel+Izmir",
      bookingUrl: "https://www.booking.com/hotel/tr/swissotel-buyuk-efes-izmir.html",
    },
    {
      id: "mavi-surum-otel",
      name: "Key Hotel",
      stars: 4,
      rating: 4.6,
      address: "Alsancak, Mithatpaşa Cd., Konak/İzmir",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Key+Hotel+Izmir",
      bookingUrl: "https://www.booking.com/hotel/tr/key-hotel-izmir.html",
    },
    {
      id: "radisson-izmir",
      name: "Radisson Blu Hotel İzmir",
      stars: 4,
      rating: 4.5,
      address: "Alsancak, Cumhuriyet Bulvarı, Konak/İzmir",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Radisson+Blu+Izmir",
      bookingUrl: "https://www.booking.com/hotel/tr/radisson-blu-izmir.html",
    },
    {
      id: "reges-alacati",
      name: "Reges, a Luxury Collection Resort",
      stars: 5,
      rating: 4.9,
      address: "Alaçatı, Çeşme/İzmir",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Reges+Alacati",
      bookingUrl: "https://www.booking.com/hotel/tr/reges-a-luxury-collection-resort.html",
    },
  ],
  packingList: getPackingForCity([
    {
      id: "swimwear-izmir",
      name: "Mayo ve Havlu",
      description: "Çeşme, Alaçatı ve Kordon plajları için deniz malzemeleri.",
      icon: "waves",
      seasons: ["summer", "spring"],
      essential: true,
    },
  ]),
};
