import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const SEHIRLER: Record<string, { ad: string; nufus: string; plaka: string; bolge: string }> = {
  antalya:  { ad: 'Antalya',  nufus: '2.6 milyon',  plaka: '07', bolge: 'Akdeniz' },
  istanbul: { ad: 'İstanbul', nufus: '15.9 milyon', plaka: '34', bolge: 'Marmara' },
  ankara:   { ad: 'Ankara',   nufus: '5.7 milyon',  plaka: '06', bolge: 'İç Anadolu' },
  izmir:    { ad: 'İzmir',    nufus: '4.4 milyon',  plaka: '35', bolge: 'Ege' },
  bursa:    { ad: 'Bursa',    nufus: '3.2 milyon',  plaka: '16', bolge: 'Marmara' },
  adana:    { ad: 'Adana',    nufus: '2.2 milyon',  plaka: '01', bolge: 'Akdeniz' },
  konya:    { ad: 'Konya',    nufus: '2.3 milyon',  plaka: '42', bolge: 'İç Anadolu' },
  gaziantep:{ ad: 'Gaziantep',nufus: '2.1 milyon',  plaka: '27', bolge: 'Güneydoğu Anadolu' },
}

export async function generateStaticParams() {
  return Object.keys(SEHIRLER).map(il => ({ il }))
}

export async function generateMetadata({ params }: { params: { il: string } }): Promise<Metadata> {
  const s = SEHIRLER[params.il]
  if (!s) return {}
  return {
    title: `${s.ad} Araç Değer Kaybı Hesaplama ve Danışmanlık | KazaHak`,
    description: `${s.ad}'da araç değer kaybı mı yaşadınız? Ücretsiz hesaplama yapın, uzman danışmanlarımızla görüşün. Sigorta şirketinden hakkınızı alın.`,
    alternates: { canonical: `https://kazahak.com/arac-deger-kaybi/${params.il}` },
  }
}

export default function SehirPage({ params }: { params: { il: string } }) {
  const s = SEHIRLER[params.il]
  if (!s) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://kazahak.com' },
      { '@type': 'ListItem', position: 2, name: 'Araç Değer Kaybı', item: 'https://kazahak.com/deger-kaybi-hesaplama' },
      { '@type': 'ListItem', position: 3, name: `${s.ad} Araç Değer Kaybı`, item: `https://kazahak.com/arac-deger-kaybi/${params.il}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-brand">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/deger-kaybi-hesaplama" className="hover:text-brand">Değer Kaybı</Link>
          <span>/</span>
          <span className="text-slate-600">{s.ad}</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-navy mb-4">
          {s.ad} Araç Değer Kaybı<br />
          <span className="text-brand">Danışmanlığı</span>
        </h1>
        <p className="text-slate-500 text-lg mb-8 leading-relaxed">
          {s.ad}&apos;da kaza mı geçirdiniz? Uzman ekibimiz araç değer kaybınızı hesaplar, sigorta şirketiyle müzakere eder ve hakkınızı almanızı sağlar.
          {' '}<strong className="text-navy">{s.nufus} nüfuslu {s.ad}&apos;da</strong> tüm sigorta şirketleriyle çalışıyoruz.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            ['⚡', 'Ücretsiz Hesaplama', 'Araç bilgilerinizi girin, tahmini değer kaybınızı öğrenin'],
            ['📞', '24 Saat Dönüş', `${s.ad} bölgesindeki uzmanımız sizi arar`],
            ['⚖️', 'Hakkınızı Alın', 'Sigorta şirketinden eksiksiz tazminat'],
          ].map(([icon, title, desc]) => (
            <div key={title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="text-3xl mb-2">{icon}</div>
              <div className="font-bold text-navy text-sm mb-1">{title}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>

        <div className="bg-brand/5 border border-brand/20 rounded-2xl p-6 mb-10">
          <h2 className="font-display text-2xl font-bold text-navy mb-3">{s.ad}&apos;da Değer Kaybı Nasıl Talep Edilir?</h2>
          <ol className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-3"><span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">1</span>Hesaplama formumuzu doldurun veya bizi arayın</li>
            <li className="flex gap-3"><span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">2</span>Kaza tutanağı ve onarım faturasını hazırlayın</li>
            <li className="flex gap-3"><span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">3</span>Uzmanımız karşı tarafın sigortasına başvuru yapar</li>
            <li className="flex gap-3"><span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">4</span>Tazminatınız hesabınıza geçer</li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/deger-kaybi-hesaplama"
            className="bg-brand hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-center">
            {s.ad} İçin Ücretsiz Hesapla →
          </Link>
          <Link href="/danisma"
            className="bg-navy hover:bg-navy/90 text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-center">
            Ücretsiz Danışma Al
          </Link>
        </div>
      </div>
    </>
  )
}
