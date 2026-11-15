import { useEffect } from "react";
import { useSplashStore } from "../store/splashStore";
import { AnimatePresence, motion } from "motion/react";
import { playAudio } from "../../utils/audio";

// type AnimationPhaseType = "entry" | "idle" | "exit";

// === COMPONENT: SplashScreen ===
export default function SplashScreen() {
  const isSplashOut = useSplashStore((s) => s.isSplashOut);
  const setIsSplashOut = useSplashStore((s) => s.setIsSplashOut);

  // --- Splash Audio ---
  useEffect(() => {
    const splashAudio = playAudio("/assets/audio/splash.wav");

    return () => {
      splashAudio.stop();
    };
  }, []);

  // --- Splash Out Timer ---
  useEffect(() => {
    let splashOutTimer = setTimeout(() => {
      setIsSplashOut(true);
    }, 1500);

    return () => clearTimeout(splashOutTimer);
  }, []);

  //  if (isSplashOut) return null;

  return (
    <AnimatePresence>
      {!isSplashOut && (
        <motion.main
          exit={{
            opacity: 0,
          }}
          className="
      fixed inset-0 
      flex items-center justify-center 
      bg-neutral-900 z-50
      "
        >
          <motion.div
            animate={{
              rotate: 90,
              opacity: [1, 0, 1, 0, 1],
              transition: {
                opacity: {
                  delay: 0.3,
                },
                rotate: {
                  delay: 0.5,
                },
              },
            }}
            className="
        fixed left-1/2 top-1/2 -translate-1/2 -translate-y-1/2
        text-white text-7xl font-black
        flex justify-center items-center gap-0
        tracking-[0]
        "
          >
            <motion.h1
              initial={{
                x: -50,
                opacity: 0,
              }}
              animate={{
                x: -18,
                opacity: 1,
              }}
              onAnimationComplete={(definition: string) => {
                if (definition === "entry") {
                  //setAnimationPhase("idle");
                }
              }}
              className="-scale-x-100"
            >
              K
            </motion.h1>
            <motion.h1
              initial={{
                x: -50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
            >
              R
            </motion.h1>
          </motion.div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
