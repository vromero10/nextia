// src/lib/mdx.ts
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

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