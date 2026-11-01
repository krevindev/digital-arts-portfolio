import heroSliderData from "../../../data/images-data.json";
import ArchiveCard from "./ArchiveCard";

export default function ArchiveSection() {
  return (
    <section
      id="archive"
      className="min-h-screen bg-neutral-900 w-full flex flex-col justify-center items-center py-20 px-6"
    >
      {/* Section Header */}
      <div className="w-full max-w-7xl mb-10">
        <p className="text-sm font-mono tracking-[5px] text-gray-500 uppercase">
          // Archive
        </p>
        <h2 className="text-white text-4xl md:text-6xl font-display font-black uppercase mt-3">
          Selected Works<span className="text-primary">.</span>
        </h2>
      </div>

      {/* Project Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {heroSliderData.map((item, index) => (
          <ArchiveCard
            key={`${item.eyebrow}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
