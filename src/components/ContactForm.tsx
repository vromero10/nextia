'use client'
import { useState } from 'react'

type FormState = { name: string; email: string; message: string; website: string }

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '', website: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((s) => ({ ...s, [field]: e.target.value }))

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setSuccess(null); setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error ?? 'Error al enviar')
      setSuccess('¡Mensaje enviado! Te responderemos pronto.')
      setForm({ name: '', email: '', message: '', website: '' })
    } catch (err: any) {
      setError(err?.message ?? 'No se pudo enviar el formulario')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
  {/* Honeypot */}
  <div className="hidden">
    <label htmlFor="website">No completar</label>
    <input
      id="website"
      name="website"
      type="text"
      value={form.website}
      onChange={onChange('website')}
      autoComplete="off"
    />
  </div>

  <div>
    <label
      htmlFor="name"
      className="block text-lg font-medium text-white"
    >
      Nombre
    </label>
    <input
      id="name"
      name="name"
      required
      value={form.name}
      onChange={onChange('name')}
      className="mt-2 w-full rounded-2xl border px-4 py-3 text-lg text-white bg-black/40 outline-none focus:ring-2 focus:ring-primary/40"
      placeholder="Tu nombre"
    />
  </div>

  <div>
    <label
      htmlFor="email"
      className="block text-lg font-medium text-white"
    >
      Correo
    </label>
    <input
      id="email"
      name="email"
      required
      type="email"
      value={form.email}
      onChange={onChange('email')}
      className="mt-2 w-full rounded-2xl border px-4 py-3 text-lg text-white bg-black/40 outline-none focus:ring-2 focus:ring-primary/40"
      placeholder="tu@correo.com"
    />
  </div>

  <div>
    <label
      htmlFor="message"
      className="block text-lg font-medium text-white"
    >
      Mensaje
    </label>
    <textarea
      id="message"
      name="message"
      required
      rows={6}
      value={form.message}
      onChange={onChange('message')}
      className="mt-2 w-full rounded-2xl border px-4 py-3 text-lg text-white bg-black/40 outline-none focus:ring-2 focus:ring-primary/40"
      placeholder="Cuéntanos sobre tu proyecto o duda"
    />
  </div>

  <div className="flex items-center gap-4">
    <button
      type="submit"
      disabled={loading}
      className="rounded-2xl bg-white px-8 py-3 text-lg font-semibold text-black hover:bg-neutral-200 disabled:opacity-60"
      aria-busy={loading}
    >
      {loading ? 'Enviando…' : 'Enviar'}
    </button>
    {success && <span className="text-lg text-emerald-400">{success}</span>}
    {error && <span className="text-lg text-red-400">{error}</span>}
  </div>
</form>
  )
}