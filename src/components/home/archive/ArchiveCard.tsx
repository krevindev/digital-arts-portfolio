import type { SliderItemType } from "../Hero";

type Props = {
  item: SliderItemType;
  index: number;
};

export default function ArchiveCard({ item, index }: Props) {
  return (
    <article className="group relative flex flex-col overflow-hidden bg-zinc-950 border border-white/10 hover:border-white/30 transition-colors duration-300">
      {/* Artwork */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <img
          src={item.imgSrc}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

        {/* Project Number */}
        <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-white/70">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Project Eyebrow */}
        <span className="absolute bottom-4 left-4 text-[10px] font-mono tracking-[0.2em] text-white/70 uppercase">
          {item.eyebrow}
        </span>
      </div>

      {/* Project Information */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors">
          {item.title}
        </h3>

        <p className="text-sm text-[#8C8CA9] font-mono font-light leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>
    </article>
  );
}
