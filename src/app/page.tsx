import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import FancyCard from '@/components/FancyCard'

export default function Page() {
  return (
    <>
      <Header />
      <main className="space-y-10">
        <Hero />



  <Section id="ia" title="🤖 Inteligencia Artificial">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
      {/* Texto dentro de FancyCard */}
      <FancyCard
        ctas={[
        { href: '/ia', label: 'Últimas noticias →', variant: 'primary' },
        //{ href: '/contacto', label: 'Hablemos', variant: 'primary' },
        ]}
      >
        <p className="whitespace-pre-line text-justify">
          Promovemos el uso de la Inteligencia Artificial de manera responsable, ética y alineada a los valores humanos, fomentando su adopción en empresas, instituciones y la sociedad en general. 
          Nuestro objetivo es acercar estas tecnologías a Arequipa y toda Latinoamérica, mostrando cómo pueden generar impacto positivo en la productividad, la innovación y la calidad de vida.
          <br /><br />
          Aquí encontrarás noticias actualizadas, herramientas prácticas y casos reales que te ayudarán a comprender las oportunidades y los retos de la IA.
        </p>
      </FancyCard>

      {/* Imagen */}
      <div className="flex justify-center">
        <img 
        src="/images/ia/ia-page.jpeg" 
        alt="Ilustración Inteligencia Artificial"
        className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition-transform"
        />
      </div>
    </div>
  </Section>




  <Section id="automatizacion" title="⚙️ Automatización">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Texto dentro de FancyCard */}
      <FancyCard
        ctas={[
            { href: '/automatizacion', label: 'Explorar herramientas →', variant: 'primary' },
            //{ href: '/contacto', label: 'Asesórame', variant: 'primary' },
          ]}
      >
        <p className="whitespace-pre-line text-justify">
          La automatización es clave para optimizar procesos, reducir errores y liberar tiempo para tareas estratégicas. 
          En GenIAtech compartimos recursos, noticias y casos prácticos sobre cómo aplicar la automatización en 
          empresas e instituciones usando Inteligencia Artificial, MCP y otras tecnologías emergentes.
          <br /><br />
          Descubre cómo implementar flujos inteligentes que aumenten la eficiencia, reduzcan costos y aceleren la innovación en tu organización.
        </p>
      </FancyCard>

      {/* Imagen */}
      <div className="flex justify-center ">
        <img 
          src="/images/auto/auto-page.jpeg"
          alt="Ilustración de Automatización"
          className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition-transform"
        />
      </div>
    </div>
  </Section>




  <Section id="ciberseguridad" title="🔒 Ciberseguridad">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    <FancyCard
        ctas={[
          { href: '/ciberseguridad', label: 'Ver tips y alertas →', variant: 'primary' },
          //{ href: '/contacto', label: 'Protéjamos tu empresa', variant: 'primary' },
        ]}
      >
        <p className="whitespace-pre-line text-justify" >
          La seguridad digital es esencial en un mundo cada vez más conectado. 
          En GenIAtech compartimos noticias, alertas de ciberataques, buenas prácticas y herramientas 
          que te ayudarán a proteger la información crítica de tu organización.
          <br /><br />
          Aprende cómo anticiparte a amenazas, responder a incidentes y fortalecer la cultura de 
          ciberseguridad en tu empresa con estrategias prácticas y actualizadas.
        </p>
      </FancyCard>
    {/* Imagen a la izquierda */}
    <div className="flex justify-center">
      <img 
        src="/images/sec/ciber-page.jpeg" 
        alt="Ilustración de Ciberseguridad"
        className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition-transform"
      />
    </div>

    {/* Texto dentro de FancyCard */}
    
  </div>
</Section>

<Section id="aqp" title="📅 Arequipa Tech">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    <FancyCard 
      ctas={[{ href: '/arequipa-tech', label: 'Próximos eventos →', variant: 'primary'  
      }]}
      >
      <p className="whitespace-pre-line text-justify">
        Impulsamos el ecosistema tecnológico local compartiendo información sobre eventos, charlas y proyectos relevantes que conectan innovación y empresa en Arequipa.
        Nuestro objetivo es mantener a la comunidad actualizada con lo que ocurre en la región: desde conferencias y talleres hasta iniciativas de startups y corporaciones.
        <br></br>
        <br></br>
        En Arequipa Tech encontrarás un espacio donde centralizamos noticias y oportunidades para que profesionales, estudiantes y empresas puedan participar, aprender y fortalecer el ecosistema tecnológico de la ciudad.
      </p>
    </FancyCard>

    <div className="flex justify-center">
      <img 
        src="/images/eventos-page.jpeg" 
        alt="Ilustración de Ciberseguridad"
        className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition-transform"
      />
    </div>
  </div>


  </Section>
    </main>
  <Footer />
  </>
  )
}