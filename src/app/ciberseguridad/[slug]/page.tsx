import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { getAllSecPosts, getSecPostBySlug } from '@/lib/mdx'

export async function generateStaticParams() {
  const posts = await getAllSecPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export default async function SecPost({ params }: { params: { slug: string } }) {
  const post = await getSecPostBySlug(params.slug)
  if (!post) return null

  const { meta, mdxSource } = post

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col">
        <article className="flex-1 mx-auto w-full max-w-3xl px-6 pt-24 pb-24">
          {meta.image && (
            <div className="section-panel overflow-hidden mb-6">
              <Image
                src={meta.image}
                alt={meta.title}
                width={1600}
                height={900}
                className="h-64 md:h-96 w-full object-cover"
                priority
              />
            </div>
          )}

          <div className="text-sm text-white/60">{meta.date}</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-white">{meta.title}</h1>

          <div className="mt-6 section-panel p-6 md:p-8">
            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: mdxSource }} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}