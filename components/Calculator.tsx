'use client'
import { useState, useEffect } from 'react'
import { calcDegerKaybi, tl, parseNum, fmtNum, BOLGE, BRANDS, KM_OPTS, YEARS, type CalcResult } from '@/lib/calc'

const WA = '905553287509'

const STEPS = ['Araç Bilgileri', 'Kaza Bilgileri', 'Sonuç & Danışma']

function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.847L0 24l6.347-1.499A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6c-1.93 0-3.733-.515-5.282-1.413l-.378-.224-3.929.928.974-3.836-.246-.394A9.555 9.555 0 012.4 12c0-5.292 4.308-9.6 9.6-9.6s9.6 4.308 9.6 9.6-4.308 9.6-9.6 9.6z"/>
    </svg>
  )
}

function AnimCounter({ to }: { to: number }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    let s: number
    const tick = (ts: number) => {
      if (!s) s = ts
      const p = Math.min((ts - s) / 1600, 1)
      setV(Math.round((1 - (1 - p) ** 3) * to))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [to])
  return <>{tl(v)}</>
}

interface FormState {
  marka: string; model: string; yil: number; km: number
  piyasa: string; onarim: string; bolge: string
  ad: string; tel: string; kvkk: boolean
}

export default function Calculator() {
  const [step, setStep]   = useState(1)
  const [f, setF]         = useState<FormState>({ marka:'', model:'', yil:2021, km:45000, piyasa:'', onarim:'', bolge:'on', ad:'', tel:'', kvkk:false })
  const [err, setErr]     = useState<Record<string, string>>({})
  const [res, setRes]     = useState<CalcResult | null>(null)
  const [done, setDone]   = useState(false)
  const [loading, setLoading] = useState(false)

  const up   = (k: keyof FormState, v: FormState[keyof FormState]) => setF(x => ({ ...x, [k]: v }))
  const ce   = (k: string) => setErr(x => ({ ...x, [k]: '' }))
  const errEl = (k: string) => err[k] ? <p className="text-red-500 text-[11px] mt-1">{err[k]}</p> : null
  const hint  = (t: string) => <p className="text-slate-400 text-[11px] mt-1">{t}</p>

  function validate(n: number) {
    const e: Record<string, string> = {}
    if (n === 1) {
      if (!f.marka)       e.marka = 'Marka seçiniz'
      if (!f.model.trim()) e.model = 'Model giriniz'
    }
    if (n === 2) {
      const p = parseNum(f.piyasa), o = parseNum(f.onarim)
      if (p < 50000) e.piyasa = 'Geçerli değer giriniz (min ₺50.000)'
      if (o < 1000)  e.onarim = 'Geçerli onarım tutarı giriniz'
      if (p >= 50000 && o >= p) e.onarim = 'Onarım bedeli araç değerinden küçük olmalı'
    }
    setErr(e)
    return Object.keys(e).length === 0
  }

  function next() {
    if (!validate(step)) return
    if (step === 2) setRes(calcDegerKaybi({ yil:f.yil, km:f.km, piyasa:parseNum(f.piyasa), onarim:parseNum(f.onarim), bolge:f.bolge }))
    setStep(s => s + 1)
  }

  async function submit() {
    const e: Record<string, string> = {}
    if (!f.ad.trim())  e.ad  = 'Ad Soyad giriniz'
    if (!f.tel.trim()) e.tel = 'Telefon numarası giriniz'
    if (!f.kvkk)       e.kvkk = 'KVKK onayı gereklidir'
    if (Object.keys(e).length) { setErr(e); return }

    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...f, piyasa: parseNum(f.piyasa), onarim: parseNum(f.onarim), ...res }),
      })
    } catch { /* fail silently — still show success */ }
    setLoading(false)
    setDone(true)
  }

  const inp = (k: string) =>
    `w-full px-3.5 py-3 border-2 rounded-xl text-sm bg-white text-slate-800 transition-colors ${err[k] ? 'border-red-400' : 'border-slate-200'}`
  const sel = (k: string) =>
    `${inp(k)} appearance-none cursor-pointer bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236b7280'%3E%3Cpath d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10`
  const lbl = 'block text-[13px] font-semibold text-slate-600 mb-1.5'

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      {/* Step bar */}
      <div className="flex bg-slate-100 rounded-xl p-1 gap-1 mb-7">
        {STEPS.map((label, i) => (
          <div key={i} className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-[10px] text-xs font-bold transition-all ${step===i+1 ? 'bg-navy text-white' : step>i+1 ? 'text-slate-400' : 'text-slate-300'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold shrink-0 ${step>i+1 ? 'bg-green-500 text-white' : step===i+1 ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-400'}`}>
              {step > i+1 ? '✓' : i + 1}
            </span>
            <span className="hidden sm:inline">{label}</span>
          </div>
        ))}
      </div>

      {/* ── STEP 1 ── */}
      {step === 1 && (
        <div>
          <h2 className="font-display text-3xl font-extrabold text-navy mb-6">🚗 Araç Bilgileri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={lbl}>Marka *</label>
              <select className={sel('marka')} value={f.marka} onChange={e => { up('marka', e.target.value); ce('marka') }}>
                <option value="">— Seçiniz —</option>
                {BRANDS.map(b => <option key={b}>{b}</option>)}
              </select>
              {errEl('marka')}
            </div>
            <div>
              <label className={lbl}>Model *</label>
              <input className={inp('model')} placeholder="Örn: Corolla, Golf, 320i" value={f.model} onChange={e => { up('model', e.target.value); ce('model') }} />
              {errEl('model')}
            </div>
            <div>
              <label className={lbl}>Model Yılı</label>
              <select className={sel('yil')} value={f.yil} onChange={e => up('yil', Number(e.target.value))}>
                {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <label className={lbl}>Kilometre Aralığı</label>
              <select className={sel('km')} value={f.km} onChange={e => up('km', Number(e.target.value))}>
                {KM_OPTS.map(o => <option key={o.val} value={o.val}>{o.label}</option>)}
              </select>
            </div>
          </div>
          <button onClick={next} className="mt-6 w-full py-3.5 bg-brand hover:bg-orange-600 text-white font-bold text-base rounded-xl transition-colors">
            Devam Et →
          </button>
        </div>
      )}

      {/* ── STEP 2 ── */}
      {step === 2 && (
        <div>
          <h2 className="font-display text-3xl font-extrabold text-navy mb-1">🔧 Kaza & Hasar Bilgileri</h2>
          <p className="text-slate-400 text-sm mb-6">{f.marka} {f.model} • {f.yil} • {new Intl.NumberFormat('tr-TR').format(f.km)} km</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={lbl}>Araç Piyasa Değeri (₺) *</label>
              <input className={inp('piyasa')} placeholder="1.200.000" value={f.piyasa} onChange={e => { up('piyasa', fmtNum(e.target.value)); ce('piyasa') }} />
              {err.piyasa ? errEl('piyasa') : hint('TRAMER veya 2. el ilanı baz alın')}
            </div>
            <div>
              <label className={lbl}>Tahmini Onarım Bedeli (₺) *</label>
              <input className={inp('onarim')} placeholder="85.000" value={f.onarim} onChange={e => { up('onarim', fmtNum(e.target.value)); ce('onarim') }} />
              {err.onarim ? errEl('onarim') : hint('Servis teklifi veya eksper tutarı')}
            </div>
          </div>

          <div className="mt-5">
            <label className={lbl}>Hasar Bölgesi</label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {Object.entries(BOLGE).map(([k, v]) => (
                <div key={k} onClick={() => up('bolge', k)}
                  className={`border-2 rounded-xl p-3 text-center cursor-pointer transition-all ${f.bolge===k ? 'border-brand bg-orange-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                  <div className="text-xl mb-1">{v.icon}</div>
                  <div className={`text-[11px] font-bold ${f.bolge===k ? 'text-brand' : 'text-slate-500'}`}>{v.tr}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep(1)} className="px-5 py-3 bg-slate-100 text-navy font-bold rounded-xl text-sm">← Geri</button>
            <button onClick={next} className="flex-1 py-3 bg-brand hover:bg-orange-600 text-white font-bold rounded-xl transition-colors">
              Değer Kaybını Hesapla ⚡
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: RESULT ── */}
      {step === 3 && res && !done && (
        <div>
          <div className="text-center pb-6 border-b border-slate-100 mb-6">
            <p className="text-[11px] font-bold text-slate-400 tracking-[2.5px] uppercase mb-2">Tahmini Değer Kaybı</p>
            <div className="font-display text-5xl md:text-7xl font-extrabold text-brand leading-none mb-2">
              <AnimCounter to={res.base} />
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Aralık: <strong className="text-slate-600">{tl(res.min)} – {tl(res.max)}</strong>
            </p>
            <div className="h-2 bg-gradient-to-r from-yellow-200 via-orange-500 to-red-500 rounded-full mb-1.5" />
            <div className="flex justify-between text-[10px] text-slate-300"><span>Düşük</span><span>Yüksek</span></div>
          </div>

          {/* Breakdown */}
          <div className="bg-slate-50 rounded-xl p-4 mb-5">
            <p className="text-[13px] font-bold text-navy mb-3">📊 Hesaplama Özeti</p>
            {[
              ['Araç', `${f.marka} ${f.model} (${f.yil})`],
              ['Piyasa Değeri', `${f.piyasa} ₺`],
              ['Onarım Bedeli', `${f.onarim} ₺`],
              ['Hasar Oranı', `%${res.pct}`],
              ['Yaş-KM Katsayısı', res.yk.toFixed(2)],
              ['Hasar Bölgesi', `${BOLGE[f.bolge].tr} × ${res.bk.toFixed(2)}`],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between text-sm py-1.5 border-b border-slate-100 last:border-0">
                <span className="text-slate-400">{k}</span>
                <span className="font-semibold text-slate-700">{v}</span>
              </div>
            ))}
            <div className="flex justify-between text-[15px] font-bold pt-3 text-navy">
              <span>Tahmini Değer Kaybı</span>
              <span className="text-brand">{tl(res.base)}</span>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs text-orange-800 leading-relaxed mb-6">
            ⚠️ Bu sonuç <strong>bilgilendirme amaçlıdır.</strong> Kesin tutar lisanslı eksper raporu ve sigorta süreci sonucunda belirlenir.
          </div>

          {/* Lead Form */}
          <div className="bg-slate-50 rounded-xl p-5">
            <h3 className="font-display text-2xl font-extrabold text-navy mb-1">🎯 Ücretsiz Danışma Al</h3>
            <p className="text-slate-500 text-sm mb-4">Tahmini <strong className="text-brand">{tl(res.base)}</strong> değer kaybını nasıl alacağını konuşalım.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className={lbl}>Ad Soyad *</label>
                <input className={inp('ad')} placeholder="Adınız Soyadınız" value={f.ad} onChange={e => { up('ad', e.target.value); ce('ad') }} />
                {errEl('ad')}
              </div>
              <div>
                <label className={lbl}>Telefon *</label>
                <input className={inp('tel')} placeholder="0 5XX XXX XX XX" value={f.tel} onChange={e => { up('tel', e.target.value); ce('tel') }} />
                {errEl('tel')}
              </div>
            </div>
            <label className="flex items-start gap-2 cursor-pointer mb-4">
              <input type="checkbox" checked={f.kvkk} onChange={e => { up('kvkk', e.target.checked); ce('kvkk') }}
                className="mt-0.5 shrink-0 accent-brand" />
              <span className="text-[12px] text-slate-500">KVKK kapsamında kişisel verilerimin işlenmesine onay veriyorum.</span>
            </label>
            {errEl('kvkk')}
            <button onClick={submit} disabled={loading}
              className="w-full py-3.5 bg-brand hover:bg-orange-600 disabled:opacity-50 text-white font-bold rounded-xl transition-colors text-sm">
              {loading ? 'Gönderiliyor…' : 'Randevu Talep Et — Ücretsiz'}
            </button>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Merhaba, ${f.marka} ${f.model} (${f.yil}) aracımın değer kaybı hesaplaması yaptım. Tahmini tutar: ${tl(res.base)}. Görüşmek istiyorum.`)}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-2.5 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-sm flex items-center justify-center gap-2">
              <WaIcon /> WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      )}

      {/* ── DONE ── */}
      {step === 3 && done && (
        <div className="text-center py-10">
          <div className="text-6xl mb-4">✅</div>
          <h3 className="font-display text-3xl font-extrabold text-navy mb-2">Talebiniz Alındı!</h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-6">
            En geç <strong>24 saat</strong> içinde uzmanımız sizi arayacak.
          </p>
          <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors">
            <WaIcon /> WhatsApp'tan Yaz
          </a>
        </div>
      )}
    </div>
  )
}
