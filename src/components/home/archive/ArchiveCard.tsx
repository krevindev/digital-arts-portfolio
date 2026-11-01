import type { SliderItemType } from "../hero/Hero";

type Props = {
  item: SliderItemType;
  index: number;
};

export default function ArchiveCard({ item, index }: Props) {
  return (
    <article className="group relative flex flex-col overflow-hidden bg-neutral-800/50 border border-white/10 hover:border-white/20 transition-colors duration-300 cursor-pointer">
      {/* Artwork */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <img
          src={item.imgSrc}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_2px,rgba(255,255,255,0.08)_3px,transparent_4px)] opacity-40 mix-blend-screen" />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-0 from-black/50 to-transparent opacity-60" />

        {/* Project Number */}
        <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-white/70">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Project Eyebrow */}
        <span className="absolute bottom-4 left-4 text-[10px] font-mono tracking-[0.2em] text-white/70 uppercase">
          // {item.eyebrow}
        </span>
      </div>

      {/* Project Information */}
      <div className="px-5 py-10 flex flex-col gap-3">
        <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors">
          {item.title}
        </h3>

        <p className="text-xs text-[#8C8CA9] font-mono font-light leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>
    </article>
  );
}
