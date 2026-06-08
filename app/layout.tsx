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
    default: 'Değer Kaybı Hesaplama | kazahak.com.tr',
    template: '%s | Kazahak',
  },
  description: 'Kaza sonrası araç değer kaybınızı ücretsiz hesaplayın. Maddi hasar ve yaralanmalı kazalarda uzman danışmanlık. Türkiye genelinde hizmet.',
  keywords: 'değer kaybı, değer kaybı hesaplama, hasar danışmanlığı, kaza tazminatı, araç değer kaybı',
  metadataBase: new URL('https://kazahak.com.tr'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://kazahak.com.tr',
    siteName: 'Kazahak',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'KazaHak Hasar Danışmanlık',
  description: 'Kaza sonrası araç değer kaybı hesaplama ve danışmanlık hizmeti. Türkiye genelinde hizmet.',
  url: 'https://kazahak.com.tr',
  telephone: '+905553287509',
  email: 'info@kazahak.com.tr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Antalya',
    addressCountry: 'TR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 36.8969, longitude: 30.7133 },
  openingHours: 'Mo-Su 09:00-21:00',
  priceRange: '₺₺',
  serviceArea: { '@type': 'Country', name: 'Türkiye' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hizmetler',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Değer Kaybı Hesaplama', description: 'Ücretsiz araç değer kaybı hesaplama' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hasar Danışmanlığı', description: 'Kaza sonrası sigorta danışmanlığı' } },
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
