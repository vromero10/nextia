import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen flex flex-col">     {/* <- wrapper */}
      <Header />

      <main className="flex-1 w-full mx-auto max-w-6xl px-6 pt-24 pb-20">
        <section className="section-panel p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog</h1>

          <ul className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="p-4 rounded-2xl border border-white/10 bg-black/30 hover:bg-black/50 transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-white/90">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-white/70">{post.date} · {post.category}</p>
                {post.excerpt && <p className="mt-2 text-white/80">{post.excerpt}</p>}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />                                  {/* <- estará abajo */}
    </div>
  )
}