import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

type EventItem = {
  title: string
  start: string        // ISO ej. "2025-09-05T18:30:00-05:00"
  end?: string         // ISO (si no pones, se asume +1h)
  city?: string        // ej. "Arequipa"
  venue?: string       // ej. "Centro"
  location?: string    // texto libre; si no, se arma con city/venue
  details?: string     // aparecerá en la descripción del evento
  url?: string         // link externo “ver más”
}

// 👇 Ejemplos (ajusta libremente)
const events: EventItem[] = [
  {
    title: 'Meetup IA & Automatización',
    start: '2025-09-05T18:30:00-05:00',
    city: 'Arequipa',
    venue: 'Centro',
    details: 'Networking + demos de n8n y agentes. Evento gratuito.',
    url: 'https://www.meetup.com/ejemplo'
  },
  {
    title: 'Charla: Agentes para soporte TI',
    start: '2025-09-19T19:00:00-05:00',
    city: 'Arequipa',
    venue: 'Universitaria',
    details: 'Casos reales y buenas prácticas para helpdesk.',
    url: 'https://www.eventbrite.com/ejemplo'
  }
]

// ---- Helpers de formato / Google Calendar ----
function toDisplayDate(iso: string) {
  const d = new Date(iso)
  return new Intl.DateTimeFormat('es-PE', {
    dateStyle: 'long',
    timeStyle: 'short'
  }).format(d)
}

function toGCalDate(iso: string) {
  // YYYYMMDDTHHmmssZ
  const d = new Date(iso)
  return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

function addHours(iso: string, hours = 1) {
  const d = new Date(iso)
  d.setHours(d.getHours() + hours)
  return d.toISOString()
}

function buildGCalUrl(e: EventItem) {
  const start = toGCalDate(e.start)
  const end = toGCalDate(e.end ?? addHours(e.start, 1))
  const text = encodeURIComponent(e.title)
  const location = encodeURIComponent(
    e.location ?? [e.venue, e.city].filter(Boolean).join(' — ')
  )
  const details = encodeURIComponent(e.details ?? '')

  return `https://calendar.google.com/calendar/r/eventedit?text=${text}&dates=${start}/${end}&location=${location}&details=${details}`
}

export default function ArequipaTechPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Más espacio bajo el header; el contenido empuja al footer */}
      <main className="flex-1 mx-auto w-full max-w-4xl px-6 pt-24 pb-24">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Arequipa Tech</h1>
          <p className="mt-2 text-white/80">
            Calendario de eventos, charlas y oportunidades para la comunidad.
          </p>
        </header>

        <ul className="space-y-6">
          {events.map((ev, i) => {
            const when = toDisplayDate(ev.start)
            const place = ev.location ?? [ev.city, ev.venue].filter(Boolean).join(' — ')
            const gcal = buildGCalUrl(ev)
            return (
              <li key={i} className="section-panel p-6 md:p-8">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    {ev.title}
                  </h2>

                  <div className="text-white/70 text-sm md:text-base">
                    <span className="mr-2">{when}</span>
                    {place && <span>· {place}</span>}
                  </div>

                  {ev.details && (
                    <p className="text-white/85 leading-relaxed">
                      {ev.details}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-3 pt-2">
                    {/* Ver más (externo, nueva pestaña) */}
                    {ev.url && (
                      <a
                        href={ev.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl px-4 py-2 font-semibold bg-blue-600 text-white hover:bg-blue-500 transition"
                      >
                        Ver detalles →
                      </a>
                    )}

                    {/* Añadir a Google Calendar (fondo blanco + icono) */}
                    <a
                      href={gcal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 font-semibold hover:bg-zinc-200 transition"
                      aria-label="Añadir a Google Calendar"
                    >
                      {/* Google Calendar SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          fill="#4285F4"
                          d="M42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z"
                        />
                        <path fill="#fff" d="M12 22h24v14H12z" />
                        <path
                          fill="#34A853"
                          d="M6 6h36c2.21 0 4 1.79 4 4v6H2v-6c0-2.21 1.79-4 4-4z"
                        />
                        <path fill="#fbbc04" d="M2 16h44v6H2z" />
                        <path
                          fill="#EA4335"
                          d="M42 42H6c-2.21 0-4-1.79-4-4v-6h44v6c0 2.21 1.79 4 4 4z"
                        />
                      </svg>
                      Añadir a Google
                    </a>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </main>

      <Footer />
    </div>
  )
}