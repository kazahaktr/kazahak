'use client'
import { useState } from 'react'

const ITEMS = [
  {
    s: 'Araç değer kaybı kaç günde alınır?',
    c: 'Sigorta şirketine başvurudan sonra şirketin 15 iş günü içinde yanıt vermesi gerekir. Teklifin reddedilmesi halinde Sigorta Tahkim Komisyonu yoluyla ortalama 3–4 ayda sonuç alınır. Dava yolunda bu süre 6–12 aya çıkabilir. Uzman danışmanlıkla süreç önemli ölçüde kısalır.',
  },
  {
    s: 'Kusurlu taraf değer kaybı alabilir mi?',
    c: 'Kazada %100 kusurlu olan araç sahibi değer kaybı talep edemez. Ancak kısmi kusur durumunda (örneğin %50 karşı tarafa yüklüyse) kusursuz oranınca tazminat hakkınız doğar. Kusur tespiti trafik kaza tutanağı ve mahkeme kararlarıyla belirlenir.',
  },
  {
    s: 'Zamanaşımı süresi nedir?',
    c: 'Değer kaybı tazminatında genel zamanaşımı süresi kaza tarihinden itibaren 2 yıldır. Ancak cezayı gerektiren bir eylem varsa (taksirli yaralanma, ölüm) bu süre suçun cezasındaki zamanaşımı süresine uzar — pratikte 8 yıla kadar çıkabilir.',
  },
  {
    s: 'Şirket araçları başvurabilir mi?',
    c: 'Evet. Şirket adına kayıtlı araçlar da değer kaybı talep edebilir. Şirket aracının ticari değer kaybı bireysel araçlara oranla daha yüksek hesaplanabilir. Başvuru, şirket adına yetkili kişi tarafından yapılır.',
  },
  {
    s: 'Pert araç için değer kaybı alınabilir mi?',
    c: 'Pert araçlarda "değer kaybı" yerine "piyasa değeri tazminatı" talep edilir. Sigorta şirketi kaza tarihindeki güncel piyasa değerini ödemekle yükümlüdür. Teklif düşük gelirse tahkim veya dava yoluyla itiraz edilebilir.',
  },
  {
    s: 'Değer kaybı için avukat şart mı?',
    c: 'Sigorta şirketine ilk başvuruyu kendiniz yapabilirsiniz. Ancak teklif reddi veya düşük teklif halinde uzman danışman ya da avukat desteği hem süreci hızlandırır hem de alınan tazminat tutarını önemli ölçüde artırır. KazaHak olarak ilk danışmayı ücretsiz yapıyoruz.',
  },
  {
    s: 'Değer kaybı miktarını ne etkiler?',
    c: 'Başlıca etkenler: aracın piyasa değeri, yaşı, kilometresi, hasar bölgesi (ön/arka/yan), onarım bedelinin araç değerine oranı ve aracın kaza geçmişi. Hesaplama aracımızla tahmini tutarı saniyeler içinde öğrenebilirsiniz.',
  },
  {
    s: 'Online başvuru yapılabilir mi?',
    c: 'Evet. Sigorta şirketinin web sitesi veya KEP (Kayıtlı Elektronik Posta) yoluyla yazılı başvuru yapılabilir. KazaHak olarak başvuru sürecinizi online olarak yönetebiliyor; Türkiye\'nin her iline uzaktan hizmet veriyoruz.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl font-extrabold text-navy text-center mb-2">Sıkça Sorulan Sorular</h2>
        <p className="text-slate-400 text-center mb-10 text-sm">Değer kaybı sürecinde merak edilenler</p>
        <div className="space-y-3">
          {ITEMS.map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-navy text-sm">{item.s}</span>
                <span className={`text-brand text-xl font-bold shrink-0 transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {item.c}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
