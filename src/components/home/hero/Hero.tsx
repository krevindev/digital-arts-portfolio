import { useEffect, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import HeroImageSlider from "./HeroImageSlider";
import heroSliderData from "../../../data/images-data.json";
import { motion, AnimatePresence } from "motion/react";
import HeroHeader from "../../HeroHeader";

export type SliderItemType = {
  imgSrc: string;
  eyebrow: string;
  title: string;
  description: string;
};

// === COMPONENT: HeroSection ===
export default function HeroSection() {
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
    <section className="bg-black h-screen w-full text-white flex justify-between items-stretch relative">
      {/* Image Part */}
      <HeroImageSlider
        heroSliderData={heroSliderData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      {/* Text Part */}
      <div className="bg-background w-full relative flex flex-col overflow-hidden">
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
        <div className="h-full flex flex-col justify-center items-start justify-self-center w-full px-20 relative z-10">
          {/* Eyebrow */}
          <p className="text-sm text-gray-500 tracking-[5px] font-mono">
            // {activeItem.eyebrow.toUpperCase()}
          </p>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,6vw,9rem)] font-display my-5 leading-[0.9] font-black">
            {activeItem.title}
          </h1>

          {/* Description */}
          <p className="text-[#8C8CA9] font-mono font-light text-sm">
            {activeItem.description}
          </p>

          {/* CTA */}
          <a
            href="#archive-section"
            type="button"
            className="font-mono mt-7 transition-all text-white/40 hover:text-white border border-white/40 hover:border-white flex justify-center items-center px-6 py-2 z-10 cursor-pointer group"
          >
            EXPLORE THE ARCHIVE
            <ArrowDownRight className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-white/40 group-hover:text-white transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}
