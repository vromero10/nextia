import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import FancyCard from '@/components/FancyCard'

export default function Page() {
  return (
    <>
      <Header />
      <main className="space-y-12">
        <Hero />

        <Section id="ia" title="Inteligencia Artificial">
          <FancyCard
            ctas={[
              { href: '/blog', label: 'Ver casos y demos →' },
              { href: '/contacto', label: 'Hablemos', variant: 'primary' },
            ]}
          >
            Promovemos el uso de Inteligencia Artificial responsable y ético en Arequipa y LATAM.
            Mantente al día con noticias, herramientas y casos reales.
          </FancyCard>
        </Section>

        <Section id="auto" title="Automatización">
          <FancyCard ctas={[{ href: '/blog', label: 'Aprende cómo →', variant: 'primary' }]}>
            Flujos y APIs para eliminar tareas repetitivas, integrar sistemas y acelerar decisiones.
          </FancyCard>
        </Section>

        <Section id="sec" title="Ciberseguridad">
          <FancyCard
            ctas={[
              { href: '/ciberseguridad', label: 'Explorar contenidos →', variant: 'primary' },
            ]}
          >
            Entérate de las últimas tendencias en ciberseguridad y aplícalas en tu empresa.
          </FancyCard>
        </Section>

        <Section id="aqp" title="Arequipa Tech">
          <FancyCard ctas={[{ href: '/arequipa-tech', label: 'Próximos eventos →', variant: 'primary'  }]}>
            Impulsamos el ecosistema local: eventos, charlas y proyectos que conectan innovación y empresa.
          </FancyCard>
        </Section>
      </main>
      <Footer />
    </>
  )
}