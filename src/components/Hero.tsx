import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[560px] flex items-center justify-center text-center">
      {/* Overlay sólo en el hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
      <div className="relative z-10 mx-auto max-w-3xl px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center leading-tight drop-shadow-lg">
  Gen<span className="text-fuchsia-400">IA</span>tech: IA, Automatización y Ciberseguridad
</h1>
<p className="text-xl md:text-2xl text-gray-200 text-center mt-6">
  Inteligencia Artificial aplicada para empresas de Arequipa y LATAM.
</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="#ia" className="btn btn-primary">Descubre cómo</Link>
          <Link href="/contacto" className="btn btn-secondary">Escríbenos</Link>
        </div>
      </div>
    </section>
  )
}