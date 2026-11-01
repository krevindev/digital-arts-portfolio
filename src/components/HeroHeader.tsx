// === COMPONENT: HeroHeader ===
export default function HeroHeader() {
  return (
    <div className="w-full flex justify-between items-center px-20 py-4 bg-background border-b border-neutral-800/60 backdrop-blur-sm">
      {/* Header Logo Btn */}
      <button className="w-7 cursor-pointer" type="button">
        <img
          width={200}
          height={200}
          className="object-contain -rotate-90"
          src="/assets/logos/kr-logo-white.png"
          alt="KR Logo"
        />
      </button>

      {/* Header Contact Btn */}
      <button
        className="flex justify-center items-center gap-4 px-6 py-1 rounded-sm border border-neutral-600/0 hover:border-neutral-600 transition-all"
        type="button"
      >
        <div className="flickering-light size-2 rounded-full bg-primary shadow-[0_0_15px_rgba(255,0,77,0.8)]" />
        Contact
      </button>
    </div>
  );
}
