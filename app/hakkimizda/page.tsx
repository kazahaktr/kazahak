import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hakkımızda — KazaHak',
  description: 'KazaHak ekibi, misyonu ve değer kaybı danışmanlığındaki uzmanlığı hakkında bilgi alın.',
}

const DEGERLER = [
  { icon: '⚖️', title: 'Dürüstlük', desc: 'Gerçekçi beklentiler belirler, abartılı vaatlerde bulunmayız.' },
  { icon: '🔍', title: 'Uzmanlık', desc: 'Yıllarca birikim ve sigorta hukuku bilgisiyle dosyanızı yönetiriz.' },
  { icon: '🤝', title: 'Şeffaflık', desc: 'Her adımı size bildiririz. Sürpriz ücret, gizli maliyet yoktur.' },
  { icon: '⚡', title: 'Hız', desc: '24 saat içinde dönüş, minimum bürokratik bekleme.' },
]

const STATS = [
  ['2.400+', 'Değerlendirilen Dosya'],
  ['₺4.2M+', 'Müvekkillere Kazandırılan'],
  ['%94', 'Başarı Oranı'],
  ['5+', 'Yıllık Deneyim'],
]

export default function HakkimizdaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Başlık */}
      <div className="text-center mb-14">
        <h1 className="font-display text-5xl font-extrabold text-navy mb-4">Hakkımızda</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          KazaHak; kaza mağdurlarının sigorta şirketleri karşısında haklarını korumak için
          kurulmuş uzman bir danışmanlık platformudur.
        </p>
      </div>

      {/* Hikaye */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-10">
        <h2 className="font-display text-3xl font-bold text-navy mb-4">Neden KazaHak?</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Türkiye&apos;de her yıl milyonlarca trafik kazası yaşanmaktadır. Bu kazaların büyük çoğunluğunda
            araç sahipleri, sigorta şirketlerinin sunduğu ilk teklife razı olmakta ve hak ettiklerinin
            çok altında tazminat almaktadır.
          </p>
          <p>
            <strong className="text-navy">Değer kaybı</strong>, kaza geçiren bir aracın ikinci el piyasasındaki
            değer düşüşüdür. Bu kayıp yasal olarak talep edilebilir olmasına rağmen, sigortacılar
            tarafından nadiren gönüllü olarak ödenmektedir.
          </p>
          <p>
            KazaHak, bu eşitsizliği gidermek için kuruldu. Dijital hesaplama aracımız, hukuki
            danışmanlık ağımız ve şeffaf süreç yönetimimizle yanınızdayız.
          </p>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="bg-navy rounded-2xl p-8 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-3xl font-bold text-brand">{v}</div>
              <div className="text-white/50 text-xs mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Değerler */}
      <h2 className="font-display text-3xl font-bold text-navy text-center mb-8">Değerlerimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        {DEGERLER.map(d => (
          <div key={d.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-4">
            <span className="text-3xl shrink-0">{d.icon}</span>
            <div>
              <h3 className="font-bold text-navy mb-1">{d.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hizmet bölgesi */}
      <div className="bg-brand/5 border border-brand/20 rounded-2xl p-6 mb-10 text-center">
        <p className="text-sm text-slate-500">
          📍 <strong className="text-navy">Merkez:</strong> Antalya &nbsp;|&nbsp;
          🌍 <strong className="text-navy">Hizmet Bölgesi:</strong> Türkiye geneli (online danışmanlık)
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-navy mb-3">Hazır mısınız?</h2>
        <p className="text-slate-400 mb-6">Ücretsiz hesaplama veya danışma için hemen başlayın.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/deger-kaybi-hesaplama"
            className="bg-brand hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors">
            ⚡ Ücretsiz Hesapla
          </Link>
          <Link href="/danisma"
            className="bg-navy hover:bg-[#162040] text-white font-bold px-8 py-3.5 rounded-xl transition-colors">
            📞 Danışma Al
          </Link>
        </div>
      </div>
    </div>
  )
}
