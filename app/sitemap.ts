import { MetadataRoute } from 'next'

import { blogPosts } from '@/data/blog-posts'

const BASE = 'https://kazahak.com'

const SEHIRLER = ['antalya','istanbul','ankara','izmir','bursa','adana','konya','gaziantep']

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = blogPosts.map(p => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const sehirUrls = SEHIRLER.map(il => ({
    url: `${BASE}/arac-deger-kaybi/${il}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: BASE,                                  lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/deger-kaybi-hesaplama`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/danisma`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/hizmetler`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/hakkimizda`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,                        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/kvkk`,                        lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/gizlilik-politikasi`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    ...sehirUrls,
    ...blogUrls,
  ]
}
