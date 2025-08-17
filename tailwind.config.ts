import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        // usamos variables definidas en layout.tsx con next/font
        sans: ['var(--font-inter)'],
        display: ['var(--font-poppins)'],
      },
      colors: {
        primary: '#2563EB',
        secondary: '#10B981',
        neutral: {
          900: '#1F2937',
          700: '#374151',
          600: '#6B7280',
          100: '#F3F4F6',
        },
      },
      borderRadius: { '2xl': '1rem' },
      boxShadow: { soft: '0 8px 28px rgba(0,0,0,0.08)' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config