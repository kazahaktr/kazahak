import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hizmetler — Değer Kaybı, Maddi Hasar, Yaralanmalı Kaza',
  description: 'Değer kaybı danışmanlığı, maddi hasar takibi ve yaralanmalı kaza yönlendirmesi. Sigorta süreçlerinde uzman destek.',
}

const SERVICES = [
  {
    icon: '🔍', title: 'Değer Kaybı Danışmanlığı',
    desc: 'Kaza sonrası aracınızın piyasa değeri düşer. Bu kaybı sigorta şirketinden talep etmek için doğru eksper raporu ve başvuru süreci kritiktir.',
    items: ['Ücretsiz ön değerlendirme', 'Sigorta şirketi müzakeresi', 'Eksper yönlendirmesi', 'Tahkim ve dava süreci takibi'],
    cta: 'Hesapla', href: '/deger-kaybi-hesaplama', color: 'from-orange-50 to-orange-100/50',
  },
  {
    icon: '🔧', title: 'Maddi Hasar Takibi',
    desc: 'Kazadan onarım tamamlanana kadar tüm sürecin takibi. Güvenilir servis partnerleri, eksper raporu kontrolü, sigorta ödemesi takibi.',
    items: ['Anlaşmalı servis yönlendirme', 'Eksper raporu inceleme', 'Sigorta müzakere desteği', 'Yedek araç organizasyonu'],
    cta: 'Danışma Al', href: '/danisma', color: 'from-blue-50 to-blue-100/50',
  },
  {
    icon: '⚖️', title: 'Yaralanmalı Kaza Yönlendirmesi',
    desc: 'Trafik kazasında yaralandıysanız; işgücü kaybı, tedavi masrafı ve manevi tazminat için anlaşmalı hukuk bürosu ile çalışıyoruz.',
    items: ['Anlaşmalı hukuk bürosu yönlendirme', 'Tazminat kalemleri analizi', 'Sigorta Tahkim Komisyonu', 'Dava takip desteği'],
    cta: 'Danışma Al', href: '/danisma', color: 'from-green-50 to-green-100/50',
  },
]

export default function HizmetlerPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-5xl font-extrabold text-navy mb-3">Hizmetlerimiz</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Kazadan sonra her ihtiyacınız için doğru partnere yönlendiriyoruz. Serbest danışmanlık — firma bağımsızlığıyla tarafsız hizmet.</p>
      </div>

      <div className="space-y-6">
        {SERVICES.map(s => (
          <div key={s.title} className={`bg-gradient-to-br ${s.color} rounded-2xl p-7 border border-slate-100`}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h2 className="font-display text-3xl font-extrabold text-navy mb-2">{s.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-green-500 font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-48 flex flex-col justify-center gap-2">
                <Link href={s.href} className="block bg-brand hover:bg-orange-600 text-white font-bold py-3 px-5 rounded-xl text-center text-sm transition-colors">{s.cta} →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-10 bg-navy/5 border border-navy/10 rounded-xl p-5 text-xs text-slate-500 leading-relaxed">
        <strong className="text-navy">Not:</strong> Hasar danışmanlığı hizmetleri avukatlık veya hukuki tavsiye kapsamında değildir. Yönlendirme ve bilgilendirme hizmeti sunulmaktadır. Hukuki işlemler anlaşmalı hukuk büroları tarafından yürütülür.
      </div>
    </div>
  )
}
