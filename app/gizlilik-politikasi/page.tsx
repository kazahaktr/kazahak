import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'KazaHak gizlilik politikası ve çerez kullanımı hakkında bilgi.',
}

export default function GizlilikPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold text-navy mb-2">Gizlilik Politikası</h1>
      <p className="text-slate-400 text-sm mb-10">Son güncelleme: Haziran 2026</p>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 prose prose-slate max-w-none">

        <h2>1. Genel Bilgi</h2>
        <p>
          KazaHak olarak gizliliğinize saygı duyuyor ve kişisel verilerinizi korumayı birincil
          önceliğimiz olarak kabul ediyoruz. Bu politika, <strong>kazahak.com</strong> adresinde
          hangi bilgilerin toplandığını ve nasıl kullanıldığını açıklamaktadır.
        </p>

        <h2>2. Toplanan Bilgiler</h2>
        <h3>Siz Verdiğinizde</h3>
        <ul>
          <li>İletişim formları aracılığıyla ad, telefon, e-posta</li>
          <li>Hesaplama aracı aracılığıyla araç ve kaza bilgileri</li>
        </ul>
        <h3>Otomatik Olarak</h3>
        <ul>
          <li>IP adresi ve konum (ülke/şehir düzeyi)</li>
          <li>Tarayıcı türü ve işletim sistemi</li>
          <li>Ziyaret edilen sayfalar ve geçirilen süre (Google Analytics)</li>
          <li>Yönlendirme kaynağı</li>
        </ul>

        <h2>3. Çerezler (Cookies)</h2>
        <p>Web sitemiz aşağıdaki çerez türlerini kullanmaktadır:</p>
        <table>
          <thead><tr><th>Çerez</th><th>Tür</th><th>Amaç</th><th>Süre</th></tr></thead>
          <tbody>
            <tr><td>_ga</td><td>Analitik</td><td>Google Analytics kullanıcı ayırt etme</td><td>2 yıl</td></tr>
            <tr><td>_ga_*</td><td>Analitik</td><td>Google Analytics oturum durumu</td><td>2 yıl</td></tr>
            <tr><td>kz_cookie</td><td>Tercih</td><td>Çerez onayı kaydı</td><td>1 yıl</td></tr>
          </tbody>
        </table>
        <p>
          Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz. Ancak bu durumda
          sitenin bazı işlevleri çalışmayabilir.
        </p>

        <h2>4. Google Analytics</h2>
        <p>
          Sitemiz, ziyaretçi davranışını analiz etmek için Google Analytics kullanmaktadır.
          Google'ın veri işleme politikasına <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">buradan</a> ulaşabilirsiniz.
          Google Analytics'i devre dışı bırakmak için <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a> eklentisini kullanabilirsiniz.
        </p>

        <h2>5. Üçüncü Taraf Hizmetler</h2>
        <ul>
          <li><strong>Supabase:</strong> Form verilerinin güvenli depolanması (AB/ABD sunucuları, GDPR uyumlu)</li>
          <li><strong>Vercel:</strong> Web sitesi barındırma</li>
          <li><strong>WhatsApp:</strong> İletişim — WhatsApp gizlilik politikası geçerlidir</li>
        </ul>

        <h2>6. Veri Güvenliği</h2>
        <p>
          Verileriniz HTTPS şifrelemesiyle iletilmekte ve güvenli veritabanlarında saklanmaktadır.
          Yetkisiz erişime karşı teknik ve idari önlemler alınmaktadır.
        </p>

        <h2>7. Haklarınız</h2>
        <p>
          KVKK kapsamındaki haklarınız için <a href="/kvkk">KVKK Aydınlatma Metni</a>ni inceleyiniz.
          Her türlü soru ve talepleriniz için: <strong>info@kazahak.com</strong>
        </p>

        <h2>8. Değişiklikler</h2>
        <p>
          Bu politika gerektiğinde güncellenebilir. Önemli değişiklikler site üzerinden
          duyurulacaktır.
        </p>
      </div>
    </div>
  )
}
