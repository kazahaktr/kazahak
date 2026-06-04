'use client'
import { useState } from 'react'

export default function AvatarVideo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Kapalıyken gösterilen avatar butonu */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-24 right-6 z-50 flex flex-col items-center gap-1 group"
          aria-label="Tanıtım videosunu izle"
        >
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand shadow-xl ring-2 ring-brand/40 group-hover:ring-brand transition-all">
            {/* Avatar resmi veya baş harf */}
            <div className="w-full h-full bg-navy flex items-center justify-center text-brand font-bold text-2xl">
              K
            </div>
            {/* Canlı göstergesi */}
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </div>
          <span className="text-[10px] text-white bg-navy/80 px-2 py-0.5 rounded-full shadow text-nowrap">
            Tanıtımı İzle
          </span>
        </button>
      )}

      {/* Açık video paneli */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-navy">
          <div className="flex items-center justify-between px-4 py-2 bg-[#0d1f3c]">
            <span className="text-white text-sm font-semibold">Hoş Geldiniz</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white text-lg leading-none"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>
          <video
            src="/avatar-video.mp4"
            autoPlay
            playsInline
            controls
            className="w-full aspect-video object-cover bg-black"
          />
          <div className="px-4 py-2 bg-[#0d1f3c] text-xs text-white/40 text-center">
            Değer Kaybı &amp; Hasar Danışmanlığı
          </div>
        </div>
      )}
    </>
  )
}
