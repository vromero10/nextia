// src/lib/mdx.ts
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function slugFromFilename(filename: string) {
  return filename.replace(/\.mdx?$/, '')
}

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  content: string
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await fs.readdir(BLOG_DIR)
  const posts = await Promise.all(
    files.filter(f => f.endsWith('.mdx')).map(async (file) => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = await fs.readFile(path.join(BLOG_DIR, file), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: (data as any).title ?? slug,
        date: (data as any).date ?? '',
        excerpt: (data as any).excerpt ?? '',
        category: (data as any).category ?? (data as any).categories?.[0] ?? '',
        content
      }
    })
  )
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`)
  try {
    const raw = await fs.readFile(fullPath, 'utf8')
    const { data, content } = matter(raw)
    return {
      slug,
      title: (data as any).title ?? slug,
      date: (data as any).date ?? '',
      excerpt: (data as any).excerpt ?? '',
      category: (data as any).category ?? (data as any).categories?.[0] ?? '',
      content
    }
  } catch {
    return null
  }
}

// --- IA helpers: leer desde content/ia ----------------------------

// Si ya tienes un tipo Post, reutilízalo. Si no, usa este:
export type IAPostMeta = {
  slug: string
  title: string
  date: string
  excerpt?: string
  image?: string
}

const IA_DIR = path.join(process.cwd(), 'content', 'ia')

async function listIAMdxFiles() {
  const files = await fs.readdir(IA_DIR)
  return files.filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
}

export async function getAllIAPosts(): Promise<IAPostMeta[]> {
  const files = await listIAMdxFiles()

  const items = await Promise.all(files.map(async (file) => {
    const full = path.join(IA_DIR, file)
    const raw = await fs.readFile(full, 'utf8')
    const { data } = matter(raw)
    return {
      slug: slugFromFilename(file),
      title: data.title ?? slugFromFilename(file),
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      image: data.image ?? '',
    } as IAPostMeta
  }))

  // ordena por fecha desc si existe
  return items.sort((a, b) => (a.date > b.date ? -1 : 1))
}

// Si en tu blog ya renderizas MDX a React, replica ese método aquí.
// Este ejemplo devuelve content "raw" para que lo renderices como ya lo haces.
export async function getIAPostBySlug(slug: string) {
  const file = path.join(IA_DIR, `${slug}.mdx`)
  const raw = await fs.readFile(file, 'utf8')
  const { data, content } = matter(raw)
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      image: data.image ?? '',
    },
    mdxSource: content, // adapta a tu pipeline de MDX (igual que en blog)
  }
}

// --- AUTOMATIZACIÓN helpers: content/automatizacion ----------------
export type AutoPostMeta = {
  slug: string
  title: string
  date: string
  excerpt?: string
  image?: string
}

const AUTO_DIR = path.join(process.cwd(), 'content', 'automatizacion')

async function listAutoMdxFiles() {
  const files = await fs.readdir(AUTO_DIR)
  return files.filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
}

export async function getAllAutoPosts(): Promise<AutoPostMeta[]> {
  const files = await listAutoMdxFiles()
  const items = await Promise.all(
    files.map(async (file) => {
      const full = path.join(AUTO_DIR, file)
      const raw = await fs.readFile(full, 'utf8')
      const { data } = matter(raw)
      return {
        slug: slugFromFilename(file),
        title: data.title ?? slugFromFilename(file),
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
        image: data.image ?? '',
      } as AutoPostMeta
    })
  )
  // Orden por fecha desc
  return items.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getAutoPostBySlug(slug: string) {
  const file = path.join(AUTO_DIR, `${slug}.mdx`)
  const raw = await fs.readFile(file, 'utf8')
  const { data, content } = matter(raw)
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      image: data.image ?? '',
    },
    mdxSource: content, // usa el mismo renderer que en blog/ia
  }
}

// --- CIBERSEGURIDAD helpers: content/ciberseguridad ----------------


export type SecPostMeta = {
  slug: string
  title: string
  date: string
  excerpt?: string
  image?: string
}

const SEC_DIR = path.join(process.cwd(), 'content', 'ciberseguridad')

async function listSecMdxFiles() {
  const files = await fs.readdir(SEC_DIR)
  return files.filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
}

export async function getAllSecPosts(): Promise<SecPostMeta[]> {
  const files = await listSecMdxFiles()
  const items = await Promise.all(
    files.map(async (file) => {
      const full = path.join(SEC_DIR, file)
      const raw = await fs.readFile(full, 'utf8')
      const { data } = matter(raw)
      return {
        slug: slugFromFilename(file),
        title: data.title ?? slugFromFilename(file),
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
        image: data.image ?? '',
      } as SecPostMeta
    })
  )
  return items.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getSecPostBySlug(slug: string) {
  const file = path.join(SEC_DIR, `${slug}.mdx`)
  const raw = await fs.readFile(file, 'utf8')
  const { data, content } = matter(raw)
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      image: data.image ?? '',
    },
    mdxSource: content,
  }
}