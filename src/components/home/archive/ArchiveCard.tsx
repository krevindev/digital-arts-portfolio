import { useArchiveModalStore } from "../../../store/archiveModalStore";
import type { SliderItemType } from "../hero/Hero";
import { motion } from "motion/react";

type Props = {
  item: SliderItemType;
  index: number;
};

export default function ArchiveCard({ item, index }: Props) {
  const setActiveImageItemIdx = useArchiveModalStore(
    (s) => s.setActiveImageItemIdx,
  );

  return (
    <motion.article
      onClick={() => setActiveImageItemIdx(index)}
      initial={{
        opacity: 0,
        x: 0,
        filter: "none",
      }}
      whileInView={{
        opacity: [0, 1, 0.2, 1, 0.6, 1],
        x: [0, -12, 10, -5, 3, 0],
        filter: ["none", "contrast(2)", "brightness(1)", "none"],
        transition: {
          x: {
            duration: 0.4,
          },
          delay: index * 0.2,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative flex flex-col overflow-hidden hover:border-white/20 transition-colors duration-300 cursor-pointer"
    >
      {/* Artwork */}
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-900">
        <img
          src={item.imgSrc}
          alt={item.title}
          loading="lazy"
          className="w-full z-5 h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_2px,rgba(255,255,255,0.08)_3px,transparent_4px)] opacity-40 mix-blend-screen" />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-0 from-black/50 to-transparent opacity-60" />
        <div className="absolute w-full h-full bottom-0 left-0 bg-black/20 group-hover:bg-black/0 transition-all" />

        <div className="absolute w-full h-1/2 bottom-0 left-0 bg-linear-0 from-neutral-800/30" />

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
      <div className="px-5 py-5 flex flex-col gap-3">
        {/*
        <h3 className="text-sm font-display font-normal text-neutral-500 uppercase tracking-[3px] group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        */}

        {/*
        <p className="text-xs text-[#8C8CA9] font-mono font-light leading-relaxed line-clamp-3">
          {item.description}
        </p>
        */}
      </div>
    </motion.article>
  );
}
