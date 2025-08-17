// src/lib/ia.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type IANote = {
  slug: string
  title: string
  date: string
  excerpt: string
  image?: string
}

const iaDirectory = path.join(process.cwd(), 'content/ia')

export function getIA(): IANote[] {
  const files = fs.readdirSync(iaDirectory)

  const notes = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const fullPath = path.join(iaDirectory, file)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      image: data.image || null,
    }
  })

  // 🔽 Aquí está la clave: ordenar por fecha DESC
  return notes.sort((a, b) => (a.date < b.date ? 1 : -1))
}