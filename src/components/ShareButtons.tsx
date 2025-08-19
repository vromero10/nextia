'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Linkedin, Facebook, MessageCircle } from 'lucide-react' // 👈 importamos íconos

type Props = {
  title?: string
}

export default function ShareButtons({ title }: Props) {
  const router = useRouter()
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href)
    }
  }, [])

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${title ?? ''} - ${url}`
    )}`,
  }

  return (
    <div className="flex flex-wrap items-center gap-3 mt-8">
      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow flex items-center justify-center"
      >
        <Linkedin size={22} />
      </a>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow flex items-center justify-center"
      >
        <Facebook size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white shadow flex items-center justify-center"
      >
        <MessageCircle size={22} />
      </a>

      {/* Botón Atrás */}
      <button
        onClick={() => router.back()}
        className="ml-auto px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white "
      >
        ← Atrás
      </button>
    </div>
  )
}