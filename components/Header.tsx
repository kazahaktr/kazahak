'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const WA = '905553287509'

const NAV = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/deger-kaybi-hesaplama', label: '⚡ Hesapla' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/blog', label: 'Blog' },
  { href: '/danisma', label: 'Danışma' },
]

function WaIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.847L0 24l6.347-1.499A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6c-1.93 0-3.733-.515-5.282-1.413l-.378-.224-3.929.928.974-3.836-.246-.394A9.555 9.555 0 012.4 12c0-5.292 4.308-9.6 9.6-9.6s9.6 4.308 9.6 9.6-4.308 9.6-9.6 9.6z"/>
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="bg-white rounded-xl p-1 flex items-center justify-center shrink-0" style={{ width: 44, height: 44 }}>
            <Image
              src="/logo.png"
              alt="KazaHak"
              width={36}
              height={36}
              className="object-contain w-9 h-9"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[20px] font-bold text-white tracking-tight">
              Kaza<span className="text-brand">Hak</span>
            </span>
            <span className="text-[9px] text-white/35 uppercase tracking-widest hidden sm:block mt-0.5">
              Hasar &amp; Değer Kaybı Danışmanlığı
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {NAV.map(n => (
            <Link key={n.href} href={n.href}
              className="text-white/65 hover:text-white text-sm font-medium transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-3 py-2 rounded-lg transition-colors">
          <WaIcon /> WhatsApp
        </a>

        <button className="lg:hidden text-white text-xl px-2" onClick={() => setOpen(!open)}
          aria-label="Menu">{open ? '✕' : '☰'}</button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0d1f3c] border-t border-white/10">
          {NAV.map(n => (
            <Link key={n.href} href={n.href}
              className="block px-5 py-3 text-white/75 hover:text-white hover:bg-white/5 text-sm border-b border-white/5"
              onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <a href={`https://wa.me/${WA}`} className="block px-5 py-3 text-green-400 font-bold text-sm"
            target="_blank" rel="noopener noreferrer">📱 WhatsApp'tan Yaz</a>
        </div>
      )}
    </header>
  )
}
