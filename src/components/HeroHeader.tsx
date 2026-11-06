// === COMPONENT: HeroHeader ===
export default function HeroHeader() {
  return (
    <div className="relative z-50 w-full flex justify-between items-center px-20 py-4  border-b border-white/10 backdrop-blur-xl">
      {/* Header Logo Btn */}
      <button
        className="relative group flex items-center gap-3 cursor-pointer"
        type="button"
        aria-label="Home"
      >
        <div className="relative flex items-center justify-center size-10 border border-white/0 transition-all duration-300">
          <img
            width={200}
            height={200}
            className="w-6 h-6 object-contain -rotate-90 transition-transform duration-500 group-hover:rotate-0"
            src="/assets/logos/kr-logo-white.png"
            alt="KR Logo"
          />
          <span
            className="
            translate-x-5 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 group-hover:translate-x-0 transition-all 
            absolute -top-px -left-px size-2 border-t border-l border-primary"
          />
          <span
            className="
            -translate-x-5 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 group-hover:translate-x-0 transition-all 
            absolute -bottom-px -right-px size-2 border-b border-r border-primary"
          />
        </div>

        <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase">
          Portfolio
        </span>
      </button>

      {/* Header Contact Btn */}
      <button
        className="relative group flex items-center gap-4 px-5 py-2 border border-white/10 bg-white/[0.02] hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
        type="button"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-40" />
          <span className="relative size-2 rounded-full bg-primary shadow-[0_0_12px_rgba(255,0,77,0.9)]" />
        </span>

        <span className="text-[10px] font-medium tracking-[0.25em] text-white/80 uppercase group-hover:text-white transition-colors font-mono">
          Contact
        </span>

        <span className="text-primary/50 text-xs transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </button>
    </div>
  );
}
