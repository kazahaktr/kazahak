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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'KazaHak Hasar Danışmanlık',
  description: 'Kazahak, trafik kazaları sonrası araç değer kaybı, maddi hasar ve yaralanmalı trafik kazalarından kaynaklanan tazminat süreçlerinde profesyonel danışmanlık hizmeti sunmaktadır. Türkiye genelinde hizmet.',
  url: 'https://kazahak.com',
  telephone: '+905553287509',
  email: 'info@kazahak.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Antalya',
    addressRegion: 'Antalya',
    addressCountry: 'TR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 36.8969, longitude: 30.7133 },
  openingHours: 'Mo-Su 09:00-21:00',
  priceRange: '₺₺',
  serviceArea: {
    '@type': 'Country',
    name: 'Türkiye',
  },
  areaServed: 'TR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hizmetler',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Araç Değer Kaybı Hesaplama', description: 'Ücretsiz araç değer kaybı hesaplama — Türkiye geneli' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trafik Kazası Danışmanlığı', description: 'Maddi ve yaralanmalı kaza tazminat danışmanlığı' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sigorta Tazminat Takibi', description: 'Sigorta şirketiyle müzakere ve takip' } },
    ],
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
