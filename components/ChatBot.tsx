'use client'
import { useState, useRef, useEffect } from 'react'

const WA = '905553287509'

interface Msg { from: 'bot' | 'user'; text: string }

const FAQ: { q: string; a: string; link?: { href: string; label: string } }[] = [
  {
    q: 'Değer kaybı nedir?',
    a: 'Kaza geçiren araçlar ikinci el piyasasında değer kaybeder. Bu kayıp, kusurlu sürücünün sigortasından yasal olarak talep edilebilir. 🚗',
  },
  {
    q: 'Ücretli mi?',
    a: 'Danışma ve hesaplama tamamen ücretsizdir. Dava sürecine girilirse başarı bazlı çalışıyoruz — peşin ücret almıyoruz. 🆓',
  },
  {
    q: 'Ne kadar alırım?',
    a: 'Araç değerinize, hasar büyüklüğüne ve yaşına göre değişir. Hesaplama aracımızla tahmini tutarı anında öğrenebilirsiniz. ⚡',
    link: { href: '/deger-kaybi-hesaplama', label: 'Hesaplamaya Git →' },
  },
  {
    q: 'Süreç ne kadar sürer?',
    a: 'Sigorta şirketiyle uzlaşma genellikle 2-8 hafta sürer. Dava yoluna gidilirse bu süre uzayabilir. Uzmanlarımız sizi bilgilendirir. 📅',
  },
  {
    q: 'Hangi kazalar için geçerli?',
    a: 'Maddi hasarlı tüm trafik kazaları için değer kaybı talep edebilirsiniz. Araç sürücü kusurlu olmamalı ve hasarın kayıt altına alınmış olması gerekir. ✅',
  },
  {
    q: 'WhatsApp ile ulaş',
    a: 'Sizi hemen WhatsApp üzerinden uzmanımıza bağlıyorum! 👇',
    link: { href: `https://wa.me/${WA}?text=${encodeURIComponent('Merhaba, değer kaybı hakkında bilgi almak istiyorum.')}`, label: '💬 WhatsApp\'tan Yaz' },
  },
]

const INTRO = 'Merhaba! 👋 Ben Kazahak asistanıyım. Size nasıl yardımcı olabilirim?'

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([{ from: 'bot', text: INTRO }])
  const [unread, setUnread] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) { setUnread(0); bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }
  }, [open, msgs])

  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) {
        setMsgs(m => [...m, { from: 'bot', text: 'Kaza sonrası değer kaybınızı ücretsiz hesaplayabilirsiniz. Yardımcı olabilir miyim? 😊' }])
        setUnread(n => n + 1)
      }
    }, 5000)
    return () => clearTimeout(t)
  }, [])

  function pick(item: typeof FAQ[0]) {
    setMsgs(m => [...m,
      { from: 'user', text: item.q },
      { from: 'bot',  text: item.a },
    ])
  }

  return (
    <>
      {/* Toggle butonu */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-navy shadow-xl flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Sohbet asistanı"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
          </svg>
        )}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>

      {/* Chat penceresi */}
      {open && (
        <div className="fixed bottom-24 left-6 z-50 w-80 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden bg-white"
          style={{ maxHeight: '480px' }}>
          {/* Header */}
          <div className="bg-navy px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white font-bold text-sm shrink-0">K</div>
            <div>
              <p className="text-white text-sm font-bold leading-none">Kazahak Asistan</p>
              <p className="text-white/50 text-[11px] mt-0.5">Çevrimiçi ✓</p>
            </div>
          </div>

          {/* Mesajlar */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50" style={{ minHeight: 0 }}>
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.from === 'user'
                    ? 'bg-brand text-white rounded-br-sm'
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Hızlı sorular */}
          <div className="p-3 bg-white border-t border-slate-100 space-y-1.5">
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-2">Sık Sorulanlar</p>
            <div className="flex flex-wrap gap-1.5">
              {FAQ.map(item => (
                <button key={item.q} onClick={() => pick(item)}
                  className="text-xs bg-slate-100 hover:bg-brand hover:text-white text-slate-600 px-2.5 py-1.5 rounded-full transition-colors font-medium">
                  {item.q}
                </button>
              ))}
            </div>
            {/* Son bot mesajında link varsa göster */}
            {(() => {
              const last = [...msgs].reverse().find(m => m.from === 'bot')
              const faqItem = FAQ.find(f => last?.text === f.a)
              return faqItem?.link ? (
                <a href={faqItem.link.href}
                  target={faqItem.link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="mt-2 block w-full text-center bg-brand hover:bg-orange-600 text-white text-xs font-bold py-2.5 rounded-xl transition-colors">
                  {faqItem.link.label}
                </a>
              ) : null
            })()}
          </div>
        </div>
      )}
    </>
  )
}
