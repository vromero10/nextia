import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://geniatech.dev/', lastModified: new Date() },
    { url: 'https://geniatech.dev/ciberseguridad', lastModified: new Date() },
    { url: 'https://geniatech.dev/arequipa-tech', lastModified: new Date() },
    { url: 'https://geniatech.dev/blog', lastModified: new Date() },
  ]
}