export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-3 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center">
          <img src="/whitelogo-nobg.png" alt="Plut0x" className="h-8 w-auto object-contain" />
        </div>
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
        >
          <span className="text-xl">𝕏</span>
          <span>Follow us on X for latest Updates.</span>
        </a>
      </div>
    </footer>
  );
}