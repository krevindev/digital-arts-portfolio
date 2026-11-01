import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SliderItemType } from "../Hero.tsx";
import { useState, type Dispatch, type SetStateAction } from "react";

// === Types ===
interface HeroImageSliderProps {
  heroSliderData: SliderItemType[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

// === COMPONENT: HeroImageSlider ===
export default function HeroImageSlider({
  heroSliderData,
  activeIndex,
  setActiveIndex,
}: HeroImageSliderProps) {
  // Handle: Next Image
  const handleNextImage = () => {
    if (activeIndex >= heroSliderData.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };

  // Handle: Previous Image
  const handlePrevImage = () => {
    if (activeIndex <= 0) {
      setActiveIndex(heroSliderData.length - 1);
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-fit min-w-[50vw] group overflow-hidden bg-zinc-950">
      <img
        className="object-cover object-bottom min-w-[50vw] w-full h-full"
        src={heroSliderData[activeIndex].imgSrc}
        width={400}
        height={800}
        alt="Hero Image"
        fetchPriority="high"
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-linear-0 from-black/50 via-transparent to-black/10"></div>

      {/* Top HUD */}
      <div className="absolute top-5 left-5 right-5 flex justify-between items-start pointer-events-none">
        <div className="flex backdrop-blur-sm bg-black/20 border border-white/30 px-5 py-2 flex-col gap-1">
          <span className="text-[9px] tracking-[0.3em] text-white/50 uppercase">
            Visual Archive
          </span>
          <span className="text-xs font-medium tracking-widest text-white">
            {activeIndex < 10 ? `0${activeIndex + 1}` : activeIndex + 1}{" "}
            <span className="text-white/40">
              /{" "}
              {heroSliderData.length < 10
                ? `0${heroSliderData.length}`
                : heroSliderData.length}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="animate-pulse size-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"></span>
          <span className="text-[9px] tracking-[0.2em] text-white/70 uppercase">
            Live View
          </span>
        </div>
      </div>

      {/* Image Navigation */}
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        {/* Progress Indicator */}
        <div className="flex flex-col gap-3">
          <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-white/50">
            Navigate / Gallery
          </span>

          <div className="flex gap-1.5">
            {heroSliderData.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <span
                  className={`${isActive ? "w-8 bg-white " : "w-4 bg-white/30"} w-8 h-[2px] shadow-[0_0_8px_#22d3ee]`}
                />
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrevImage}
            className="size-11 flex items-center justify-center border border-white/20 bg-black/10 cursor-pointer backdrop-blur-sm text-white hover:bg-white/20 hover:border-white transition-all duration-300 z-30 active:translate-x-1"
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNextImage}
            className="size-11 flex items-center justify-center border border-white/20 bg-black/10 cursor-pointer backdrop-blur-sm text-white hover:bg-white/20 hover:border-white transition-all duration-300 z-30 active:translate-x-1"
            aria-label="Next image"
            type="button"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Decorative Corner Markers */}
      <div className="absolute top-2 left-2 size-5 border-t-2 border-l-2 border-white/70 pointer-events-none"></div>
      <div className="absolute top-2 right-2 size-5 border-t-2 border-r-2 border-white/70 pointer-events-none"></div>
      <div className="absolute bottom-2 left-2 size-5 border-b-2 border-l-2 border-white/70 pointer-events-none"></div>
      <div className="absolute bottom-2 right-2 size-5 border-b-2 border-r-2 border-white/70 pointer-events-none"></div>
    </div>
  );
}
