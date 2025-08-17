'use client'

import Link from 'next/link'

type Cta = { href: string; label: string; variant?: 'primary' | 'ghost' }

export default function FancyCard({
  title,
  children,
  ctas = [],
}: {
  title?: string
  children: React.ReactNode
  ctas?: Cta[]
}) {
  return (
    <div
  className="
    relative rounded-3xl
    transition-transform duration-300 hover:-translate-y-1
    before:absolute before:inset-0 before:rounded-3xl before:p-[1px]
    before:bg-gradient-to-r before:from-blue-500/40 before:via-fuchsia-500/30 before:to-emerald-500/40
    before:opacity-60 hover:before:opacity-90 before:transition
    card-glow
  "
>
      {/* inner glass */}
      <div className="relative rounded-3xl bg-black/45 backdrop-blur-md border border-white/10 p-6 md:p-8">
        {/* spark decorativa */}
        <div className="absolute -top-2 -left-2 h-3 w-3 rounded-full bg-blue-400/70 spark" />
        {title && <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>}

        <div className="text-white font-semibold leading-relaxed">{children}</div>

        {ctas.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
           {ctas.map((c) =>
  c.variant === 'primary' ? (
    <Link
      key={c.label}
      href={c.href}
      className="
        px-5 py-2 rounded-lg font-semibold
        bg-white text-black
        hover:bg-gray-200
        transition
      "
    >
      {c.label}
    </Link>
  ) : (
    <Link
      key={c.label}
      href={c.href}
      className="
        text-white
        hover:text-gray-300
        transition
      "
    >
      {c.label}
    </Link>
  )
)}
          </div>
        )}
      </div>
    </div>
  )
}