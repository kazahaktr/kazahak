import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import AvatarVideo from '@/components/AvatarVideo'
import ChatBot from '@/components/ChatBot'
import CookieConsent from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: {
    default: 'Araç Değer Kaybı Hesaplama | KazaHak',
    template: '%s | KazaHak',
  },
  description: 'Kazahak, trafik kazaları sonrası araç değer kaybı, maddi hasar ve yaralanmalı trafik kazalarından kaynaklanan tazminat süreçlerinde profesyonel danışmanlık hizmeti sunmaktadır. Türkiye\'nin 81 ilinde uzaktan danışmanlık.',
  keywords: 'değer kaybı, değer kaybı hesaplama, hasar danışmanlığı, kaza tazminatı, araç değer kaybı, trafik kazası tazminatı, yaralanmalı kaza tazminatı, Türkiye',
  metadataBase: new URL('https://kazahak.com'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://kazahak.com',
    siteName: 'KazaHak',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'LocalBusiness'],
    name: 'KazaHak Hasar Danışmanlık',
    description: 'Trafik kazaları sonrası araç değer kaybı, maddi hasar ve tazminat süreçlerinde profesyonel danışmanlık. Türkiye genelinde hizmet.',
    url: 'https://kazahak.com',
    telephone: '+905553287509',
    email: 'info@kazahak.com',
    logo: 'https://kazahak.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Antalya',
      addressRegion: 'Antalya',
      addressCountry: 'TR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 36.8969, longitude: 30.7133 },
    openingHours: 'Mo-Su 09:00-21:00',
    priceRange: '₺₺',
    serviceArea: { '@type': 'Country', name: 'Türkiye' },
    areaServed: 'TR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hizmetler',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'LegalService', name: 'Araç Değer Kaybı Danışmanlığı' } },
        { '@type': 'Offer', itemOffered: { '@type': 'LegalService', name: 'Trafik Kazası Tazminat Danışmanlığı' } },
        { '@type': 'Offer', itemOffered: { '@type': 'LegalService', name: 'Sigorta Tahkim Başvurusu' } },
      ],
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
    review: [
      { '@type': 'Review', author: { '@type': 'Person', name: 'Mehmet K.' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'KazaHak sayesinde 38.000 ₺ değer kaybı tazminatı aldım. Süreç çok profesyoneldi.' },
      { '@type': 'Review', author: { '@type': 'Person', name: 'Ayşe T.' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Sigorta şirketi ilk başta ödemeyiz dedi. Ekibin müdahalesiyle 3 haftada 52.000 ₺ ödeme yapıldı.' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KazaHak',
    url: 'https://kazahak.com',
    logo: 'https://kazahak.com/logo.png',
    sameAs: [
      'https://instagram.com/kazahak',
      'https://tiktok.com/@kazahak',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+905553287509',
      contactType: 'customer service',
      availableLanguage: 'Turkish',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Araç değer kaybı kaç günde alınır?', acceptedAnswer: { '@type': 'Answer', text: 'Sigorta şirketine başvurudan sonra 15 iş günü içinde yanıt vermesi gerekir. Tahkim yoluyla 3–4 ayda, dava yoluyla 6–12 ayda sonuç alınır.' } },
      { '@type': 'Question', name: 'Kusurlu taraf değer kaybı alabilir mi?', acceptedAnswer: { '@type': 'Answer', text: '%100 kusurlu araç sahibi değer kaybı talep edemez. Kısmi kusurda, kusursuz oranınca tazminat hakkı doğar.' } },
      { '@type': 'Question', name: 'Değer kaybı zamanaşımı süresi nedir?', acceptedAnswer: { '@type': 'Answer', text: 'Kaza tarihinden itibaren 2 yıl. Cezai dava varsa 8 yıla uzar.' } },
      { '@type': 'Question', name: 'Şirket araçları değer kaybı başvurabilir mi?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Şirket adına kayıtlı araçlar da değer kaybı talep edebilir.' } },
      { '@type': 'Question', name: 'Pert araç için tazminat alınabilir mi?', acceptedAnswer: { '@type': 'Answer', text: 'Pert araçlarda piyasa değeri tazminatı talep edilir. Teklif düşükse tahkim veya dava yoluna gidilebilir.' } },
    ],
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body className="bg-slate-100 text-slate-800 antialiased">
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <AvatarVideo />
        <ChatBot />
        <CookieConsent />
      </body>
    </html>
  )
}
