import type { City } from "@/lib/types";
import { getPackingForCity } from "../packing-common";

export const eskisehir: City = {
  id: "eskisehir",
  slug: "eskisehir",
  name: "Eskişehir",
  region: "İç Anadolu",
  description:
    "Gençlik ve sanat şehri; Odunpazarı evleri, Porsuk Çayı gondolları, Sazova ve canlı kafe kültürüyle Türkiye'nin en yaşanabilir şehirlerinden biri.",
  image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80",
  heroImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1600&q=80",
  coordinates: { lat: 39.7767, lng: 30.5206 },
  climate: "Karasal step; yazlar sıcak, kışlar soğuk ve kar yağışlı",
  bestSeason: "İlkbahar, Yaz ve Sonbahar",
  tags: ["öğrenci", "sanat", "odunpazarı", "porsuk"],
  attractions: [
    {
      id: "odunpazari",
      name: "Odunpazarı Evleri",
      shortDescription: "UNESCO adayı Osmanlı evleri; Lületaşı Müzesi ve dar sokaklar.",
      rating: 4.8,
      address: "Odunpazarı, Eskişehir",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Odunpazari+Eskisehir",
      story: {
        history:
          "Osmanlı döneminde odun ticaretinin yapıldığı mahalle, 19. yüzyıl konakları ve camileriyle korunmuş bir açık hava müzesi niteliğindedir.",
        culturalSignificance:
          "Eskişehir'in turistik kalbi; Odunpazarı Modern Müze (OMM) ile sanat ve tarih bir arada sunulur.",
        architecture:
          "İki-üç katlı ahşap-cumbalı evler, kiremit çatılar ve taş sokaklar tipik Anadolu kent mimarisini yansıtır.",
        interestingFacts: [
          "OMM dünya çapında çağdaş sanat koleksiyonu barındırır.",
          "Lületaşı Müzesi mahalle içindedir.",
          "Gece aydınlatmasıyla sokaklar masalsı görünür.",
        ],
      },
    },
    {
      id: "porsuk-cayi",
      name: "Porsuk Çayı ve Adalar",
      shortDescription: "Gondol ve tekne turları; kafe ve restoranlarla kıyı şeridi.",
      rating: 4.7,
      address: "Adalar, Tepebaşı/Eskişehir",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Porsuk+Creek+Eskisehir",
      story: {
        history:
          "Şehrin ortasından geçen Porsuk, 2000'lerde düzenlenen kıyı projesi ve adalarla Eskişehir'in simgesi haline geldi.",
        culturalSignificance:
          "Venice benzetmesiyle anılan gondol turları; öğrenci ve ailelerin buluşma noktasıdır.",
        architecture:
          "Köprüler, yürüyüş yolları, çeşmeler ve kafe terasları modern kentsel peyzaj tasarımı sunar.",
        interestingFacts: [
          "Gondol turları yıl boyu yapılır.",
          "Kışın çay kenarı buz pisti kurulabilir.",
          "Adalar bölgesinde canlı müzik mekânları yoğundur.",
        ],
      },
    },
    {
      id: "sazova",
      name: "Sazova Bilim Sanat ve Kültür Parkı",
      shortDescription: "Masal Kalesi, hayvanat bahçesi ve bilim merkeziyle aile parkı.",
      rating: 4.6,
      address: "Sazova, Tepebaşı/Eskişehir",
      image: "https://images.unsplash.com/photo-1486325212027-8081b485255e?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Sazova+Park+Eskisehir",
      story: {
        history:
          "2008'de açılan park, Eskişehir Büyükşehir Belediyesi'nin kentsel dönüşüm ve yaşam kalitesi projelerinin parçasıdır.",
        culturalSignificance:
          "Aile turizmi ve eğitim turizminin merkezi; şehrin 'yaşanabilirlik' imajının sembolüdür.",
        architecture:
          "Masal Kalesi, Su Altı Sarayı ve ETİ Bilim Merkezi farklı tematik yapılarla parkı zenginleştirir.",
        interestingFacts: [
          "Masal Kalesi çocukların favori fotoğraf noktasıdır.",
          "Park ücretsiz girişlidir; bazı bölümler ücretlidir.",
          "Yaz akşamları ışık gösterileri düzenlenir.",
        ],
      },
    },
    {
      id: "atlihan",
      name: "Atlıhan El Sanatları Çarşısı",
      shortDescription: "Restore edilmiş han; el sanatları, kahve ve hediyelik eşya.",
      rating: 4.5,
      address: "Odunpazarı, Eskişehir",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Atlihan+Eskisehir",
      story: {
        history:
          "Osmanlı hanı 2000'lerde restore edilerek el sanatları ve kafe çarşısına dönüştürüldü.",
        culturalSignificance:
          "Yerel zanaat ve turistik alışverişin Odunpazarı'daki merkezidir.",
        architecture:
          "İki katlı revaklı avlu, ahşap detaylar ve geleneksel han planı korunmuştur.",
        interestingFacts: [
          "Lületaşı ve gümüş takı atölyeleri bulunur.",
          "Avluda Türk kahvesi içmek gelenektir.",
          "Odunpazarı yürüyüş rotasının ortasındadır.",
        ],
      },
    },
    {
      id: "kurşunlu-kulliye",
      name: "Kurşunlu Külliyesi ve Camii",
      shortDescription: "16. yüzyıl Osmanlı külliyesi; şehrin en eski dini yapılarından.",
      rating: 4.6,
      address: "Kurşunlu, Odunpazarı/Eskişehir",
      image: "https://images.unsplash.com/photo-1591604466104-6b2a3f0c4b0a?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kursunlu+Mosque+Eskisehir",
      story: {
        history:
          "1525'te Mimar Acem Ali tarafından inşa edilen külliye, Eskişehir'in Osmanlı dönemindeki önemini gösterir.",
        culturalSignificance:
          "Odunpazarı'nın tarihî omurgası; cami, medrese ve aşevi bir arada külliye düzenindedir.",
        architecture:
          "Kurşunlu kubbe, tek minare ve taş işçiliği klasik Osmanlı cami mimarisinin örneğidir.",
        interestingFacts: [
          "Adını kurşun kaplı kubbeden alır.",
          "Çevresindeki mezarlık tarihî kitabeler içerir.",
          "Odunpazarı evlerine yürüme mesafesindedir.",
        ],
      },
    },
  ],
  restaurants: [
    {
      id: "cagdas-borek",
      name: "Çağdaş Börek",
      rating: 4.8,
      cuisine: "Börek / Eskişehir",
      address: "Odunpazarı, Eskişehir",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Cagdas+Borek+Eskisehir",
    },
    {
      id: "sakiz-adasi",
      name: "Sakız Adası",
      rating: 4.7,
      cuisine: "Kafe / Dünya Mutfağı",
      address: "Adalar, Eskişehir",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Sakiz+Adasi+Eskisehir",
    },
    {
      id: "konak-restaurant",
      name: "Konak Restaurant",
      rating: 4.6,
      cuisine: "Türk / Et",
      address: "Tepebaşı, Eskişehir",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Konak+Restaurant+Eskisehir",
    },
    {
      id: "balik-hane",
      name: "Balık Hane",
      rating: 4.5,
      cuisine: "Balık / Meze",
      address: "Porsuk kıyısı, Eskişehir",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Balik+Hane+Eskisehir",
    },
  ],
  hotels: [
    {
      id: "radisson-eskisehir",
      name: "Radisson Blu Hotel Eskişehir",
      stars: 4,
      rating: 4.6,
      address: "Tepebaşı, Eskişehir",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Radisson+Blu+Eskisehir",
      bookingUrl: "https://www.booking.com/hotel/tr/radisson-blu-eskisehir.html",
    },
    {
      id: "merkez-otel",
      name: "Merkez Otel",
      stars: 3,
      rating: 4.4,
      address: "Odunpazarı, Eskişehir",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Merkez+Otel+Eskisehir",
      bookingUrl: "https://www.booking.com/hotel/tr/merkez-otel-eskisehir.html",
    },
    {
      id: "anemon-eskisehir",
      name: "Anemon Eskişehir",
      stars: 4,
      rating: 4.5,
      address: "Tepebaşı, Eskişehir",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Anemon+Eskisehir",
      bookingUrl: "https://www.booking.com/hotel/tr/anemon-eskisehir.html",
    },
    {
      id: "voyage-eskisehir",
      name: "Voyage Hotel Eskişehir",
      stars: 5,
      rating: 4.7,
      address: "Tepebaşı, Eskişehir",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Voyage+Hotel+Eskisehir",
      bookingUrl: "https://www.booking.com/hotel/tr/voyage-eskisehir.html",
    },
  ],
  packingList: getPackingForCity([
    {
      id: "bike-eskisehir",
      name: "Bisiklet veya Scooter Kiralama Notu",
      description: "Şehir bisiklet yolları ve Porsuk çevresi için pratik ulaşım.",
      icon: "bike",
      seasons: ["spring", "summer", "autumn"],
      essential: false,
    },
    {
      id: "scarf-eskisehir",
      name: "Hafif Atkı",
      description: "Akşam Porsuk kıyısında serinleyen havaya karşı.",
      icon: "shirt",
      seasons: ["autumn", "spring", "winter"],
      essential: false,
    },
  ]),
};
