import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import AvatarVideo from '@/components/AvatarVideo'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-slate-100 text-slate-800 antialiased">
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <AvatarVideo />
      </body>
    </html>
  )
}
