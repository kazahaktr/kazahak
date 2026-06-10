export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: number
  category: 'Rehber' | 'Hukuk' | 'Sigorta' | 'Vaka'
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'deger-kaybi-nedir-nasil-alinir',
    title: 'Değer Kaybı Nedir? Kaza Sonrası Hakkınız Olan Tazminat',
    excerpt: 'Trafikte kazaya karışan araçlar, onarıldıktan sonra bile piyasa değerini yitirir. Bu kayıp için sigorta şirketinden tazminat talep etme hakkınız var.',
    date: '2026-05-20',
    readTime: 6,
    category: 'Rehber',
    featured: true,
    content: `## Değer Kaybı Nedir?

Karayolları Trafik Kanunu kapsamında, trafik kazası geçiren bir araç onarılsa dahi piyasa değeri düşer. "Değer kaybı" olarak bilinen bu hak, 2918 sayılı Karayolları Trafik Kanunu ve Yargıtay kararları çerçevesinde güvence altındadır.

Yani: **Aracınız tamamen tamir edilse bile**, "kaza geçirmiş araç" olarak değer kaybeder. Bu farkı talep etmek yasal hakkınızdır.

## Kim Talep Edebilir?

Değer kaybı tazminatı talep edebilmek için şu şartlar aranır:

- Kazada **karşı tarafın kusurlu** olması
- Hasarın **onarım gerektiren boyutta** olması
- Kaza tarihinden itibaren **2 yılın** geçmemiş olması (zamanaşımı)

## Hesaplama Nasıl Yapılır?

Değer kaybı tutarı; aracın piyasa değeri, yaşı, kilometresi, hasar bölgesi ve onarım bedelinin araç değerine oranına göre hesaplanır.

**Genel formül:** Piyasa Değeri × Yaş-KM Katsayısı × Hasar Şiddeti × Bölge Katsayısı

## Sigortadan Nasıl Talep Edilir?

1. Karşı tarafın sigorta şirketine başvurursunuz
2. Eksper randevusu verilir, araç incelenir
3. Sigorta şirketi teklifini sunar (genellikle gerçeğin altında gelir)
4. Teklif kabul edilmezse Sigorta Tahkim Komisyonu veya dava yoluna gidilir

**Uzman danışmanlık bu süreçte kritik fark yaratır.**`,
  },
  {
    slug: 'sigorta-deger-kaybi-odemezse',
    title: 'Sigorta Şirketi Değer Kaybı Ödemezse Ne Yapmalısınız?',
    excerpt: 'Sigorta şirketleri değer kaybı taleplerini sık sık reddeder veya çok düşük teklif sunar. İşte bu durumda izlemeniz gereken adımlar.',
    date: '2026-05-25',
    readTime: 5,
    category: 'Sigorta',
    content: `## Sigorta Şirketi Neden Reddeder?

Sigorta şirketleri değer kaybı taleplerini reddetmek için çeşitli gerekçeler öne sürer:

- "Araç iyi onarıldı, değer kaybı yoktur"
- "Hasar küçük, talep kabul edilemez"
- "Eksper raporunda değer kaybı belirtilmemiş"

Bu gerekçelerin **hiçbiri hukuken geçerli değildir.**

## Adım Adım Ne Yapmalı?

**1. Yazılı Başvuru Yapın**
Sigorta şirketine değer kaybı talebi için yazılı ve iadeli taahhütlü posta ile başvurun. Bu belge ileride kanıt olacaktır.

**2. SEDDK Şikayeti**
Sigortacılık ve Özel Emeklilik Düzenleme ve Denetleme Kurumu'na sigorta.gov.tr üzerinden şikayet iletebilirsiniz.

**3. Sigorta Tahkim Komisyonu**
Mahkeme dışında hızlı ve düşük maliyetli uyuşmazlık çözüm yolu. Çoğu davada 3-4 ay içinde sonuçlanır.

**4. Hukuki Dava**
Asliye Hukuk Mahkemesi'ne başvurabilirsiniz. Hukuk bürosu desteği ile yürütülen davalar daha yüksek tazminatla sonuçlanır.

Uzman danışman ile çalışmak sürecinizi hızlandırır ve sonucu iyileştirir.`,
  },
  {
    slug: 'yarali-kazalarda-tazminat-haklari',
    title: 'Yaralanmalı Kazalarda Tazminat Haklarınız',
    excerpt: 'Trafik kazasında yaralandıysanız maddi tazminat dışında da haklarınız var. İşgücü kaybı, tedavi masrafları ve manevi tazminat hakkında bilmeniz gerekenler.',
    date: '2026-06-01',
    readTime: 7,
    category: 'Hukuk',
    content: `## Yaralanmalı Kazada Hangi Tazminatları Alabilirsiniz?

Trafik kazasında yaralanan kişiler aşağıdaki tazminat kalemlerini talep edebilir:

### 1. Tedavi Masrafları
Hastane, ilaç, ameliyat, fizik tedavi ve rehabilitasyon masrafları. Belgeleyin — her harcama kanıt.

### 2. İşgücü Kaybı Tazminatı
Kazadan dolayı çalışamadığınız dönem için kaybettiğiniz gelir. Rapor+bordro ile belgelenir.

### 3. Sürekli Sakatlık Tazminatı
Kalıcı iş gücü kaybı varsa aktüer hesabıyla belirlenen tazminat.

### 4. Manevi Tazminat
Yaşanan acı ve ıstırap için mahkeme kararıyla belirlenen tutar.

### 5. Destek Tazminatı
Vefat halinde bakmakla yükümlü olunan kişilere (eş, çocuk, ana-baba) verilen tazminat.

## Zorunlu Trafik Sigortası Limitleri

Her araçta bulunması zorunlu trafik poliçesi, belirlenen limitler dahilinde tedavi ve tazminat öder. **Limit aşıldığında dava yoluna gidilir.**

**Güvence Hesabı:** Sigortalı olmayan araçla kazada bile Güvence Hesabı kapsamında tazminat alabilirsiniz.`,
  },
  {
    slug: 'deger-kaybi-hesaplama-rehberi',
    title: 'Araç Değer Kaybı Nasıl Hesaplanır? Tam Rehber',
    excerpt: 'Araç değer kaybını hesaplamak için hangi faktörler dikkate alınır? Araç yaşı, kilometre, hasar bölgesi ve onarım maliyetinin etkisi.',
    date: '2026-06-03',
    readTime: 8,
    category: 'Rehber',
    content: `## Değer Kaybı Hesaplamayı Etkileyen Faktörler

Araç değer kaybı; yasal mevzuat ve Yargıtay içtihadına göre birkaç temel faktörün çarpımıyla hesaplanır.

### 1. Araç Piyasa Değeri
Kazanın gerçekleştiği tarihteki güncel piyasa değeri esas alınır. TRAMER sistemi veya güncel 2. el ilanları referans alınabilir.

### 2. Araç Yaşı ve Kilometresi

| Araç Yaşı | 0–30k km | 30–60k km | 60–100k km | 100k+ km |
|-----------|----------|-----------|------------|----------|
| 0–1 yıl   | %30      | %27       | %24        | %20      |
| 1–3 yıl   | %25      | %22       | %18        | %14      |
| 3–5 yıl   | %19      | %16       | %13        | %10      |
| 5–7 yıl   | %14      | %11       | %9         | %7       |

### 3. Hasar Bölgesi
Ön hasar en kritik bölgedir (katsayı: 1.00). Arka hasar: 0.90, yan: 0.80, çatı: 0.85, birden fazla: 1.15.

### 4. Hasar Şiddeti (Onarım/Piyasa Değeri Oranı)
Onarım maliyetinin araç değerine oranı %10 altında ise katsayı 0.80, %20–30 arası ise 1.15 olur.

## Örnek Hesaplama

**2021 Toyota Corolla — 45.000 km — Ön Hasar**
- Piyasa değeri: ₺900.000
- Onarım bedeli: ₺120.000 (hasar oranı: %13,3)
- Yaş-KM katsayısı: 0.22 | Şiddet: 1.00 | Bölge: 1.00
- **Sonuç: ₺198.000 değer kaybı tahmini**

Kendi aracınız için hesaplama aracımızı kullanabilirsiniz.`,
  },
]

  {
    slug: '2026-arac-deger-kaybi-basvurusu',
    title: '2026 Araç Değer Kaybı Başvurusu: Adım Adım Rehber',
    excerpt: '2026 yılında araç değer kaybı başvurusu nasıl yapılır? Güncel limitler, başvuru dilekçesi ve dikkat edilmesi gerekenler.',
    date: '2026-06-05',
    readTime: 7,
    category: 'Rehber',
    featured: true,
    content: `## 2026 Yılında Değer Kaybı Başvurusu

2026 yılı itibarıyla araç değer kaybı tazminatı talep süreci, Sigorta Bilgi ve Gözetim Merkezi (SBGM) ve güncel Yargıtay içtihatları çerçevesinde yürütülmektedir.

## Başvuru İçin Gerekli Belgeler

- Trafik kaza tespit tutanağı (veya kaza raporu)
- Araç ruhsatı fotokopisi
- Hasar fotoğrafları ve onarım faturası
- Kasko/trafik poliçe bilgileri
- Kimlik fotokopisi

## Başvuru Adımları

**1. Karşı Tarafın Sigortasına Başvurun**
Karşı tarafın KASKO veya zorunlu trafik sigortasına yazılı başvuru yapın. KEP (Kayıtlı Elektronik Posta) ile göndermek önerilir — ispat kolaylığı sağlar.

**2. 15 İş Günü Bekleyin**
Sigorta şirketi yasal olarak 15 iş günü içinde yanıt vermek zorundadır.

**3. Teklif Değerlendirmesi**
Gelen teklif genellikle gerçek değerin %30–50 altında gelir. KazaHak gibi uzman danışmanlık firmalarıyla teklifi değerlendirin.

**4. Tahkim veya Dava**
Teklif reddedilirse Sigorta Tahkim Komisyonu (SİGORTA TAHKİM) devreye girer. Başvuru ücreti düşük, süreç ortalama 3–4 ay sürer.

## 2026 Güncel Limitler

Zorunlu trafik sigortasında 2026 yılı teminat limitleri SEDDK tarafından güncellenmektedir. Güncel limitler için sigorta.gov.tr adresini takip edin.`,
  },
  {
    slug: 'sigorta-tahkim-basvurusu',
    title: 'Sigorta Tahkim Komisyonu Başvurusu Nasıl Yapılır?',
    excerpt: 'Sigorta şirketi değer kaybı ödemezse tahkim yolu en hızlı çözümdür. Başvuru süreci, ücreti ve dikkat edilmesi gerekenler.',
    date: '2026-06-07',
    readTime: 6,
    category: 'Sigorta',
    content: `## Sigorta Tahkim Nedir?

Sigorta Tahkim Komisyonu (STK), sigorta şirketiyle uyuşmazlık halinde mahkemeye gitmeden önce başvurulan bağımsız bir çözüm merkezidir. 5684 sayılı Sigortacılık Kanunu çerçevesinde faaliyet gösterir.

## Neden Tahkim?

- Mahkemeye göre çok daha hızlı (3–4 ay)
- Düşük başvuru ücreti
- Kararlar sigorta şirketleri için bağlayıcı
- Online başvuru imkânı (sigortatahkim.org.tr)

## Başvuru Şartları

1. Önce sigorta şirketine yazılı başvuru yapmış olmak
2. Şirketin ret veya yetersiz teklif vermesi
3. 15 iş günlük bekleme süresinin dolması

## Başvuru Ücreti

Talep miktarına göre değişir. 2026 yılı için sigortatahkim.org.tr üzerindeki güncel tarife geçerlidir. Karar lehinize çıkarsa başvuru ücreti karşı taraftan alınır.

## Süreç

1. Online başvuru formu + belgeler
2. Hakem atanması
3. Tarafların savunma sunması
4. Hakem kararı (genellikle 3–4 ay)
5. İtiraz hakkı (15 gün)

Tahkim sürecinde uzman danışmanlık, doğru belge hazırlığı ve talep miktarının isabetli belirlenmesi açısından kritik fark yaratır.`,
  },
  {
    slug: 'hasar-farki-nedir',
    title: 'Hasar Farkı Nedir? Kasko ile Fark Tazminatı',
    excerpt: 'Kasko poliçeniz hasar anındaki araç değerine göre değil, poliçe değerine göre ödeme yapıyorsa aradaki farkı talep edebilirsiniz.',
    date: '2026-06-08',
    readTime: 5,
    category: 'Sigorta',
    content: `## Hasar Farkı Nedir?

Kasko sigortasında "hasar farkı" ya da "fark tazminatı", poliçede yazan sigorta bedeli ile aracın gerçek piyasa değeri arasındaki farktan doğan ek tazminat hakkıdır.

## Neden Ortaya Çıkar?

Araç fiyatları enflasyonla hızla yükselir. Poliçe yılbaşında 800.000 ₺ üzerinden yapılmışsa ama hasar anında araç 1.100.000 ₺ ediyorsa, sigorta şirketi yalnızca 800.000 ₺ öder. Aradaki 300.000 ₺ fark için ek talep hakkınız doğabilir.

## Hangi Durumlarda Uygulanır?

- Aracın tam hasar (pert) ilan edilmesi
- Poliçe bedelinin gerçek değerin altında kalması
- Yeni değer sigortası eklenmemiş eski poliçeler

## Nasıl Talep Edilir?

1. Hasar anındaki güncel araç değerini belgelendirin (2. el ilan fiyatları, eksper raporu)
2. Sigorta şirketine yazılı fark tazminatı talebinde bulunun
3. Red halinde Sigorta Tahkim veya dava yolu

## Yeni Değer Sigortası

Bazı kasko poliçeleri "yeni değer güvencesi" içerir — hasar anında güncel piyasa değeri ödenir. Poliçenizi kontrol edin; bu güvence yoksa yenileme döneminde ekletebilirsiniz.`,
  },
  {
    slug: 'pert-arac-tazminati',
    title: 'Pert Araç Tazminatı: Hakkınızın Tamamını Nasıl Alırsınız?',
    excerpt: 'Aracınız pert ilan edildiyse sigorta şirketinin teklifini doğrudan kabul etmeyin. Gerçek piyasa değerini öğrenin ve farkı talep edin.',
    date: '2026-06-09',
    readTime: 8,
    category: 'Rehber',
    featured: true,
    content: `## Pert Araç Nedir?

Onarım maliyeti, aracın hasar öncesi piyasa değerinin %70'ini (kasko poliçelerinde genellikle %80) aşıyorsa araç "pert" (tam hasar) ilan edilir. Bu durumda onarım yapılmaz; araç değeri ödenir.

## Sigorta Şirketi Ne Öder?

Zorunlu trafik sigortası: Karşı tarafın kusurlu olduğu pert kazalarında kaza tarihindeki piyasa değeri ödenir.

Kasko: Poliçede yazılı sigorta bedeli ödenir (güncel değer değil!).

## Neden Düşük Teklif Gelir?

- Sigorta eksperleri genellikle düşük piyasa değeri baz alır
- Poliçe bedeli güncel değerin gerisinde kalabilir
- Hurda değeri yüksek gösterilerek net ödeme düşürülür

## Hesaplama Örneği

**2022 model araç — piyasa değeri 1.200.000 ₺**
- Sigorta teklifi: 950.000 ₺ (hurda payı 120.000 ₺ düşüldü)
- Gerçek piyasa değeri: 1.200.000 ₺
- **Fark: 250.000 ₺ — talep edilebilir**

## İtiraz Yolları

1. Bağımsız eksper raporu alın
2. Sigorta şirketine yazılı itiraz
3. Sigorta Tahkim Komisyonu (3–4 ay, düşük maliyet)
4. Asliye Ticaret/Hukuk Mahkemesi

Pert araç davalarında uzman desteği özellikle kritik — sigorta şirketleri bu dosyalarda en sert pazarlığı yapar.`,
  },

export function getPostBySlug(slug: string) {
  return blogPosts.find(p => p.slug === slug)
}

export function getLatestPosts(n = 3) {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, n)
}
