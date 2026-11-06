// === Types ===
interface HighlightItem {
  title: string;
  subtitle: string;
}

// === COMPONENT: ManifestoSection ===
export default function ManifestoSection() {
  // -- Data --
  const detailHighlightsData: HighlightItem[] = [
    { title: "100%", subtitle: "Digital & Vector" },
    { title: "4K", subtitle: "High Resolution" },
    { title: "24/7", subtitle: "Creative Process" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto bg-noise py-16 md:py-20 px-6 md:px-10 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
      {/* Head Part */}
      <div className="relative pl-6 md:pl-10 lg:w-[45%]">
        <div className="absolute bg-primary w-1.5 md:w-2 h-full left-0" />

        <p className="text-primary text-xs mb-2 uppercase tracking-[3px] font-mono">
          // MANIFESTO
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase text-white font-display font-black leading-[0.95]">
          Design, Ideas & Creative Work
        </h1>
      </div>

      {/* Details Part */}
      <div className="w-full lg:w-[55%]">
        <h5 className="text-white font-mono text-sm sm:text-base leading-relaxed">
          A collection of creative work focused on visual design, digital
          experiences, and experimentation across different mediums.
        </h5>

        <p className="text-neutral-400 font-mono text-sm leading-relaxed mt-4">
          Explore selected projects, personal experiments, and other works
          developed through different creative processes.
        </p>

        {/* Details Highlight */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
          {detailHighlightsData.map((item, idx) => (
            <div key={item.title} className="min-w-0">
              <h2
                className={`font-black text-3xl sm:text-4xl md:text-5xl ${
                  idx === 1 ? "text-primary" : "text-white"
                }`}
              >
                {item.title}
              </h2>

              <p className="uppercase text-neutral-500 text-[9px] sm:text-xs tracking-wider mt-1 leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
