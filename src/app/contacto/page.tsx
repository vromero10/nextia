import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function ContactoPage() {
  return (
    <>
      <Header />
      {/* 👇 aquí agregamos espacio superior */}
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <section className="section-panel p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contacto</h1>
          <p className="mt-3 text-white/80">
            ¿Tienes una idea o reto? Escríbenos y te respondemos pronto.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>

          <p className="mt-6 text-xs text-white/60">
            Al enviar este formulario aceptas nuestra política de privacidad.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}