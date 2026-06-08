'use client'
import { useState } from 'react'

const WA = '905553287509'
const WA_MSG = encodeURIComponent('Merhaba, değer kaybı konusunda ücretsiz danışma almak istiyorum.')

export default function DanismaPage() {
  const [f, setF] = useState({ ad: '', tel: '', eposta: '', arac: '', mesaj: '' })
  const [err, setErr] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const up = (k: string, v: string) => { setF(x => ({ ...x, [k]: v })); setErr(x => ({ ...x, [k]: '' })) }
  const errEl = (k: string) => err[k] ? <p className="text-red-500 text-[11px] mt-1">{err[k]}</p> : null

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!f.ad.trim())  errs.ad  = 'Ad Soyad zorunludur'
    if (!f.tel.trim()) errs.tel = 'Telefon zorunludur'
    if (Object.keys(errs).length) { setErr(errs); return }

    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ad:     f.ad,
          tel:    f.tel,
          kaynak: 'danisma-formu',
          notlar: [f.eposta && `E-posta: ${f.eposta}`, f.arac && `Araç: ${f.arac}`, f.mesaj].filter(Boolean).join(' | '),
        }),
      })
    } catch { /* fail silently */ }
    setLoading(false)
    setDone(true)
  }

  const inp = (k: string) =>
    `w-full px-3.5 py-3 border-2 rounded-xl text-sm bg-white text-slate-800 transition-colors focus:outline-none focus:border-brand ${err[k] ? 'border-red-400' : 'border-slate-200'}`

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="font-display text-5xl font-extrabold text-navy mb-3">Ücretsiz Danışma</h1>
        <p className="text-slate-400">Bilgilerinizi bırakın, uzmanımız <strong className="text-navy">24 saat içinde</strong> sizi arasın.</p>
      </div>

      {done ? (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="font-display text-3xl font-extrabold text-navy mb-2">Talebiniz Alındı!</h2>
          <p className="text-slate-500 text-sm mb-6">En geç <strong>24 saat</strong> içinde uzmanımız sizi arayacak.</p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors">
            💬 WhatsApp'tan Yaz
          </a>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
          {/* WhatsApp hızlı yol */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-4">
            <div className="text-3xl">📱</div>
            <div className="flex-1">
              <p className="font-bold text-navy text-sm">Hızlı Yol: WhatsApp'tan Yazın</p>
              <p className="text-slate-500 text-xs mt-0.5">Anında cevap — bilgileri mesajla iletin</p>
            </div>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors shrink-0">
              WhatsApp →
            </a>
          </div>

          <div className="text-xs text-slate-400 text-center mb-6">— veya formu doldurun —</div>

          <form onSubmit={submit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Ad Soyad *</label>
                <input className={inp('ad')} placeholder="Adınız Soyadınız" value={f.ad} onChange={e => up('ad', e.target.value)} />
                {errEl('ad')}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Telefon *</label>
                <input className={inp('tel')} placeholder="0 5XX XXX XX XX" value={f.tel} onChange={e => up('tel', e.target.value)} />
                {errEl('tel')}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">E-posta</label>
                <input className={inp('eposta')} placeholder="email@örnek.com" value={f.eposta} onChange={e => up('eposta', e.target.value)} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Araç Bilgisi</label>
                <input className={inp('arac')} placeholder="Marka, model, yıl" value={f.arac} onChange={e => up('arac', e.target.value)} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Kaza Hakkında Kısaca</label>
              <textarea rows={3} className={`${inp('mesaj')} resize-none`}
                placeholder="Kaza tarihi, hasar durumu ve sorularınız..."
                value={f.mesaj} onChange={e => up('mesaj', e.target.value)} />
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-3.5 bg-brand hover:bg-orange-600 disabled:opacity-60 text-white font-bold rounded-xl transition-colors text-sm">
              {loading ? 'Gönderiliyor…' : 'Danışma Talebi Gönder →'}
            </button>
          </form>
        </div>
      )}

      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        {[['🔒','Güvenli','Verileriniz korunur'],['⚡','Hızlı','24 saat dönüş'],['🆓','Ücretsiz','Danışma bedelsiz']].map(([i,t,d]) => (
          <div key={t} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <div className="text-2xl mb-1">{i}</div>
            <div className="font-bold text-navy text-sm">{t}</div>
            <div className="text-slate-400 text-xs mt-0.5">{d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
