export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/60">
        © {new Date().getFullYear()} GenIAtech — Arequipa by Victor Romero
      </div>
    </footer>
  )
}