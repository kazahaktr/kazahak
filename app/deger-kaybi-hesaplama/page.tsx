import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'

export const metadata: Metadata = {
  title: 'Araç Değer Kaybı Hesaplama — Ücretsiz',
  description: 'Kaza sonrası araç değer kaybınızı ücretsiz hesaplayın. Piyasa değeri, araç yaşı ve hasar bilgisiyle anında tahmini tutar öğrenin. Uzman danışmanlık.',
  keywords: 'değer kaybı hesaplama, araç değer kaybı, kaza sonrası tazminat, değer kaybı nasıl hesaplanır',
}

export default function DegerKaybiPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-[#162040] text-white py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-80px] right-[-80px] w-56 h-56 rounded-full bg-brand/6" />
          <div className="absolute bottom-[-50px] left-[-50px] w-44 h-44 rounded-full bg-brand/4" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/35 rounded-full px-4 py-1.5 text-sm text-orange-200 font-semibold mb-5">
            ⚡ Ücretsiz &nbsp;•&nbsp; Anında &nbsp;•&nbsp; Uzman Danışmanlık
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-3 leading-tight tracking-tight">
            Değer Kaybını<br/><span className="text-brand">Hemen Hesaplayın</span>
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Kaza sonrası aracınızın değeri düşer. Bu kaybı sigorta şirketinden talep etme <strong className="text-white/85">hakkınız var.</strong>
          </p>
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {[['2.400+','Dosya'],['₺4.2M+','Kazanılan'],['%94','Başarı']].map(([v,l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-2xl font-bold text-brand">{v}</div>
                <div className="text-white/35 text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <div className="max-w-2xl mx-auto px-4 -mt-8 pb-16 relative z-10">
        <Calculator />

        {/* FAQ */}
        <div className="mt-10 space-y-4">
          <h2 className="font-display text-3xl font-extrabold text-navy">Sık Sorulan Sorular</h2>
          {[
            ['Değer kaybı tazminatı almak için ne gerekir?', 'Kazada karşı tarafın kusurlu olması ve hasarın onarım gerektiren boyutta olması gerekir. Kaza tarihinden itibaren 2 yıl içinde başvuruda bulunulmalıdır.'],
            ['Bu hesaplama kesin tutar mı?', 'Hayır. Hesaplama yaklaşık değer vermektedir. Kesin tutar; lisanslı eksper raporu, sigorta müzakereleri ve gerekirse mahkeme kararıyla belirlenir.'],
            ['Sigorta şirketi ödemeyi reddederse?', 'Sigorta Tahkim Komisyonu veya hukuki dava yoluna gidebilirsiniz. Uzman danışmanımız bu süreçte size rehberlik eder.'],
            ['Hesaplamadan sonra ne yapmalıyım?', 'Formu doldurun, 24 saat içinde sizi arayalım. Dosyanızı değerlendirip en doğru adımı birlikte belirleriz.'],
          ].map(([q, a]) => (
            <details key={q as string} className="bg-white rounded-xl border border-slate-100 group">
              <summary className="px-5 py-4 font-semibold text-navy text-sm cursor-pointer list-none flex items-center justify-between">
                {q}
                <span className="text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-slate-500 text-sm leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
