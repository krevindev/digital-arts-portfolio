import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { SliderItemType } from "./Hero";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { playAudio } from "../../../../utils/audio";

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
    setActiveIndex((prev) =>
      prev >= heroSliderData.length - 1 ? 0 : prev + 1,
    );
  };

  // Handle: Previous Image
  const handlePrevImage = () => {
    setActiveIndex((prev) =>
      prev <= 0 ? heroSliderData.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const switchAudio = playAudio("/assets/audio/switch.wav");
    switchAudio.audio.playbackRate = 1.8;
    switchAudio.audio.volume = 0.2;

    return () => {
      switchAudio.stop();
    };
  }, [activeIndex]);

  // Automatically switch current image
  useEffect(() => {
    const nextInterval = setInterval(() => {
      handleNextImage();
    }, 6000);

    return () => clearInterval(nextInterval);
  }, []);

  const activeItem = heroSliderData[activeIndex];

  if (!activeItem) return null;

  return (
    <div className="relative w-full lg:w-[50vw] lg:min-w-[50vw] h-[45vh] min-h-[320px] sm:h-[55vh] lg:h-screen lg:min-h-0 shrink-0 group overflow-hidden bg-zinc-950">
      {/* Active Image */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.img
          key={activeIndex}
          src={activeItem.imgSrc}
          width={400}
          height={800}
          alt={activeItem.title}
          fetchPriority="high"
          className="absolute inset-0 object-cover object-bottom w-full h-full"
          initial={{
            opacity: 0,
            x: 0,
            filter: "none",
          }}
          animate={{
            opacity: [0, 1, 0.2, 1, 0.6, 1],
            x: [0, -12, 10, -5, 3, 0],
            filter: ["none", "contrast(2)", "brightness(1)", "none"],
          }}
          exit={{
            opacity: [1, 0.2, 1, 0],
            x: [0, 8, -5, 10],
            filter: ["none", "brightness(1.8)", "none"],
          }}
          transition={{
            duration: 0.22,
            ease: "linear",
            opacity: {
              duration: 0.22,
              times: [0, 0.2, 0.4, 0.65, 0.85, 1],
            },
            x: {
              duration: 0.22,
              ease: "linear",
            },
            filter: {
              duration: 0.22,
              ease: "linear",
            },
          }}
        />
      </AnimatePresence>

      {/* Image Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-linear-0 from-black/50 via-transparent to-black/10"></div>

      {/* Top HUD */}
      <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex justify-between items-start pointer-events-none">
        <div className="flex backdrop-blur-sm bg-black/20 border border-white/30 px-3 sm:px-5 py-2 flex-col gap-1">
          <span className="text-[9px] tracking-[0.3em] text-white/50 uppercase">
            Visual Archive
          </span>

          <div className="text-xs font-medium tracking-widest text-white">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {String(activeIndex + 1).padStart(2, "0")}{" "}
              </motion.span>
            </AnimatePresence>
            <span className="text-white/40">
              / {String(heroSliderData.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="animate-pulse size-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"></span>
          <span className="text-[9px] tracking-[0.2em] text-white/70 uppercase">
            Live View
          </span>
        </div>
      </div>

      {/* Image Navigation */}
      <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 flex items-end justify-between">
        {/* Progress Indicator */}
        <div className="flex flex-col gap-3">
          <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-white/50">
            Navigate / Gallery
          </span>

          <div className="flex gap-1.5">
            {heroSliderData.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <motion.span
                  key={item.eyebrow + idx}
                  animate={{
                    width: isActive ? 32 : 16,
                    backgroundColor: isActive
                      ? "#ffffff"
                      : "rgba(255,255,255,0.3)",
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-[2px] shadow-[0_0_8px_#8C1BE3]"
                />
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <motion.button
            onClick={handlePrevImage}
            whileTap={{ x: -3 }}
            className="size-10 sm:size-11 flex items-center justify-center border border-white/20 bg-black/10 cursor-pointer backdrop-blur-sm text-white hover:bg-white/20 hover:border-white transition-all duration-300 z-30"
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            onClick={handleNextImage}
            whileTap={{ x: 3 }}
            className="size-10 sm:size-11 flex items-center justify-center border border-white/20 bg-black/10 cursor-pointer backdrop-blur-sm text-white hover:bg-white/20 hover:border-white transition-all duration-300 z-30"
            aria-label="Next image"
            type="button"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>

      {/* Decorative Corner Markers */}
      <div className="absolute top-2 left-2 size-5 border-t-2 border-l-2 border-white/70 pointer-events-none"></div>
      <div className="absolute top-2 right-2 size-5 border-t-2 border-r-2 border-white/70 pointer-events-none"></div>
      <div className="absolute bottom-2 left-2 size-5 border-b-2 border-l-2 border-white/70 pointer-events-none"></div>
      <div className="absolute bottom-2 right-2 size-5 border-b-2 border-r-2 border-white/70 pointer-events-none"></div>

      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_2px,rgba(255,255,255,0.08)_3px,transparent_4px)] opacity-70 mix-blend-screen" />
    </div>
  );
}
