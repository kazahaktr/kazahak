import Link from 'next/link'

const WA = '905553287509'
const WA_MSG = encodeURIComponent('Merhaba, değer kaybı konusunda bilgi almak istiyorum.')

const LINKS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/deger-kaybi-hesaplama', label: 'Değer Kaybı Hesapla' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/blog', label: 'Blog' },
  { href: '/danisma', label: 'Ücretsiz Danışma' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-display text-xl font-bold mb-2">
              kazahak<span className="text-brand">.com.tr</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Kaza sonrası değer kaybı ve hasar danışmanlığı. Türkiye genelinde hizmet.
            </p>
          </div>
          <div>
            <div className="font-bold text-sm mb-4 text-white/70">Sayfalar</div>
            <ul className="space-y-2">
              {LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/45 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold text-sm mb-4 text-white/70">İletişim</div>
            <div className="space-y-2 text-sm text-white/45">
              <p>
                📸{' '}
                <a href="https://instagram.com/kazahak" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  @kazahak
                </a>
              </p>
              <p>
                💬{' '}
                <a href={`https://wa.me/${WA}?text=${WA_MSG}`} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  +90 555 328 75 09 — WhatsApp
                </a>
              </p>
              <p>
                ✉️{' '}
                <a href="mailto:info@kazahak.com.tr" className="hover:text-white transition-colors">
                  info@kazahak.com.tr
                </a>
              </p>
              <p>📍 Antalya — Türkiye geneli</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-xs text-white/25 space-y-1">
          <p>© 2023-2026 Hasar Danışmanlık. Tüm hakları saklıdır.</p>
          <p>By <span className="text-white/40">Sirius Group AI &amp; Technology Co. Ltd.</span></p>
          <p>Bu site hukuki tavsiye vermez; bilgilendirme ve yönlendirme amaçlıdır.</p>
        </div>
      </div>
    </footer>
  )
}
