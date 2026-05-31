import type { City } from "@/lib/types";
import { getPackingForCity } from "../packing-common";

export const gaziantep: City = {
  id: "gaziantep",
  slug: "gaziantep",
  name: "Gaziantep",
  region: "Güneydoğu Anadolu",
  description:
    "UNESCO Gastronomi Şehri; baklava, kebap, Zeugma mozaikleri ve bakırcılar çarşısıyla Güneydoğu'nun lezzet ve kültür başkenti.",
  image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
  heroImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80",
  coordinates: { lat: 37.0662, lng: 37.3833 },
  climate: "Yarı kurak; yazlar çok sıcak, kışlar ılıman",
  bestSeason: "İlkbahar ve Sonbahar",
  tags: ["gastronomi", "baklava", "mozaik", "zeugma"],
  attractions: [
    {
      id: "zeugma-muzesi",
      name: "Zeugma Mozaik Müzesi",
      shortDescription: "Dünyanın en büyük mozaik müzelerinden biri; Çingene Kızı mozaiği.",
      rating: 4.9,
      address: "Mithatpaşa, Zeugma Mozaik Müzesi, Şehitkamil/Gaziantep",
      image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Zeugma+Mosaic+Museum",
      story: {
        history:
          "Antik Zeugma kentinden Birecik Barajı suları öncesi kurtarılan mozaikler, 2011'de açılan müzede sergilenmektedir. Roma dönemi villalarından gelir.",
        culturalSignificance:
          "Dünya mozaik sanatının zirvesi; Gaziantep'in kültür turizmindeki en güçlü kartıdır.",
        architecture:
          "Modern müze binası, ışık kontrollü salonlar ve akustik düzenlemeler eserleri koruyacak şekilde tasarlanmıştır.",
        interestingFacts: [
          "Çingene Kızı mozaiği müzenin simgesidir.",
          "30.000 metrekare alan üzerinde 2500'den fazla eser sergilenir.",
          "Mozaiklerin çoğu 2. yüzyıl Roma villalarındandır.",
        ],
      },
    },
    {
      id: "gaziantep-kalesi",
      name: "Gaziantep Kalesi",
      shortDescription: "Şehir merkezinde Roma ve Bizans surları; panoramik müze.",
      rating: 4.7,
      address: "Şehitkamil, Gaziantep Kalesi, Şehitkamil/Gaziantep",
      image: "https://images.unsplash.com/photo-1528183429752-a11d0b50d880?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Gaziantep+Castle",
      story: {
        history:
          "Roma döneminde temeli atılan kale, Bizans ve Osmanlı'da onarıldı. Kurtuluş Savaşı'nda direnişin simgesi oldu.",
        culturalSignificance:
          "Antep savunmasının ve şehir kimliğinin merkezinde; çevresindeki çarşılarla birlikte tarihî çekirdeği oluşturur.",
        architecture:
          "Dairesel planlı surlar, burçlar ve iç kale yapısı taş ve tuğla karışımı savunma mimarisini gösterir.",
        interestingFacts: [
          "Kale tepesinden şehir panoraması görülür.",
          "İçinde savunma ve yaşam müzesi bölümleri vardır.",
          "Gece aydınlatmasıyla görkemli bir siluet sunar.",
        ],
      },
    },
    {
      id: "bakircilar-carsisi",
      name: "Bakırcılar Çarşısı",
      shortDescription: "El işi bakır ve demir ürünler; çekiç sesleri ve geleneksel zanaat.",
      rating: 4.6,
      address: "Şehitkamil, Bakırcılar, Gaziantep",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Bakircilar+Carsisi+Gaziantep",
      story: {
        history:
          "Osmanlı'dan beri bakır dövme geleneğinin sürdüğü çarşı, Gaziantep'in ticaret ve zanaat kimliğinin kalbidir.",
        culturalSignificance:
          "UNESCO Gastronomi Şehri'nin yanında el sanatları mirasının yaşadığı mekândır.",
        architecture:
          "Taş dükkânlar, kemerli geçitler ve han yapıları geleneksel Güneydoğu çarşı dokusunu korur.",
        interestingFacts: [
          "Bakır cezve ve tepsi el yapımıdır.",
          "Çekiç sesleri çarşının karakteristik atmosferini oluşturur.",
          "Yanında baharat ve kuruyemiş dükkânları yoğundur.",
        ],
      },
    },
    {
      id: "emine-gogus",
      name: "Emine Göğüş Mutfak Müzesi",
      shortDescription: "Gaziantep mutfağının tarihî mutfak araçları ve yemek kültürü müzesi.",
      rating: 4.7,
      address: "Şehitkamil, Gaziantep",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Emine+Gogus+Culinary+Museum",
      story: {
        history:
          "2008'de açılan müze, Gaziantep'in 2015'te UNESCO Yaratıcı Şehirler Ağı'na gastronomi dalında katılmasının önemli adımlarından biridir.",
        culturalSignificance:
          "Ali Nazik, lahmacun, baklava ve katmer gibi yemeklerin kültürel bağlamını anlatır.",
        architecture:
          "Restore edilmiş Antep evinde geleneksel mutfak, taş fırın ve sergi salonları düzenlenmiştir.",
        interestingFacts: [
          "Müzede canlı yemek atölyeleri düzenlenir.",
          "Geleneksel taş fırın hâlâ kullanılmaktadır.",
          "Gastronomi turunun ilk durağıdır.",
        ],
      },
    },
    {
      id: "yesemek",
      name: "Yesemek Açık Hava Müzesi",
      shortDescription: "Hitit dönemi taş ocağı ve heykel atölyesi; antik sanat üretim merkezi.",
      rating: 4.5,
      address: "İslahiye, Gaziantep",
      image: "https://images.unsplash.com/photo-1555992336-fb0d3f8fc4c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Yesemek+Open+Air+Museum",
      story: {
        history:
          "MÖ 2. bin yılda Hititlerin heykel ürettiği taş ocağı; yarı mamul aslan ve kabartmalar günümüze ulaştı.",
        culturalSignificance:
          "Anadolu'nun en eski açık hava atölyelerinden; UNESCO geçici listesindedir.",
        architecture:
          "Doğal kayalık platform üzerinde oyulmuş heykeller ve üretim izleri açık havada sergilenir.",
        interestingFacts: [
          "Şehir merkezine 45 km uzaklıktadır.",
          "Yarı bitmiş heykeller üretim sürecini gösterir.",
          "Hitit sanat tarihi için eşsiz bir kaynaktır.",
        ],
      },
    },
  ],
  restaurants: [
    {
      id: "imam-cagdas",
      name: "İmam Çağdaş",
      rating: 4.9,
      cuisine: "Baklava / Antep Mutfağı",
      address: "Şehitkamil, Gaziantep",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Imam+Cagdas+Gaziantep",
      website: "https://www.imamcagdas.com",
    },
    {
      id: "metanet-lokantasi",
      name: "Metanet Lokantası",
      rating: 4.8,
      cuisine: "Yöresel / Ali Nazik",
      address: "Şahinbey, Gaziantep",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Metanet+Lokantasi+Gaziantep",
    },
    {
      id: "kebapci-halil",
      name: "Kebapçı Halil Usta",
      rating: 4.8,
      cuisine: "Kebap / Antep",
      address: "Şehitkamil, Gaziantep",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kebapci+Halil+Usta+Gaziantep",
    },
    {
      id: "sahan",
      name: "Sahan Restaurant",
      rating: 4.7,
      cuisine: "Güneydoğu / Ev Yemekleri",
      address: "Şahinbey, Gaziantep",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Sahan+Restaurant+Gaziantep",
    },
  ],
  hotels: [
    {
      id: "tugcan",
      name: "Tugcan Hotel",
      stars: 5,
      rating: 4.7,
      address: "Şehitkamil, Gaziantep",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Tugcan+Hotel+Gaziantep",
      bookingUrl: "https://www.booking.com/hotel/tr/tugcan-hotel.html",
    },
    {
      id: "sirehan",
      name: "Sirehan Boutique Hotel",
      stars: 4,
      rating: 4.8,
      address: "Şahinbey, Gaziantep",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Sirehan+Boutique+Hotel",
      bookingUrl: "https://www.booking.com/hotel/tr/sirehan-boutique-hotel.html",
    },
    {
      id: "asude-konak",
      name: "Asude Konak",
      stars: 4,
      rating: 4.6,
      address: "Şahinbey, Gaziantep",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Asude+Konak+Gaziantep",
      bookingUrl: "https://www.booking.com/hotel/tr/asude-konak.html",
    },
    {
      id: "kale-boutique",
      name: "Kale Boutique Hotel",
      stars: 3,
      rating: 4.5,
      address: "Şehitkamil, Gaziantep",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kale+Boutique+Hotel+Gaziantep",
      bookingUrl: "https://www.booking.com/hotel/tr/kale-boutique-gaziantep.html",
    },
  ],
  packingList: getPackingForCity([
    {
      id: "cool-clothes-gaziantep",
      name: "Hafif ve Nefes Alan Kıyafet",
      description: "Yazın 40°C'ye çıkan sıcakta gezmek için ince kumaşlar.",
      icon: "sun",
      seasons: ["summer", "spring"],
      essential: true,
    },
  ]),
};
