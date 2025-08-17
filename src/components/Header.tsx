"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8">
        
        {/* Logo / Nombre */}
        <Link href="/" className="text-3xl font-extrabold text-white tracking-wide hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition">
          GenIAtech
        </Link>

        {/* Menú */}
        <nav className="flex gap-8">
          <Link href="/" className="text-lg text-white hover:text-blue-400 transition">Inicio</Link>
          <Link href="/blog" className="text-lg text-white hover:text-blue-400 transition">Blog</Link>
          <Link href="/arequipa-tech" className="text-lg text-white hover:text-blue-400 transition">Arequipa Tech</Link>
          <Link href="/contacto" className="text-lg text-white hover:text-pink-400 transition">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}