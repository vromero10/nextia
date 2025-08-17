type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="px-6 md:px-12 lg:px-24 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
      <div className="text-lg md:text-xl leading-relaxed text-gray-200">
        {children}
      </div>
    </section>
  )
}