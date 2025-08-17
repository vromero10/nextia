// src/app/layout.tsx
import type { Metadata } from 'next'
import '../styles/globals.css'   // 👈 cambia './globals.css' por esta ruta
import VideoBackground from '@/components/VideoBackground'

export const metadata: Metadata = {
  title: 'GenIAtech',
  description: 'IA, Automatización y Ciberseguridad',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* Color de fondo por si el video tarda */}
      <body className="font-sans text-zinc-200 bg-black">
        {/* Video siempre detrás sin bloquear clics */}
        <VideoBackground />
        {/* Contenido por encima */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
