import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: 'KazaHak KVKK kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.',
}

export default function KvkkPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold text-navy mb-2">KVKK Aydınlatma Metni</h1>
      <p className="text-slate-400 text-sm mb-10">Son güncelleme: Haziran 2026</p>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 prose prose-slate max-w-none">

        <h2>1. Veri Sorumlusu</h2>
        <p>
          Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca,
          veri sorumlusu sıfatıyla <strong>KazaHak Hasar Danışmanlık</strong> (bundan sonra "KazaHak"
          olarak anılacaktır) tarafından hazırlanmıştır.
        </p>
        <p><strong>Adres:</strong> Antalya, Türkiye<br />
        <strong>E-posta:</strong> info@kazahak.com</p>

        <h2>2. İşlenen Kişisel Veriler</h2>
        <p>Web sitemiz aracılığıyla aşağıdaki kişisel verileriniz işlenebilmektedir:</p>
        <ul>
          <li><strong>Kimlik bilgileri:</strong> Ad, soyad</li>
          <li><strong>İletişim bilgileri:</strong> Telefon numarası, e-posta adresi</li>
          <li><strong>Araç bilgileri:</strong> Marka, model, yıl, kilometre</li>
          <li><strong>Kaza bilgileri:</strong> Hasar tutarı, hasar bölgesi, onarım bedeli</li>
          <li><strong>Teknik veriler:</strong> IP adresi, tarayıcı türü, ziyaret tarihi (Google Analytics)</li>
        </ul>

        <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
        <ul>
          <li>Değer kaybı hesaplama ve danışmanlık hizmeti sunmak</li>
          <li>Talep ettiğiniz geri dönüş için sizinle iletişim kurmak</li>
          <li>Hizmet kalitesini ölçmek ve geliştirmek</li>
          <li>Yasal yükümlülükleri yerine getirmek</li>
        </ul>

        <h2>4. Hukuki Sebepler</h2>
        <p>Kişisel verileriniz KVKK'nın 5. maddesi uyarınca aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:</p>
        <ul>
          <li>Açık rızanız (danışma formu onay kutucuğu)</li>
          <li>Sözleşmenin ifası için zorunluluk</li>
          <li>Meşru menfaat</li>
        </ul>

        <h2>5. Veri Aktarımı</h2>
        <p>
          Kişisel verileriniz; hizmet sunumu amacıyla yalnızca güvenli altyapı sağlayıcılarımıza
          (Supabase – veritabanı, Vercel – barındırma) aktarılmaktadır. Üçüncü taraf pazarlama
          amaçlı paylaşım yapılmamaktadır.
        </p>

        <h2>6. Saklama Süresi</h2>
        <p>
          Kişisel verileriniz, danışmanlık sürecinin tamamlanmasından itibaren en fazla <strong>3 yıl</strong>
          saklanmaktadır. Yasal yükümlülük gerektirdiği durumlarda bu süre uzayabilir.
        </p>

        <h2>7. Haklarınız (KVKK Md. 11)</h2>
        <p>Veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
          <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
          <li>Verilerin silinmesini veya yok edilmesini isteme</li>
          <li>İşlemeye itiraz etme</li>
          <li>Zarara uğramanız hâlinde tazminat talep etme</li>
        </ul>
        <p>
          Bu haklarınızı kullanmak için <strong>info@kazahak.com</strong> adresine e-posta
          gönderebilirsiniz.
        </p>

        <h2>8. Çerezler</h2>
        <p>
          Web sitemiz analitik amaçlı çerezler (Google Analytics) kullanmaktadır. Detaylı bilgi için
          <a href="/gizlilik-politikasi"> Gizlilik Politikamızı</a> inceleyebilirsiniz.
        </p>
      </div>
    </div>
  )
}
