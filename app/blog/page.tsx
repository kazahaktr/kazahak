import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Blog — Değer Kaybı ve Hasar Danışmanlığı Rehberleri',
  description: 'Değer kaybı, kaza tazminatı ve sigorta süreçleri hakkında uzman rehberleri. Haklarınızı öğrenin.',
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const featured = sorted.find(p => p.featured)
  const rest = sorted.filter(p => !p.featured)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="font-display text-5xl font-extrabold text-navy mb-2">Bilgi Bankası</h1>
        <p className="text-slate-400">Değer kaybı, tazminat ve kaza hukuku hakkında her şey</p>
      </div>

      {/* Featured */}
      {featured && (
        <Link href={`/blog/${featured.slug}`} className="block bg-gradient-to-br from-navy to-[#162040] rounded-2xl p-8 mb-8 group hover:shadow-xl transition-shadow">
          <div className="inline-flex bg-brand/20 text-orange-300 text-xs font-bold px-3 py-1 rounded-full mb-4">
            ⭐ Öne Çıkan
          </div>
          <h2 className="font-display text-3xl font-extrabold text-white mb-3 group-hover:text-brand transition-colors leading-tight">{featured.title}</h2>
          <p className="text-white/55 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-white/35">
            <span>{featured.category}</span>
            <span>•</span>
            <span>{featured.readTime} dk okuma</span>
            <span>•</span>
            <span>{new Date(featured.date).toLocaleDateString('tr-TR', { day:'numeric', month:'long', year:'numeric' })}</span>
          </div>
        </Link>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow block group">
            <div className="inline-flex bg-brand/10 text-brand text-xs font-bold px-2 py-0.5 rounded-full mb-3">{p.category}</div>
            <h2 className="font-bold text-navy text-sm leading-snug mb-2 group-hover:text-brand transition-colors">{p.title}</h2>
            <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-3">{p.excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span>{p.readTime} dk</span>
              <span>•</span>
              <span>{new Date(p.date).toLocaleDateString('tr-TR', { day:'numeric', month:'short' })}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
