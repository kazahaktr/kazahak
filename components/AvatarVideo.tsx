'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const WA = '905553287509'
const WA_MSG = encodeURIComponent('Merhaba! Değer kaybım hakkında bilgi almak istiyorum.')

const SLIDES = [
  { emoji: '🚗', text: 'Kaza mı geçirdiniz?' },
  { emoji: '⚡', text: 'Değer kaybınızı anında hesaplayın.' },
  { emoji: '🆓', text: 'Danışma tamamen ücretsiz.' },
  { emoji: '💪', text: 'Sigortanızdan hakkınızı alın.' },
]

function WaveBar({ delay }: { delay: number }) {
  return (
    <span style={{
      display: 'inline-block',
      width: 3,
      height: 4,
      background: '#f97316',
      borderRadius: 99,
      animation: `kzWave 1.1s ease-in-out ${delay}s infinite`,
    }} />
  )
}

function SpeakingWave() {
  return (
    <>
      <style>{`
        @keyframes kzWave {
          0%,100% { height:4px; opacity:.35 }
          50%      { height:20px; opacity:1 }
        }
        @keyframes kzFadeUp {
          from { opacity:0; transform:translateY(6px) }
          to   { opacity:1; transform:translateY(0) }
        }
      `}</style>
      <div style={{ display:'flex', alignItems:'center', gap:3, height:24 }}>
        {[0, .15, .28, .1, .35, .05, .22, .4].map((d, i) => (
          <WaveBar key={i} delay={d} />
        ))}
      </div>
    </>
  )
}

export default function AvatarVideo() {
  const [open, setOpen]     = useState(false)
  const [slide, setSlide]   = useState(0)
  const [visible, setVisible] = useState(true)

  /* Slayt döngüsü */
  useEffect(() => {
    if (!open) return
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setSlide(s => (s + 1) % SLIDES.length)
        setVisible(true)
      }, 300)
    }, 2800)
    return () => clearInterval(t)
  }, [open])

  const current = SLIDES[slide]

  return (
    <>
      {/* Kapalı buton */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-24 right-6 z-50 flex flex-col items-center gap-1 group"
          aria-label="Tanıtımı izle"
        >
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-[3px] border-brand shadow-xl ring-4 ring-brand/30 group-hover:ring-brand/60 transition-all">
            <div className="w-full h-full bg-navy flex items-center justify-center text-brand font-extrabold text-2xl select-none">K</div>
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </div>
          <span className="text-[10px] text-white bg-navy/80 backdrop-blur px-2.5 py-0.5 rounded-full shadow text-nowrap font-semibold">
            Tanıtımı İzle ▶
          </span>
        </button>
      )}

      {/* Açık panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-72 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white flex flex-col">
          {/* Başlık */}
          <div className="flex items-center gap-3 px-4 py-3 bg-navy">
            <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white font-extrabold text-base shrink-0 select-none">K</div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold leading-none">Kazahak Asistan</p>
              <p className="text-green-400 text-[11px] mt-0.5 font-medium">● Canlı</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white text-lg leading-none ml-1" aria-label="Kapat">✕</button>
          </div>

          {/* İçerik */}
          <div className="px-5 py-5 bg-slate-50 flex flex-col items-center gap-4">
            {/* Avatar + dalga */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center text-brand font-extrabold text-4xl shadow-lg select-none">K</div>
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>

            <SpeakingWave />

            {/* Slayt metni */}
            <div className="text-center min-h-[52px] flex flex-col items-center justify-center">
              <span
                className="text-3xl block mb-1"
                style={{ animation: visible ? 'kzFadeUp .3s ease both' : 'none', opacity: visible ? 1 : 0, transition: 'opacity .25s' }}
              >
                {current.emoji}
              </span>
              <p
                className="text-navy font-bold text-[15px] leading-snug"
                style={{ animation: visible ? 'kzFadeUp .35s ease both' : 'none', opacity: visible ? 1 : 0, transition: 'opacity .25s' }}
              >
                {current.text}
              </p>
            </div>

            {/* Nokta göstergesi */}
            <div className="flex gap-1.5">
              {SLIDES.map((_, i) => (
                <span key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === slide ? 'bg-brand w-4' : 'bg-slate-300'}`} />
              ))}
            </div>
          </div>

          {/* CTA butonlar */}
          <div className="px-4 pb-4 pt-1 bg-white flex flex-col gap-2">
            <Link href="/deger-kaybi-hesaplama"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-brand hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
              ⚡ Ücretsiz Hesapla
            </Link>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
              💬 WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      )}
    </>
  )
}
