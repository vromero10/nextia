import { NextResponse } from 'next/server'

type Payload = {
  name?: string
  email?: string
  message?: string
  website?: string // honeypot
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export async function POST(req: Request) {
  const body = (await req.json()) as Payload

  // Honeypot: si viene con contenido, cortar (probable bot)
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim().toLowerCase()
  const message = (body.message ?? '').trim()

  // Validaciones mínimas (server-side)
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Completa todos los campos' }, { status: 400 })
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: 'Correo no válido' }, { status: 400 })
  }
  if (message.length < 10) {
    return NextResponse.json({ error: 'El mensaje es muy corto' }, { status: 400 })
  }

  // TODO: Integrar envío de correo (Resend/Sendgrid/Mailgun)
  // - Ejemplo futuro con Resend:
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'GenIAtech <noreply@geniatech.dev>',
  //   to: 'tucorreo@geniatech.dev',
  //   subject: `Nuevo contacto: ${name}`,
  //   reply_to: email,
  //   text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
  // })

  console.log('[CONTACT]', { name, email, message }) // Solo para dev

  return NextResponse.json({ ok: true }, { status: 200 })
}