# Türkiye Seyahat Rehberi

Modern, profesyonel ve mobil uyumlu Türkiye seyahat rehberi web uygulaması.

## Özellikler

- **10 şehir**: İstanbul, Ankara, İzmir, Antalya, Bursa, Muğla, Trabzon, Nevşehir, Gaziantep, Eskişehir
- **Gezilecek yerler**: Her şehirde 5+ yer, fotoğraf, puan, adres, harita ve detaylı hikâye modalı
- **Restoranlar & Oteller**: En yüksek puanlı öneriler, harita ve rezervasyon bağlantıları
- **Seyahat listesi**: Mevsim bazlı yanınıza almanız gereken eşya önerileri
- **Arama & filtreleme**: Şehir adı, bölge ve etiket bazlı arama
- **Favoriler**: localStorage ile kalıcı favori şehirler
- **Son görüntülenenler**: Son ziyaret edilen şehirler
- **Harita entegrasyonu**: Google Maps embed
- **Koyu/Açık tema**: Sistem tercihine uyumlu tema desteği
- **SEO**: Metadata, sitemap, robots.txt, statik sayfa üretimi

## Teknolojiler

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- Lucide React

## Kurulum

```bash
cd turkiye-seyahat-rehberi
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

```
src/
├── app/                    # Next.js App Router sayfaları
│   ├── layout.tsx          # Root layout, fontlar, tema
│   ├── page.tsx            # Ana sayfa
│   ├── sehir/[slug]/       # Şehir detay sayfaları
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # SEO robots
├── components/
│   ├── city/               # Şehir detay bileşenleri
│   ├── home/               # Ana sayfa bileşenleri
│   ├── layout/             # Header, Footer
│   ├── providers/          # Theme provider
│   └── ui/                 # Paylaşılan UI bileşenleri
├── data/
│   ├── cities/             # Şehir veri dosyaları
│   └── index.ts            # Veri erişim fonksiyonları
├── hooks/                  # Custom React hooks
└── lib/                    # Tipler, sabitler, yardımcılar
```

## Netlify'ye Deploy

### Yöntem 1 — GitHub + Netlify (Önerilen, ekip paylaşımı için en iyi)

1. **GitHub'a yükleyin**
   ```bash
   cd C:\Users\asrin\turkiye-seyahat-rehberi
   git init
   git add .
   git commit -m "Türkiye Seyahat Rehberi - ilk sürüm"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADINIZ/turkiye-seyahat-rehberi.git
   git push -u origin main
   ```

2. **Netlify'ye giriş yapın** → [https://app.netlify.com](https://app.netlify.com)

3. **Add new site → Import an existing project**

4. **GitHub'ı seçin** ve repoyu bağlayın

5. Netlify ayarları otomatik algılanır (`netlify.toml` sayesinde):
   - Build command: `npm run build`
   - Plugin: `@netlify/plugin-nextjs`

6. **Deploy site** butonuna tıklayın

7. Birkaç dakika sonra `https://rastgele-isim.netlify.app` adresiniz hazır olur.
   Ekibinize bu linki gönderin.

8. *(İsteğe bağlı)* Site settings → Domain management → **Site name** değiştirerek
   `turkiye-seyahat-rehberi.netlify.app` gibi okunabilir bir URL alın.

---

### Yöntem 2 — Netlify CLI (GitHub olmadan hızlı deploy)

1. **Netlify CLI kurun**
   ```bash
   npm install -g netlify-cli
   ```

2. **Giriş yapın**
   ```bash
   netlify login
   ```

3. **Projeyi build edin**
   ```bash
   cd C:\Users\asrin\turkiye-seyahat-rehberi
   npm install
   npm run build
   ```

4. **Deploy edin**
   ```bash
   netlify init
   netlify deploy --prod
   ```

   `netlify init` sırasında "Create & configure a new site" seçin.

5. Terminalde çıkan **Production URL**'i ekibinize gönderin.

---

### Deploy sonrası

- Her `git push` yaptığınızda Netlify otomatik yeniden deploy eder.
- Site URL'ini `src/lib/constants.ts` içindeki `SITE_CONFIG.url` alanına yazarsanız SEO metadata doğru çalışır.

## Üretim

```bash
npm run build
npm start
```

## Lisans

MIT
