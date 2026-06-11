'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const WA = '905553287509'
const WA_LINK = `https://wa.me/${WA}?text=${encodeURIComponent('Merhaba, değer kaybı hakkında bilgi almak istiyorum.')}`

interface Msg {
  from: 'bot' | 'user'
  text: string
  links?: { href: string; label: string; external?: boolean }[]
}

// ── Site bilgisi yanıt tabanı ────────────────────────────────
interface Rule {
  keys: string[]
  text: string
  links?: { href: string; label: string; external?: boolean }[]
}

const RULES: Rule[] = [
  {
    keys: ['merhaba', 'selam', 'hey', 'günaydın', 'iyi günler', 'iyi akşamlar'],
    text: 'Merhaba! 👋 KazaHak asistanına hoş geldiniz. Kaza sonrası değer kaybı, hasar tazminatı veya süreç hakkında sorularınızı yanıtlayabilirim.',
    links: [
      { href: '/deger-kaybi-hesaplama', label: '⚡ Ücretsiz Hesapla' },
      { href: '/danisma', label: '📞 Danışma Al' },
    ],
  },
  {
    keys: ['değer kaybı nedir', 'deger kaybi nedir', 'ne demek', 'ne oluyor', 'anlat'],
    text: 'Değer kaybı: Kaza geçiren araç tamamen onarılsa bile ikinci el piyasasında değer düşer. "Kaza geçirmiş araç" damgası nedeniyle oluşan bu fark, kusurlu sürücünün sigortasından yasal olarak talep edilebilir. Yargıtay kararları ile güvence altındadır. 🚗',
    links: [
      { href: '/deger-kaybi-hesaplama', label: '⚡ Hemen Hesapla' },
      { href: '/blog/deger-kaybi-nedir-nasil-alinir', label: '📖 Detaylı Bilgi' },
    ],
  },
  {
    keys: ['hesapla', 'hesaplama', 'tutar', 'ne kadar', 'kaç para', 'kac para', 'miktar', 'tahmin'],
    text: 'Değer kaybı miktarı; aracın piyasa değeri, yaşı, km\'si ve hasar büyüklüğüne göre belirlenir. Ortalama %5–15 arasında değişir. Ücretsiz hesaplama aracımızla dakikalar içinde tahmini tutarı öğrenebilirsiniz. ⚡',
    links: [
      { href: '/deger-kaybi-hesaplama', label: '⚡ Ücretsiz Hesapla' },
    ],
  },
  {
    keys: ['ücret', 'ucret', 'fiyat', 'para öde', 'maliyeti', 'bedava', 'ücretsiz', 'ucretsiz', 'peşin', 'komisyon'],
    text: 'Danışma ve hesaplama tamamen ücretsizdir. Dava/tahkim sürecine girilirse başarı bazlı çalışıyoruz — tazminat alındığında sabit oranda komisyon; peşin hiçbir ücret almıyoruz. 🆓',
    links: [
      { href: '/hizmetler', label: '📋 Hizmetleri İncele' },
      { href: WA_LINK, label: '💬 WhatsApp\'tan Sor', external: true },
    ],
  },
  {
    keys: ['süreç', 'surec', 'ne zaman', 'kaç gün', 'kac gun', 'ne kadar sürer', 'zaman', 'hafta', 'ay'],
    text: 'Sigorta şirketiyle uzlaşma genellikle 2–8 hafta sürer. Tahkim yoluyla 3–4 ay, dava açılırsa 6–18 ay olabilir. Uzmanlarımız her aşamada sizi bilgilendirir. 📅',
    links: [
      { href: '/danisma', label: '📞 Ücretsiz Danışma' },
    ],
  },
  {
    keys: ['belgeler', 'belge', 'evrak', 'gerekli', 'ne lazım', 'ne gerek', 'hangi kağıt'],
    text: 'Başvuru için gereken belgeler:\n• Trafik kaza tespit tutanağı\n• Araç ruhsatı fotokopisi\n• Hasar fotoğrafları ve onarım faturası\n• Kimlik fotokopisi\n• Sigorta poliçe bilgileri\n\nBaşvuruda yardımcı oluyoruz. 📄',
    links: [
      { href: '/blog/2026-arac-deger-kaybi-basvurusu', label: '📖 Başvuru Rehberi' },
    ],
  },
  {
    keys: ['hangi kaza', 'hangi araç', 'her kaza', 'uygulan', 'kapsam', 'şart', 'şartlar', 'geçerli'],
    text: 'Maddi hasarlı tüm trafik kazaları için değer kaybı talep edebilirsiniz. Temel şartlar:\n✅ Karşı tarafın kusurlu olması\n✅ Kaza tutanağının bulunması\n✅ Aracın onarım görmüş olması\n\nMotorisiklet, ticari araç ve sıfır km araçlar da kapsama girer.',
    links: [
      { href: '/deger-kaybi-hesaplama', label: '⚡ Hak Hesapla' },
    ],
  },
  {
    keys: ['sigorta', 'kasko', 'trafik sigortası', 'zorunlu', 'poliçe'],
    text: 'Değer kaybı tazminatı karşı tarafın zorunlu trafik sigortasından (ZMMS) talep edilir. Kendi kasko poliçenizden ise "hasar farkı" veya "pert" durumunda ek tazminat hakkınız doğabilir. 🛡️',
    links: [
      { href: '/blog/hasar-farki-nedir', label: '📖 Hasar Farkı Nedir?' },
      { href: '/hizmetler', label: '📋 Hizmetlerimiz' },
    ],
  },
  {
    keys: ['tahkim', 'stk', 'sigorta tahkim', 'komisyon', 'itiraz'],
    text: 'Sigorta şirketi ret veya düşük teklif verirse Sigorta Tahkim Komisyonu\'na başvurabilirsiniz. Mahkemeden çok daha hızlı (3–4 ay), düşük maliyetli ve bağlayıcı bir süreç. Başvuruyu sizin için hazırlıyoruz. ⚖️',
    links: [
      { href: '/blog/sigorta-tahkim-basvurusu', label: '📖 Tahkim Rehberi' },
      { href: '/danisma', label: '📞 Danışma Al' },
    ],
  },
  {
    keys: ['pert', 'total loss', 'tam hasar', 'hurdaya', 'hurda'],
    text: 'Onarım maliyeti araç değerinin %70\'ini aşarsa araç "pert" ilan edilir. Sigorta şirketi genellikle düşük piyasa değeri teklif eder — bu teklife itiraz ederek gerçek değeri talep edebilirsiniz. 🚗',
    links: [
      { href: '/blog/pert-arac-tazminati', label: '📖 Pert Araç Rehberi' },
      { href: WA_LINK, label: '💬 Uzmanla Konuş', external: true },
    ],
  },
  {
    keys: ['başvuru', 'basvuru', 'nasıl yapılır', 'nasil yapilir', 'ne yapacağım', 'adım', 'adim'],
    text: '2026 başvuru adımları:\n1️⃣ Karşı tarafın sigortasına yazılı başvuru\n2️⃣ 15 iş günü bekleme süresi\n3️⃣ Teklif değerlendirmesi (genelde gerçeğin %50\'si altında gelir)\n4️⃣ Red/düşük teklifte Tahkim veya dava\n\nHer aşamada yanınızdayız.',
    links: [
      { href: '/blog/2026-arac-deger-kaybi-basvurusu', label: '📖 Adım Adım Rehber' },
      { href: '/danisma', label: '📞 Ücretsiz Danışma' },
    ],
  },
  {
    keys: ['iletişim', 'iletisim', 'ulaş', 'ulas', 'telefon', 'mail', 'email', 'e-posta', 'instagram', 'tiktok'],
    text: 'Bize ulaşın:\n📱 WhatsApp: +90 555 328 75 09\n📧 E-posta: info@kazahak.com\n📸 Instagram: @kazahak\n🎵 TikTok: @kazahak\n📍 Antalya — Türkiye geneli hizmet',
    links: [
      { href: WA_LINK, label: '💬 WhatsApp\'tan Yaz', external: true },
      { href: '/danisma', label: '📞 Danışma Formu' },
    ],
  },
  {
    keys: ['whatsapp', 'wp', 'watsap', 'mesaj', 'yaz', 'ara'],
    text: 'Sizi hemen uzmanımıza bağlıyorum! WhatsApp üzerinden 7/24 yanıt veriyoruz. 👇',
    links: [
      { href: WA_LINK, label: '💬 WhatsApp\'tan Yaz', external: true },
    ],
  },
  {
    keys: ['hizmet', 'neler yapıyorsunuz', 'ne yapıyorsunuz', 'ne sunuyorsunuz'],
    text: 'KazaHak hizmetleri:\n✅ Ücretsiz değer kaybı hesaplama\n✅ Sigorta şirketiyle müzakere\n✅ Sigorta Tahkim başvurusu\n✅ Dava sürecinde danışmanlık\n✅ Pert araç tazminat desteği\n✅ Hasar farkı talebi\n\nTüm Türkiye\'de hizmet veriyoruz.',
    links: [
      { href: '/hizmetler', label: '📋 Tüm Hizmetler' },
    ],
  },
  {
    keys: ['hakkında', 'hakkimizda', 'kimsiniz', 'siz kimsiniz', 'şirket', 'firma', 'ekip'],
    text: 'KazaHak; kaza sonrası değer kaybı ve hasar tazminatı konusunda uzmanlaşmış danışmanlık firmasıdır. 2.400+ değerlendirilen dosya, ₺4.2M+ kazanılan tazminat ve %94 başarı oranıyla Türkiye genelinde hizmet veriyoruz. 🏆',
    links: [
      { href: '/hakkimizda', label: '👥 Hakkımızda' },
    ],
  },
  {
    keys: ['blog', 'makale', 'yaz', 'içerik', 'oku'],
    text: 'Blog yazılarımızda değer kaybı, sigorta tahkim, pert araç ve başvuru süreçlerini detaylıca anlatıyoruz. 📚',
    links: [
      { href: '/blog', label: '📚 Tüm Blog Yazıları' },
    ],
  },
]

const FALLBACK: Msg = {
  from: 'bot',
  text: 'Sorunuzu tam anlayamadım 🤔 Aşağıdaki konulardan birine yazabilir ya da doğrudan uzmanımıza bağlanabilirsiniz.',
  links: [
    { href: '/deger-kaybi-hesaplama', label: '⚡ Değer Kaybı Hesapla' },
    { href: WA_LINK, label: '💬 WhatsApp\'tan Sor', external: true },
    { href: '/danisma', label: '📞 Danışma Formu' },
  ],
}

const QUICK = [
  'Değer kaybı nedir?',
  'Ne kadar alırım?',
  'Ücretli mi?',
  'Belgeler neler?',
  'Süreç ne kadar sürer?',
  'WhatsApp ile ulaş',
]

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
}

function getReply(input: string): Msg {
  const norm = normalize(input)
  for (const rule of RULES) {
    if (rule.keys.some(k => norm.includes(normalize(k)))) {
      return { from: 'bot', text: rule.text, links: rule.links }
    }
  }
  return FALLBACK
}

// ── Bileşen ─────────────────────────────────────────────────
export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([{
    from: 'bot',
    text: 'Merhaba! 👋 Ben KazaHak asistanıyım. Değer kaybı, hasar tazminatı ve başvuru süreci hakkında sorularınızı yanıtlarım.',
    links: [
      { href: '/deger-kaybi-hesaplama', label: '⚡ Ücretsiz Hesapla' },
      { href: WA_LINK, label: '💬 WhatsApp\'tan Yaz', external: true },
    ],
  }])
  const [unread, setUnread] = useState(0)
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setUnread(0)
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50)
      inputRef.current?.focus()
    }
  }, [open, msgs])

  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) {
        setMsgs(m => [...m, {
          from: 'bot',
          text: 'Kaza sonrası değer kaybınızı ücretsiz hesaplayabilirsiniz. Yardımcı olabilir miyim? 😊',
          links: [{ href: '/deger-kaybi-hesaplama', label: '⚡ Hesaplamaya Git' }],
        }])
        setUnread(n => n + 1)
      }
    }, 5000)
    return () => clearTimeout(t)
  }, [])

  function send(text: string) {
    if (!text.trim()) return
    const reply = getReply(text)
    setMsgs(m => [...m, { from: 'user', text }, reply])
    setInput('')
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter') send(input)
  }

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-navy shadow-xl flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Sohbet asistanı"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
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

      {open && (
        <div className="fixed bottom-24 left-6 z-50 w-80 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden bg-white"
          style={{ maxHeight: '520px' }}>

          {/* Header */}
          <div className="bg-navy px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white font-bold text-sm shrink-0">K</div>
            <div>
              <p className="text-white text-sm font-bold leading-none">KazaHak Asistan</p>
              <p className="text-white/50 text-[11px] mt-0.5">Çevrimiçi ✓</p>
            </div>
          </div>

          {/* Mesajlar */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50" style={{ minHeight: 0 }}>
            {msgs.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.from === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[88%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  m.from === 'user'
                    ? 'bg-brand text-white rounded-br-sm'
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-sm'
                }`}>
                  {m.text}
                </div>
                {m.links && m.from === 'bot' && (
                  <div className="mt-1.5 flex flex-col gap-1.5 w-full max-w-[88%]">
                    {m.links.map(l => (
                      l.external ? (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                          className="block text-center bg-brand hover:bg-orange-600 text-white text-xs font-bold py-2 px-3 rounded-xl transition-colors">
                          {l.label}
                        </a>
                      ) : (
                        <Link key={l.href} href={l.href}
                          className="block text-center bg-navy hover:bg-navy/80 text-white text-xs font-bold py-2 px-3 rounded-xl transition-colors">
                          {l.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Hızlı sorular */}
          <div className="px-3 pt-2 pb-1 bg-white border-t border-slate-100 shrink-0">
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1.5">Hızlı Sorular</p>
            <div className="flex flex-wrap gap-1">
              {QUICK.map(q => (
                <button key={q} onClick={() => send(q)}
                  className="text-[11px] bg-slate-100 hover:bg-brand hover:text-white text-slate-600 px-2 py-1 rounded-full transition-colors font-medium">
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Mesaj yaz */}
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2 shrink-0">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Mesajınızı yazın…"
              className="flex-1 text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-brand text-slate-800 placeholder-slate-400"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="w-9 h-9 bg-brand hover:bg-orange-600 disabled:opacity-40 text-white rounded-xl flex items-center justify-center transition-colors shrink-0"
              aria-label="Gönder"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
