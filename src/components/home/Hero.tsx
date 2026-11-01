import { useEffect, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import HeroImageSlider from "./hero/HeroImageSlider";

export type SliderItemType = {
  imgSrc: string;
  eyebrow: string;
  title: string;
  description: string;
};

const heroSliderData: SliderItemType[] = [
  {
    imgSrc: "/assets/images/artworks/nftw.svg",
    eyebrow: "Project 0441",
    title: "No Rest for the Wicked",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imgSrc: "/assets/images/artworks/nikki.png",
    eyebrow: "Project 0442",
    title: "Another Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

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
      <div className="bg-background w-full flex flex-col relative overflow-hidden">
        {/* Background Image */}
        <img
          className="object-cover fixed w-[400vw] right-0 opacity-5 blur-xl h-full"
          src="/assets/images/hero1.svg"
          width={400}
          height={800}
          alt=""
        />

        {/* Blurry Elements */}
        <div className="w-200 h-50 bg-purple-400 absolute left-0 bottom-0 rounded-full opacity-5 -rotate-30 blur-3xl z-0" />
        <div className="w-100 h-100 bg-pink-400 absolute right-1/2 top-1/2 rounded-full opacity-10 -rotate-30 blur-3xl z-0" />
        <div className="w-100 h-100 bg-pink-400 absolute left-1/2 bottom-0 rounded-full opacity-5 -rotate-30 blur-3xl z-0" />

        {/* Hero Header */}
        {/* Replace with a React version of HeroHeader if needed */}

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
          <button
            type="button"
            className="font-mono mt-7 transition-all text-white/40 hover:text-white border border-white/40 hover:border-white flex justify-center items-center px-6 py-2 z-10 cursor-pointer group"
          >
            EXPLORE THE ARCHIVE
            <ArrowDownRight className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-white/40 group-hover:text-white transition-all" />
          </button>
        </div>
      </div>
    </section>
  );
}
