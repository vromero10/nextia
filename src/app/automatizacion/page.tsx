import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { getAllAutoPosts } from '@/lib/mdx'

export const dynamic = 'force-static'

export default async function AutomatizacionPage() {
  const posts = await getAllAutoPosts()

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col">
        <div className="flex-1 mx-auto w-full max-w-3xl px-6 pt-24 pb-24">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Automatización</h1>
            <p className="mt-2 text-white/80">
              Noticias, guías y casos de uso para integrar flujos y acelerar decisiones.
            </p>
          </header>

          <ul className="space-y-8">
            {posts.map(p => (
              <li key={p.slug} className="section-panel overflow-hidden">
                {p.image && (
                  <Link href={`/automatizacion/${p.slug}`}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={1600}
                      height={900}
                      className="h-56 md:h-80 w-full object-cover"
                    />
                  </Link>
                )}
                <div className="p-6 md:p-8">
                  <div className="text-sm text-white/60">{p.date}</div>
                  <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
                    <Link href={`/automatizacion/${p.slug}`} className="hover:text-white/90">
                      {p.title}
                    </Link>
                  </h2>
                  {p.excerpt && (
                    <p className="mt-3 text-lg leading-relaxed text-white/90">{p.excerpt}</p>
                  )}
                  <div className="mt-6">
                    <Link href={`/automatizacion/${p.slug}`} className="btn">
                      Leer nota completa →
                    </Link>
                  </div>
                </div>
              </li>
            ))}
            {posts.length === 0 && (
              <li className="text-white/80">Aún no hay notas de Automatización.</li>
            )}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}