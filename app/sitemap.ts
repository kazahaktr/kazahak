import { MetadataRoute } from 'next'

const BASE = 'https://kazahak.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                  lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/deger-kaybi-hesaplama`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/danisma`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/hizmetler`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/hakkimizda`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,                        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/kvkk`,                        lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/gizlilik-politikasi`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
