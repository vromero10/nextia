import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Link from 'next/link'

export default function CiberseguridadPage() {
  const destacados = [
    {
      slug: '2025-08-16-ciberseguridad-mvp',
      title: 'Ciberseguridad para tu MVP en Vercel',
      excerpt: 'Hardening, cabeceras seguras y mejores prácticas para proteger aplicaciones modernas.'
    }
  ]

  return (
    <>
      <Header />
      <main className="space-y-12">
        <Section id="ciberseguridad" title="Ciberseguridad">
          <p className="text-muted">Guías y prácticas para proteger aplicaciones modernas.</p>

          <ul className="mt-8 grid md:grid-cols-2 gap-6">
            {destacados.map(p => (
              <li key={p.slug} className="p-4 rounded-2xl border border-white/10 bg-black/20 hover:bg-black/40 transition">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${p.slug}`} className="hover:text-primary">{p.title}</Link>
                </h3>
                <p className="text-sm text-muted">{p.excerpt}</p>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  )
}