# hasardanismanlik.com.tr

Değer kaybı ve hasar danışmanlığı web sitesi.

## Hızlı Kurulum

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Ortam değişkenlerini ayarla
cp .env.local.example .env.local
# .env.local dosyasını düzenle

# 3. Geliştirme sunucusunu başlat
npm run dev
```

## .env.local Ayarları

| Değişken | Açıklama |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase proje URL'i |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (sadece server) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID (G-XXXXXXXXXX) |
| `NEXT_PUBLIC_WA_NUMBER` | WhatsApp numarası (905XXXXXXXXX formatında) |

## Supabase Kurulumu

1. supabase.com'da proje oluştur
2. `supabase/migration.sql` içeriğini SQL Editor'a yapıştır ve çalıştır
3. Settings > API'den URL ve Key'leri kopyala

## Google Analytics

1. analytics.google.com'da GA4 property oluştur
2. G-XXXXXXXXXX formatındaki ID'yi `.env.local`'a ekle
3. İleride event tracking için `lib/analytics.ts` dosyası oluşturabilirsiniz

## Instagram: @hasardanismanlik

Bio: "🔍 Kaza geçirdiysen değer kaybın var | Ücretsiz hesapla → hasardanismanlik.com.tr | DM'den yaz"

## Deployment (Vercel)

```bash
npx vercel
# Environment variables'ı Vercel dashboard'a ekle
```

## Dosya Yapısı

```
app/
  page.tsx                    → Ana sayfa
  deger-kaybi-hesaplama/     → ⭐ Hesaplama sayfası (SEO merkezi)
  blog/                      → Blog listesi + detay
  hizmetler/                 → Hizmetler
  danisma/                   → Ücretsiz danışma formu
  api/leads/                 → Lead kaydetme API
components/
  Calculator.tsx             → ⭐ Ana hesaplama komponenti
  Header.tsx / Footer.tsx
  WhatsAppButton.tsx
  GoogleAnalytics.tsx
lib/
  calc.ts                    → Hesaplama motoru
  supabase.ts                → DB client
data/
  blog-posts.ts              → Blog içerikleri (statik)
supabase/
  migration.sql              → DB şeması
```
