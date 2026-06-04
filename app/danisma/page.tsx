import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ücretsiz Danışma — 24 Saat İçinde Dönüş',
  description: 'Kaza ve değer kaybı hakkında ücretsiz danışma alın. Bilgilerinizi bırakın, uzmanımız 24 saat içinde sizi arasın.',
}

export default function DanismaPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="font-display text-5xl font-extrabold text-navy mb-3">Ücretsiz Danışma</h1>
        <p className="text-slate-400">Bilgilerinizi bırakın, uzmanımız <strong className="text-navy">24 saat içinde</strong> sizi arasın.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
        {/* WhatsApp Option */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-4">
          <div className="text-3xl">📱</div>
          <div className="flex-1">
            <p className="font-bold text-navy text-sm">Hızlı Yol: WhatsApp'tan Yazın</p>
            <p className="text-slate-500 text-xs mt-0.5">Anında cevap — bilgileri mesajla iletin</p>
          </div>
          <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '905XXXXXXXXX'}`} target="_blank" rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors shrink-0">
            WhatsApp →
          </a>
        </div>

        <div className="text-xs text-slate-400 text-center mb-6">— veya formu doldurun —</div>

        {/* Form note */}
        <div className="space-y-4">
          <p className="text-sm text-slate-500 leading-relaxed">
            Form entegrasyonu için <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">/app/danisma/page.tsx</code> dosyasına
            bir &lt;form&gt; ekleyin ve <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">/api/leads</code> endpoint&apos;ine POST edin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[['Ad Soyad *','Adınız Soyadınız'],['Telefon *','0 5XX XXX XX XX'],['E-posta','email@örnek.com'],['Araç Bilgisi','Marka, model, yıl']].map(([l,p]) => (
              <div key={l}>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">{l}</label>
                <input placeholder={p} className="w-full px-3.5 py-3 border-2 border-slate-200 rounded-xl text-sm bg-white text-slate-400 cursor-not-allowed" disabled />
              </div>
            ))}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Kaza Hakkında Kısaca</label>
            <textarea rows={3} placeholder="Kaza tarihi, hasar durumu ve sorularınız..." className="w-full px-3.5 py-3 border-2 border-slate-200 rounded-xl text-sm text-slate-400 cursor-not-allowed resize-none" disabled />
          </div>
          <div className="bg-slate-50 rounded-xl p-4 text-xs text-slate-500">
            💡 <strong>Geliştirici notu:</strong> Bu sayfa şu an placeholder olarak çalışmaktadır.
            Calculator.tsx&apos;deki form mantığını buraya kopyalayıp <code>/api/leads</code> route&apos;una bağlayın.
          </div>
        </div>
      </div>

      {/* Trust signals */}
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
