import type { Metadata } from 'next'
import Link from 'next/link'
import { getLatestPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Kaza Sonrası Değer Kaybı Danışmanlığı | KazaHak',
  description: 'Kaza mı geçirdiniz? Araç değer kaybınızı ücretsiz hesaplayın. Uzman danışmanlık ile sigorta şirketinden hakkınızı alın.',
}

export default function HomePage() {
  const posts = getLatestPosts(3)
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-[#162040] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/35 rounded-full px-4 py-1.5 text-sm text-orange-200 font-semibold mb-6">
            ⚡ Ücretsiz • Anında Hesaplama • Uzman Danışmanlık
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-4 leading-none tracking-tight">
            Kaza Mı Geçirdiniz?<br/>
            <span className="text-brand">Hakkınızı Bilin.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Aracınız tamir edilse bile piyasa değeri düşer. Bu kaybı sigorta şirketinden talep etme{' '}
            <strong className="text-white/85">hakkınız var.</strong> Ücretsiz hesaplayın, uzmanımızla görüşün.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/deger-kaybi-hesaplama"
              className="bg-brand hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
              Değer Kaybını Hesapla →
            </Link>
            <Link href="/danisma"
              className="bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors border border-white/20">
              Ücretsiz Danışma
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          {[['2.400+','Değerlendirilen Dosya'],['₺4.2M+','Kazanılan Tazminat'],['%94','Başarı Oranı'],['24sa','Yanıt Süresi']].map(([v,l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl font-bold text-brand">{v}</div>
              <div className="text-white/40 text-xs mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-navy text-center mb-2">Hizmetlerimiz</h2>
          <p className="text-slate-400 text-center mb-10 text-sm">Kazadan sonra her ihtiyacınız için yanınızdayız</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon:'🔍', title:'Değer Kaybı Danışmanlığı', desc:'Kaza sonrası araç değer kaybınızı hesaplayın. Sigorta şirketinden doğru tazminatı alın.', href:'/deger-kaybi-hesaplama', cta:'Hesapla' },
              { icon:'🔧', title:'Maddi Hasar Takibi', desc:'Onarım sürecinde eksper desteği, servis yönlendirme ve sigorta müzakeresi hizmetleri.', href:'/hizmetler', cta:'Bilgi Al' },
              { icon:'⚖️', title:'Yaralanmalı Kaza', desc:'İşgücü kaybı, tedavi masrafı ve manevi tazminat için uzman hukuk bürosu yönlendirmesi.', href:'/hizmetler', cta:'Bilgi Al' },
            ].map(s => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-display text-2xl font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href={s.href} className="text-brand font-bold text-sm hover:underline">{s.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-navy text-center mb-2">Nasıl Çalışır?</h2>
          <p className="text-slate-400 text-center mb-12 text-sm">Kazadan tazminata 3 adım</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n:'01', icon:'🧮', title:'Hesapla', desc:'Araç ve hasar bilgilerini gir. Saniyeler içinde tahmini değer kaybını öğren.' },
              { n:'02', icon:'📞', title:'Danış', desc:'Uzman danışmanımız seni arar, dosyayı inceler ve strateji belirler.' },
              { n:'03', icon:'⚖️', title:'Hakkını Al', desc:'Sigorta şirketi veya dava yoluyla hak ettiğin tazminatı al.' },
            ].map(s => (
              <div key={s.n} className="text-center">
                <div className="text-5xl mb-3">{s.icon}</div>
                <div className="text-brand font-display font-bold text-xs tracking-widest mb-1">ADIM {s.n}</div>
                <div className="font-display text-2xl font-bold text-navy mb-2">{s.title}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-navy text-center mb-2">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-slate-400 text-center mb-10 text-sm">Gerçek müvekkil deneyimleri</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { isim: 'Mehmet K.', sehir: 'Antalya', yorum: 'Kaza sonrası sigortadan sadece tamir bedelini almayı bekliyordum. KazaHak sayesinde ek olarak 38.000 ₺ değer kaybı tazminatı aldım. Süreç çok profesyoneldi.', puan: 5, arac: 'Toyota Corolla 2021' },
              { isim: 'Ayşe T.', sehir: 'İstanbul', yorum: 'Sigorta şirketi ilk başta "değer kaybı ödemeyiz" dedi. Ekibin müdahalesiyle 3 haftada 52.000 ₺ ödeme yapıldı. Kesinlikle tavsiye ederim.', puan: 5, arac: 'BMW 320i 2022' },
              { isim: 'Hasan Y.', sehir: 'İzmir', yorum: 'Online hesaplama aracı çok kullanışlı. Araç bilgilerimi girdim, tahmini tutarı öğrendim. Danışmanları da çok ilgili ve bilgiliydi.', puan: 5, arac: 'Volkswagen Golf 2020' },
            ].map(t => (
              <div key={t.isim} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
                <div className="flex text-brand mb-3 text-lg">{'★'.repeat(t.puan)}</div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4 italic">&ldquo;{t.yorum}&rdquo;</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-navy text-sm">{t.isim}</p>
                  <p className="text-slate-400 text-xs">{t.sehir} • {t.arac}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-4xl font-extrabold text-navy">Bilgi Bankası</h2>
              <p className="text-slate-400 mt-1 text-sm">Haklarınızı öğrenin</p>
            </div>
            <Link href="/blog" className="text-brand font-bold text-sm hover:underline hidden sm:block">Tümünü Gör →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow block group">
                <div className="inline-flex bg-brand/10 text-brand text-xs font-bold px-2 py-0.5 rounded-full mb-3">{p.category}</div>
                <h3 className="font-bold text-navy text-sm leading-snug mb-2 group-hover:text-brand transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{p.excerpt}</p>
                <p className="text-xs text-slate-300 mt-3">{p.readTime} dk okuma</p>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="text-brand font-bold text-sm hover:underline mt-6 block sm:hidden text-center">Tüm yazıları gör →</Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-4 bg-gradient-to-r from-navy to-[#162040]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">Değer Kaybınızı<br/>Ücretsiz Hesaplayın</h2>
          <p className="text-white/55 mb-8">Anında sonuç, uzman değerlendirmesi.</p>
          <Link href="/deger-kaybi-hesaplama"
            className="bg-brand hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors inline-block">
            Hesaplamaya Başla →
          </Link>
        </div>
      </section>
    </>
  )
}
