import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { notFound } from 'next/navigation'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <article className="prose">
          <h1>{post.title}</h1>
          <p className="text-sm text-slate-300">{post.date} · {post.category}</p>
        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </article>
      </main>
      <Footer />
    </>
  )
}