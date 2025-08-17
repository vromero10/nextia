import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGfm] }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { mdxRs: true },
  pageExtensions: ['ts', 'tsx', 'mdx']
}

export default withMDX(nextConfig)