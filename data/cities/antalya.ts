import type { City } from "@/lib/types";
import { getPackingForCity } from "../packing-common";

export const antalya: City = {
  id: "antalya",
  slug: "antalya",
  name: "Antalya",
  region: "Akdeniz",
  description:
    "Turizm başkenti; turkuaz deniz, Kaleiçi'nin dar sokakları, antik tiyatrolar ve yıl boyu güneşiyle Akdeniz'in en çok tercih edilen destinasyonu.",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
  coordinates: { lat: 36.8969, lng: 30.7133 },
  climate: "Akdeniz iklimi; yazlar çok sıcak ve kurak, kışlar ılıman",
  bestSeason: "Nisan–Ekim",
  tags: ["deniz", "turizm", "antik", "kaleiçi"],
  attractions: [
    {
      id: "kaleici",
      name: "Kaleiçi",
      shortDescription: "Hadrian Kapısı, Yivli Minare ve Osmanlı konaklarıyla tarihî merkez.",
      rating: 4.9,
      address: "Selçuk, Kaleiçi, Muratpaşa/Antalya",
      image: "https://images.unsplash.com/photo-1528183429752-a11d0b50d880?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kaleici+Antalya",
      story: {
        history:
          "Attalos II'nin 'Attaleia' adıyla kurduğu kent, Roma, Bizans ve Osmanlı dönemlerinde liman kenti olarak gelişti. Surlar ve liman 2. yüzyıldan kalma izler taşır.",
        culturalSignificance:
          "UNESCO geçici listesinde; Akdeniz turizminin kültürel omurgası ve yat turizminin kalbidir.",
        architecture:
          "Dar taş sokaklar, cumbalı Rum evleri, Hadrian Kapısı ve Yivli Minare farklı dönemlerin katmanlarını gösterir.",
        interestingFacts: [
          "Kaleiçi'nde 3000'den fazla tarihî yapı kayıtlıdır.",
          "Mermer Sokak en fotojenik yürüyüş rotasıdır.",
          "Eski liman (marina) lüks yatların demirlediği noktadır.",
        ],
      },
    },
    {
      id: "duden-selalesi",
      name: "Düden Şelalesi",
      shortDescription: "Düden Çayı'nın denize döküldüğü muhteşem şelale manzarası.",
      rating: 4.7,
      address: "Çağlayan, Lara Yolu, Muratpaşa/Antalya",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Duden+Waterfalls+Antalya",
      story: {
        history:
          "Toros Dağları'ndan gelen Düden Çayı, Antalya ovasını suladıktan sonra denize dökülür. Üst ve alt Düden olarak iki bölüm ziyaret edilir.",
        culturalSignificance:
          "Şehrin doğal simgesi; yerli halkın piknik ve düğün fotoğrafı çektiği klasik duraktır.",
        architecture:
          "Doğal kireçtaşı oluşumları ve mağara geçişleri şelale parkının peyzajıyla bütünleşir.",
        interestingFacts: [
          "Alt Düden doğrudan Akdeniz'e dökülür; tekne turlarından görülebilir.",
          "Yaz aylarında su debisi artar ve görsel şölen oluşur.",
          "Üst Düden'de mağara içi yürüyüş mümkündür.",
        ],
      },
    },
    {
      id: "antalya-muzesi",
      name: "Antalya Müzesi",
      shortDescription: "Türkiye'nin en zengin arkeoloji müzelerinden biri; Perge ve Aspendos eserleri.",
      rating: 4.8,
      address: "Bahçelievler, Konyaaltı Cd., Muratpaşa/Antalya",
      image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Antalya+Museum",
      story: {
        history:
          "1922'de Alaaddin Camii'nde başlayan koleksiyon, 1972'de Konyaaltı'ndaki bugünkü binaya taşındı. Bölge kazılarından gelen eserler sergilenir.",
        culturalSignificance:
          "Likya, Pamfilya ve Pisidya uygarlıklarının anlatıldığı ulusal düzeyde referans müzedir.",
        architecture:
          "13 salonlu modern müze binası, açık hava heykeller bahçesi ve çocuk bölümüyle geniş bir komplekstir.",
        interestingFacts: [
          "Zeus heykeli müzenin en değerli eserlerindendir.",
          "Sarcophagus salonu Roma dönemine aittir.",
          "1988'de Avrupa Yılın Müzesi ödülüne aday gösterilmiştir.",
        ],
      },
    },
    {
      id: "aspendos",
      name: "Aspendos Antik Tiyatrosu",
      shortDescription: "Roma döneminin en iyi korunmuş tiyatrosu; hâlâ opera ve konserlere ev sahipliği yapar.",
      rating: 4.9,
      address: "Sarıabalı, Aspendos, Serik/Antalya",
      image: "https://images.unsplash.com/photo-1555992336-fb0d3f8fc4c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Aspendos+Theatre",
      story: {
        history:
          "MS 2. yüzyılda İmparator Marcus Aurelius döneminde inşa edildi. Mimar Zenon, kenti su kemerleriyle de ünlü Pamfilya kentinin eseridir.",
        culturalSignificance:
          "Aspendos Uluslararası Opera ve Bale Festivali'nin mekânı; antik ve çağdaş sanatın buluştuğu alandır.",
        architecture:
          "Yarım daire planlı cavea, 41 sıralı oturma ve mükemmel akustik taş kemerli yapısı Roma tiyatro mimarisinin şaheseridir.",
        interestingFacts: [
          "15.000 kişilik kapasiteye sahiptir.",
          "Sahne binası (skene) büyük ölçüde ayaktadır.",
          "Yakınındaki su kemerleri fotoğraf turunun parçasıdır.",
        ],
      },
    },
    {
      id: "konyaalti-plaji",
      name: "Konyaaltı Plajı",
      shortDescription: "Beydağları manzaralı uzun kum-çakıl plaj ve yürüyüş parkuru.",
      rating: 4.6,
      address: "Konyaaltı, Antalya",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Konyaalti+Beach+Antalya",
      story: {
        history:
          "Antik dönemden beri yerleşimin batı sınırında olan sahil, 20. yüzyılda şehirleşmeyle birlikte halk plajına dönüştü.",
        culturalSignificance:
          "Yerel halkın ve turistlerin günlük yaşamında merkezî plaj; maraton ve spor etkinliklerinin rotasıdır.",
        architecture:
          "Modern sahil bandı, bisiklet yolu, parklar ve aquaparklarla düzenlenmiş kentsel sahil mimarisi sunar.",
        interestingFacts: [
          "Plaj uzunluğu 7 kilometreyi aşar.",
          "Arka planda 3000 metreye yakın Beydağları görünür.",
          "Akşamüstü gün batımı manzarası ünlüdür.",
        ],
      },
    },
  ],
  restaurants: [
    {
      id: "7-mehmet",
      name: "7 Mehmet",
      rating: 4.8,
      cuisine: "Kebap / Izgara",
      address: "Konyaaltı, Antalya",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=7+Mehmet+Antalya",
      website: "https://www.7mehmet.com",
    },
    {
      id: "vanilla-lounge",
      name: "Vanilla Lounge",
      rating: 4.7,
      cuisine: "Uluslararası / Fine Dining",
      address: "Kaleiçi, Antalya",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Vanilla+Lounge+Antalya",
    },
    {
      id: "seraser",
      name: "Seraser Fine Dining",
      rating: 4.8,
      cuisine: "Akdeniz / Türk",
      address: "Kaleiçi, Antalya",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Seraser+Antalya",
      website: "https://www.seraser.com.tr",
    },
    {
      id: "big-yellow",
      name: "Big Yellow Taxi Benzin Cafe",
      rating: 4.6,
      cuisine: "Kahvaltı / Kafe",
      address: "Kaleiçi, Antalya",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Big+Yellow+Taxi+Antalya",
    },
  ],
  hotels: [
    {
      id: "rixos-downtown",
      name: "Rixos Downtown Antalya",
      stars: 5,
      rating: 4.8,
      address: "Sakıp Sabancı Bulvarı, Muratpaşa/Antalya",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Rixos+Downtown+Antalya",
      bookingUrl: "https://www.booking.com/hotel/tr/rixos-downtown-antalya.html",
    },
    {
      id: "titanic-mardan",
      name: "Titanic Mardan Palace",
      stars: 5,
      rating: 4.7,
      address: "Lara, Antalya",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Titanic+Mardan+Palace",
      bookingUrl: "https://www.booking.com/hotel/tr/titanic-mardan-palace.html",
    },
    {
      id: "alp-pasa",
      name: "Alp Pasa Hotel",
      stars: 4,
      rating: 4.6,
      address: "Kaleiçi, Antalya",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Alp+Pasa+Hotel+Antalya",
      bookingUrl: "https://www.booking.com/hotel/tr/alp-pasa-hotel.html",
    },
    {
      id: "dogan-hotel",
      name: "Doğan Hotel",
      stars: 3,
      rating: 4.5,
      address: "Kaleiçi, Antalya",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Dogan+Hotel+Antalya",
      bookingUrl: "https://www.booking.com/hotel/tr/dogan-hotel-antalya.html",
    },
  ],
  packingList: getPackingForCity([
    {
      id: "reef-shoes-antalya",
      name: "Deniz Ayakkabısı",
      description: "Konyaaltı ve antik kent gezilerinde kayalık ve çakıllı zemin için.",
      icon: "footprints",
      seasons: ["summer", "spring", "autumn"],
      essential: false,
    },
    {
      id: "snorkel-antalya",
      name: "Şnorkel Seti",
      description: "Turkuaz sularda yüzey altı keşfi için maske ve palet.",
      icon: "waves",
      seasons: ["summer"],
      essential: false,
    },
  ]),
};
