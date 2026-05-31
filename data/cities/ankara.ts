import type { City } from "@/lib/types";
import { getPackingForCity } from "../packing-common";

export const ankara: City = {
  id: "ankara",
  slug: "ankara",
  name: "Ankara",
  region: "İç Anadolu",
  description:
    "Türkiye Cumhuriyeti'nin başkenti; Anıtkabir, müzeleri, devlet kurumları ve canlı üniversite hayatıyla modern ve tarihi dokunun buluştuğu bir metropol.",
  image: "https://images.unsplash.com/photo-1585208798170-536c316793c?w=800&q=80",
  heroImage: "https://images.unsplash.com/photo-1585208798170-536c316793c?w=1600&q=80",
  coordinates: { lat: 39.9334, lng: 32.8597 },
  climate: "Karasal iklim; yazlar sıcak ve kurak, kışlar soğuk ve kar yağışlı",
  bestSeason: "İlkbahar ve Sonbahar",
  tags: ["başkent", "tarih", "müze", "Anıtkabir"],
  attractions: [
    {
      id: "anitkabir",
      name: "Anıtkabir",
      shortDescription: "Ulu Önder Mustafa Kemal Atatürk'ün ebedi istirahatgahı ve Türkiye'nin en anlamlı anıtı.",
      rating: 4.9,
      address: "Anıttepe, Akdeniz Cd., Çankaya/Ankara",
      image: "https://images.unsplash.com/photo-1585208798170-536c316793c?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Anitkabir+Ankara",
      story: {
        history:
          "1944'te inşaatına başlanan Anıtkabir, 1953'te Atatürk'ün naaşının nakledildiği törenle tam anlamıyla ulusal bir sembol haline geldi. Mimarlar Emin Onat ve Orhan Arda'nın eseri olan yapı, Cumhuriyet'in ideallerini taşır.",
        culturalSignificance:
          "Türk milletinin bağımsızlık ve çağdaşlaşma mücadelesinin simgesidir. 10 Kasım ve 29 Ekim törenlerinin merkezidir; yabancı devlet adamlarının ilk ziyaret noktasıdır.",
        architecture:
          "Hitit, Selçuklu ve Osmanlı motiflerini birleştiren millî mimari anlayışıyla tasarlanmıştır. Aslanlı Yol, tören meydanı ve Mozole kompleksi simetrik bir aks üzerinde yükselir.",
        interestingFacts: [
          "Kompleks 750.000 metrekarelik ormanlık alan üzerindedir.",
          "Mozolede Atatürk'ün naaşından yalnızca toprağı değil, bizzat naaşı bulunur.",
          "Her gün saat 09.00'da Aslanlı Yol'da nöbet değişimi yapılır.",
        ],
      },
    },
    {
      id: "anadolu-medeniyetleri",
      name: "Anadolu Medeniyetleri Müzesi",
      shortDescription: "Dünyanın en önemli arkeoloji müzelerinden biri; Paleolitik çağdan Osmanlı'ya uzanan koleksiyon.",
      rating: 4.8,
      address: "Kale, Gözcü Sk., Altındağ/Ankara",
      image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Anatolian+Civilizations+Museum+Ankara",
      story: {
        history:
          "1921'de Ankara Kalesi'nin eteklerinde kurulan müze, 1938'de bugünkü binasına taşındı. Çatalhöyük, Alacahöyük ve Gordion buluntuları koleksiyonun temelini oluşturur.",
        culturalSignificance:
          "Avrupa Yılın Müzesi ödülü almış; Anadolu'nun binlerce yıllık medeniyet zincirini tek çatı altında anlatır.",
        architecture:
          "15. yüzyıl Mahmut Paşa Bedesteni ve Kurşunlu Han'ın restore edilmesiyle oluşturulmuş çok yapılı bir müze kompleksidir.",
        interestingFacts: [
          "Çatalhöyük duvar resimleri müzenin en çok ilgi gören bölümüdür.",
          "Frigya dönemine ait Gordion mücevherleri burada sergilenir.",
          "Hitit güneş kursu müzenin simge eserlerindendir.",
        ],
      },
    },
    {
      id: "kocatepe-camii",
      name: "Kocatepe Camii",
      shortDescription: "Ankara siluetinin simgesi; dört minareli devasa modern cami kompleksi.",
      rating: 4.7,
      address: "Kocatepe, Cinnah Cd., Çankaya/Ankara",
      image: "https://images.unsplash.com/photo-1591604466104-6b2a3f0c4b0a?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Kocatepe+Mosque+Ankara",
      story: {
        history:
          "1967'de temeli atılan cami, uzun tartışmalar ve ara vermeler sonrası 1987'de ibadete açıldı. Hüsrev Tayla ve Fatin Uluengin'in tasarımıdır.",
        culturalSignificance:
          "Cumhuriyet döneminde inşa edilen en büyük camilerden biri olarak başkentin dini ve sosyal yaşamında merkezî bir rol oynar.",
        architecture:
          "Klasik Osmanlı cami üslubunu çağdaş ölçekle yorumlar; kubbe, son cemaat yeri ve geniş avlu düzeni Selimiye'den esinlenir.",
        interestingFacts: [
          "24.000 kişilik ibadet kapasitesine sahiptir.",
          "Alt katında kongre salonu ve otopark bulunur.",
          "Gece aydınlatmasıyla şehrin her yerinden görülebilir.",
        ],
      },
    },
    {
      id: "hamamonu",
      name: "Hamamönü",
      shortDescription: "Restore edilmiş Osmanlı konakları, sokak sanatı ve el sanatlarıyla nostaljik mahalle.",
      rating: 4.6,
      address: "Hamamönü, Altındağ/Ankara",
      image: "https://images.unsplash.com/photo-1528183429752-a11d0b50d880?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Hamamonu+Ankara",
      story: {
        history:
          "Ankara Kalesi'nin güney eteğindeki tarihî yerleşim, 2000'li yıllarda kentsel dönüşümle turistik bir cazibe merkezine dönüştürüldü.",
        culturalSignificance:
          "Başkentin Osmanlı ve erken Cumhuriyet dönemi sokak dokusunu yaşatan en popüler yürüyüş rotasıdır.",
        architecture:
          "Ahşap cumba detaylı konaklar, taş döşeli sokaklar ve Karacabey Hamamı çevresindeki kentsel peyzaj dikkat çeker.",
        interestingFacts: [
          "Mehmet Akif Ersoy'un İstiklal Marşı'nı yazdığı ev burada sergilenir.",
          "Hafta sonları sokak müzisyenleri ve sanatçılar etkinlik düzenler.",
          "Geleneksel Ankara simidi ve lokum dükkanları yoğundur.",
        ],
      },
    },
    {
      id: "atakule",
      name: "Atakule",
      shortDescription: "1989'dan beri başkentin panoramik seyir kulesi ve alışveriş merkezi.",
      rating: 4.5,
      address: "Çankaya, Atakule, Çankaya/Ankara",
      image: "https://images.unsplash.com/photo-1486325212027-8081b485255e?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Atakule+Ankara",
      story: {
        history:
          "1989'da açılan Atakule, Ankara'nın ilk modern gökdelen ve seyir kulesi olarak inşa edildi. Şehir planlamasında Çankaya'nın simgesi haline geldi.",
        culturalSignificance:
          "Başkentin modern yüzünü temsil eder; dönen restoran ve seyir terası şehir manzarası için klasik duraktır.",
        architecture:
          "Silindirik betonarme gövde ve üstteki küre formuyla fütüristik bir siluet sunar; 125 metre yüksekliğindedir.",
        interestingFacts: [
          "Seyir terası 360 derece Ankara manzarası sunar.",
          "Dönen restoran bir turda yaklaşık 1,5 saatte tam döner.",
          "Çevresindeki park ve AVM ile birlikte sosyal yaşam merkezidir.",
        ],
      },
    },
  ],
  restaurants: [
    {
      id: "trilye-ankara",
      name: "Trilye Restaurant",
      rating: 4.8,
      cuisine: "Deniz Ürünleri / Türk",
      address: "Kavaklıdere, Tunus Cd., Çankaya/Ankara",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Trilye+Restaurant+Ankara",
      website: "https://www.trilyerestaurant.com",
    },
    {
      id: "zenger-pasa",
      name: "Zenger Paşa Konağı",
      rating: 4.7,
      cuisine: "Osmanlı / Anadolu Mutfağı",
      address: "Hamamönü, Altındağ/Ankara",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Zenger+Pasa+Konagi+Ankara",
    },
    {
      id: "kizilay-kebap",
      name: "Hacı Arif Bey",
      rating: 4.6,
      cuisine: "Kebap / Döner",
      address: "Kızılay, Atatürk Bulvarı, Çankaya/Ankara",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Haci+Arif+Bey+Ankara",
    },
    {
      id: "vie-champagne",
      name: "Vie Champagne",
      rating: 4.7,
      cuisine: "Fransız / Fine Dining",
      address: "Çankaya, Park Caddesi, Çankaya/Ankara",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Vie+Champagne+Ankara",
      website: "https://www.viechampagne.com.tr",
    },
  ],
  hotels: [
    {
      id: "sheraton-ankara",
      name: "Sheraton Ankara Hotel & Convention Center",
      stars: 5,
      rating: 4.8,
      address: "Kavaklıdere, Şehit Muhtar Cd., Çankaya/Ankara",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Sheraton+Ankara",
      bookingUrl: "https://www.booking.com/hotel/tr/sheraton-ankara.html",
    },
    {
      id: "hilton-ankara",
      name: "Hilton Ankara",
      stars: 5,
      rating: 4.7,
      address: "Kavaklıdere, Tahran Cd., Çankaya/Ankara",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Hilton+Ankara",
      bookingUrl: "https://www.booking.com/hotel/tr/hilton-ankara.html",
    },
    {
      id: "divan-ankara",
      name: "Divan Ankara",
      stars: 5,
      rating: 4.6,
      address: "Kavaklıdere, Yaşam Cd., Çankaya/Ankara",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Divan+Ankara",
      bookingUrl: "https://www.booking.com/hotel/tr/divan-ankara.html",
    },
    {
      id: "moevenpick-ankara",
      name: "Mövenpick Ankara",
      stars: 4,
      rating: 4.5,
      address: "Kavaklıdere, Yaşam Cd., Çankaya/Ankara",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      mapsUrl: "https://maps.google.com/?q=Movenpick+Ankara",
      bookingUrl: "https://www.booking.com/hotel/tr/movenpick-ankara.html",
    },
  ],
  packingList: getPackingForCity([
    {
      id: "warm-layers-ankara",
      name: "Katmanlı Kışlık Giyim",
      description: "Başkentte akşamları ve kışın sert soğuğa karşı termal içlik ve mont.",
      icon: "shirt",
      seasons: ["autumn", "winter", "spring"],
      essential: true,
    },
    {
      id: "museum-pass-ankara",
      name: "Müze Kartı",
      description: "Anadolu Medeniyetleri ve diğer müzelerde indirimli giriş için.",
      icon: "ticket",
      seasons: ["spring", "summer", "autumn", "winter"],
      essential: false,
    },
  ]),
};
