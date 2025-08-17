import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ArequipaTechPage() {
  const eventos = [
    { fecha: '2025-09-05', titulo: 'Meetup IA & Automatización', lugar: 'Arequipa — Centro' },
    { fecha: '2025-09-19', titulo: 'Charla: Agentes para soporte TI', lugar: 'Arequipa — Universitaria' }
  ]
  return (
    <>
      <Header />
      <main className="py-12">
        <h1 className="text-3xl font-bold">Arequipa Tech</h1>
        <p className="mt-2 text-neutral-600">Calendario de eventos, charlas y oportunidades para la comunidad.</p>
        <ul className="mt-8 space-y-4">
          {eventos.map(e => (
            <li key={e.fecha} className="border rounded-2xl p-4">
              <div className="font-medium">{e.titulo}</div>
              <div className="text-sm text-neutral-600">{e.fecha} · {e.lugar}</div>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}