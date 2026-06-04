import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getPostBySlug } from '@/data/blog-posts'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogDetailPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  // Simple markdown-to-HTML (basic headings, bold, paragraphs)
  const renderContent = (text: string) => {
    const lines = text.split('\n')
    return lines.map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ','')}</h2>
      if (line.startsWith('### ')) return <h3 key={i}>{line.replace('### ','')}</h3>
      if (line.startsWith('- ')) return <li key={i}>{line.replace('- ','')}</li>
      if (line.startsWith('**') && line.endsWith('**')) return <p key={i}><strong>{line.replace(/\*\*/g,'')}</strong></p>
      if (line.trim() === '') return null
      return (
        <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      )
    }).filter(Boolean)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article */}
        <article className="lg:col-span-2">
          <Link href="/blog" className="text-brand text-sm font-semibold hover:underline mb-6 block">← Blog'a Dön</Link>

          <div className="inline-flex bg-brand/10 text-brand text-xs font-bold px-3 py-1 rounded-full mb-4">{post.category}</div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-navy mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-8 pb-6 border-b border-slate-100">
            <span>{new Date(post.date).toLocaleDateString('tr-TR', { day:'numeric', month:'long', year:'numeric' })}</span>
            <span>•</span>
            <span>{post.readTime} dk okuma</span>
          </div>

          <div className="prose">{renderContent(post.content)}</div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-br from-navy to-[#162040] rounded-2xl p-6 text-white text-center">
            <h3 className="font-display text-2xl font-extrabold mb-2">Değer Kaybınızı Hesaplayın</h3>
            <p className="text-white/55 text-sm mb-4">Ücretsiz, anında, uzman değerlendirmesiyle.</p>
            <Link href="/deger-kaybi-hesaplama" className="inline-block bg-brand hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              Ücretsiz Hesapla →
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Sticky CTA */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 sticky top-20">
            <h3 className="font-display text-xl font-bold text-navy mb-2">Ücretsiz Danışma</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">Değer kaybınızı hesaplayın, uzmanımız sizi arasın.</p>
            <Link href="/deger-kaybi-hesaplama" className="block w-full bg-brand hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-center text-sm transition-colors mb-2">
              Hesaplamaya Başla →
            </Link>
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '905XXXXXXXXX'}`} target="_blank" rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-center text-sm transition-colors">
              📱 WhatsApp
            </a>
          </div>

          {/* Related */}
          <div>
            <h3 className="font-display text-xl font-bold text-navy mb-4">İlgili Yazılar</h3>
            <div className="space-y-3">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="block bg-white rounded-xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="inline-flex bg-brand/10 text-brand text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5">{p.category}</div>
                  <p className="text-navy text-xs font-semibold leading-snug group-hover:text-brand transition-colors">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
