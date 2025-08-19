// Importaciones de componentes de la aplicación
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import ShareButtons from '@/components/ShareButtons'
import { getAllAutoPosts, getAutoPostBySlug } from '@/lib/mdx'

// Importaciones para renderizar Markdown
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Función para generar rutas estáticas en tiempo de build
// Next.js usa esto para pre-renderizar todas las páginas de posts de automatizacion
export async function generateStaticParams() {
  const posts = await getAllAutoPosts()
  return posts.map(p => ({ slug: p.slug }))
}

// Componente principal de la página de post individual de automatizacion
export default async function AutoPost({ params }: { params: { slug: string } }) {
  // Obtiene el post específico usando el slug de la URL
  const post = await getAutoPostBySlug(params.slug)
  if (!post) return null

  // Extrae metadatos y contenido del post
  const { meta, mdxSource } = post

  // Formatea la fecha en español peruano
  const formattedDate = meta?.date
    ? new Date(meta.date).toLocaleDateString('es-PE', { dateStyle: 'long' })
    : ''

  return (
    <>
      {/* Header de la aplicación */}
      <Header />

      {/* Contenedor principal centrado */}
      <main className="min-h-screen flex flex-col items-center">
        {/* Artículo con ancho máximo responsivo */}
        <article className="w-full max-w-4xl lg:max-w-5xl px-6 pt-28 pb-24">
          {/* Imagen de cabecera del post (condicional) */}
          {meta.image && (
            <div className="section-panel overflow-hidden mb-6">
              <Image
                src={meta.image}
                alt={meta.title}
                width={1600}
                height={900}
                className="h-64 md:h-96 w-full object-cover"
                priority
              />
            </div>
          )}

          {/* Fecha formateada */}
          {formattedDate && (
            <div className="text-l text-white">{formattedDate}</div>
          )}

          {/* Título principal del post */}
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-white leading-tight">
            {meta.title}
          </h1>

          {/* Contenedor del contenido con estilos de panel */}
          <div className="mt-6 mx-auto w-full section-panel p-6 md:p-8">
          <div className="mt-6 section-panel p-6 md:p-8">
            {/* Artículo con estilos de tipografía mejorados */}
            <article
              className={[
                'text-white',
                'prose prose-invert', // Estilos de tipografía con tema oscuro
                '!max-w-none',        // Fuerza ancho completo
                'prose-lg lg:prose-xl', // Tamaños de texto responsivos
                'leading-relaxed text-justify', // Espaciado y alineación
                // Ajustes específicos de márgenes y listas
                'prose-headings:mx-0 prose-p:mx-0 prose-ul:pl-6',
                'prose-p:my-4 prose-li:my-2',
              ].join(' ')}
            >
              {/* Renderiza el contenido Markdown */}
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {mdxSource}
              </ReactMarkdown>
            </article>
            {/* Botones de compartir en redes sociales */}
            <ShareButtons title={meta?.title} />              
          </div>
          </div>
        </article>
      </main>

      {/* Footer de la aplicación */}
      <Footer />
    </>
  )
}