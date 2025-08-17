'use client'

import { useRef, useEffect } from 'react'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    // Cuando termina, aplicamos fade y reiniciamos suavemente
    const handleEnded = () => {
      v.classList.add('opacity-0') // fade out
      setTimeout(() => {
        v.currentTime = 0
        v.play()
        v.classList.remove('opacity-0') // fade in
      }, 100) // espera 0.3s antes de reiniciar
    }

    v.addEventListener('ended', handleEnded)
    return () => {
      v.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      // ❌ quitamos loop para que podamos controlar el reinicio
      className="fixed top-0 left-0 w-full h-full object-cover -z-10 transition-opacity duration-500"
    >
      <source src="/bg-space.webm" type="video/webm" />
      Tu navegador no soporta video en background.
    </video>
  )
}