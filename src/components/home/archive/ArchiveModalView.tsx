import { useArchiveModalStore } from "../../../store/archiveModalStore";
import heroSliderData from "../../../data/images-data.json";

export default function ArchiveModalView() {
  const activeImageItemIdx = useArchiveModalStore((s) => s.activeImageItemIdx);
  const setActiveImageItemIdx = useArchiveModalStore(
    (s) => s.setActiveImageItemIdx,
  );

  if (activeImageItemIdx === null || activeImageItemIdx === undefined)
    return null;

  return (
    <div
      onClick={() => setActiveImageItemIdx(null)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 bg-black/60 backdrop-blur-md cursor-pointer animate-fade-in"
    >
      {/* Outer Tech Container */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the frame
        className="relative flex items-center justify-center border border-white/10 bg-neutral-950/40 p-1 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] backdrop-blur-xl w-[85vw] h-[80vh] md:w-[75vw] lg:w-[65vw] animate-slide-up"
      >
        {/* Subtle Futuristic Tech Corners */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/40" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/40" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40" />

        {/* Index / Tech HUD Indicator */}
        <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-white/40 uppercase">
          SYS_REF // 0{activeImageItemIdx + 1}
        </div>

        {/* Close Button HUD */}
        <button
          onClick={() => setActiveImageItemIdx(null)}
          className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-white/40 hover:text-white transition-colors duration-200 uppercase z-20"
        >
          [ ESC_CLOSE ]
        </button>

        {/* Image Container with Ambient Glow */}
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden group">
          {/* Internal image glowing backing */}
          <div className="absolute inset-0 bg-radial from-white/5 to-transparent pointer-events-none mix-blend-screen" />

          <img
            className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.05)] select-none"
            src={heroSliderData[activeImageItemIdx]?.imgSrc}
            alt={`Archive item ${activeImageItemIdx}`}
          />
        </div>
      </div>
    </div>
  );
}
