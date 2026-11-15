import { useEffect, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import HeroImageSlider from "./HeroImageSlider";
import heroSliderData from "../../../data/images-data.json";
import { motion, AnimatePresence } from "motion/react";
import HeroHeader from "../../HeroHeader";
import { useSplashStore } from "../../../store/splashStore";
import TypingEffect from "../../TypingEffect";

export type SliderItemType = {
  imgSrc: string;
  eyebrow: string;
  title: string;
  description: string;
};

// === COMPONENT: HeroSection ===
export default function HeroSection() {
  // === Global State ===
  const isSplashOut = useSplashStore((s) => s.isSplashOut);

  // === States ===
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeItem, setActiveItem] = useState<SliderItemType>(
    heroSliderData[activeIndex],
  );

  // Set activeItem if activeIndex changes
  useEffect(() => {
    setActiveItem(heroSliderData[activeIndex]);
  }, [activeIndex]);

  return (
    <section className="bg-black min-h-screen w-full text-white flex flex-col lg:flex-row justify-between items-stretch relative overflow-hidden">
      {/* Image Part */}
      <HeroImageSlider
        heroSliderData={heroSliderData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      {/* Text Part */}
      <div className="bg-background w-full lg:w-full min-h-screen lg:min-h-0 relative flex flex-col overflow-hidden">
        {/* Background Image */}
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={activeIndex}
            src={activeItem.imgSrc}
            width={800}
            height={800}
            alt=""
            className="object-cover absolute right-0 bottom-0 opacity-5 blur-xl h-full pointer-events-none"
            initial={{
              opacity: 0,
              scale: 1.03,
              filter: "blur(32px)",
            }}
            animate={{
              opacity: 0.08,
              scale: 3,
              filter: "blur(24px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(32px)",
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </AnimatePresence>

        <div className="absolute h-full w-full bg-linear-30 to-neutral-950/90 right-0" />

        {/* Blurry Elements */}
        <div className="w-200 h-50 bg-purple-400 absolute left-0 bottom-0 rounded-full opacity-5 -rotate-30 blur-3xl z-0" />
        <div className="w-100 h-100 bg-pink-400 absolute right-1/2 top-1/2 rounded-full opacity-10 -rotate-30 blur-3xl z-0" />

        {/* Hero Header */}
        <HeroHeader />

        {/* Main Text Contents */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isSplashOut ? [1, 0.5, 1, 0.5, 0, 1] : 0,
            x: isSplashOut ? [-10, 0, -3, -10, 0] : 0,
            transition: {
              duration: 0.2,
            },
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: isSplashOut ? 0.2 : 0,
          }}
          className="h-full flex flex-col justify-center items-start justify-self-center w-full px-6 sm:px-10 md:px-14 lg:px-20 py-20 lg:py-0 relative z-10"
        >
          {/* Eyebrow */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={activeIndex}
              animate={{
                opacity: [1, 0.5, 1, 0.5, 0, 1],
                x: [0, -10, 0, -3, 10, 0],
                transition: {
                  duration: 0.2,
                },
              }}
              className="text-xs sm:text-2xl lg:text-7xl text-gray-50 font-black tracking-normal sm:tracking-[5px] font-mono"
            >
              {activeItem.eyebrow.toUpperCase()}
            </motion.p>
          </AnimatePresence>

          {/* Headline */}
          <h1 className="hidden text-[clamp(2.5rem,8vw,9rem)] lg:text-[clamp(2.5rem,6vw,9rem)] font-display my-5 leading-[0.9] font-black">
            {activeItem.title}
          </h1>

          {/* Description */}
          {isSplashOut && (
            <TypingEffect
              key={activeIndex}
              className="text-[#8C8CA9] font-mono font-light text-xs sm:text-sm max-w-xl"
              text={`// ${activeItem.description}`}
            />
          )}

          <div>
            <div className="" />
          </div>

          {/* CTA */}
          <motion.a
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: isSplashOut ? 1 : 0,
              y: isSplashOut ? 0 : 20,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: isSplashOut ? 0.5 : 0,
            }}
            href="#archive-section"
            type="button"
            className="font-mono mt-7 transition-all text-white/40 hover:text-white border border-white/40 hover:border-white flex justify-center items-center px-6 py-2 z-10 cursor-pointer group text-xs sm:text-sm"
          >
            EXPLORE THE ARCHIVE
            <ArrowDownRight className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-white/40 group-hover:text-white transition-all" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
