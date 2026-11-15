import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface TypingEffectProps {
  text: string;
  className?: string;
}

export default function TypingEffect({ text, className }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    setDisplayedText("");

    let index = 0;

    const typingInterval = setInterval(() => {
      index++;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <div className={className}>
      <p>
        {displayedText}{" "}
        <motion.span
          animate={{
            opacity: [0, 1],
            transition: {
              duration: 0.8,
              repeat: Infinity,
            },
          }}
          className="text-lg"
        >
          |
        </motion.span>
      </p>
    </div>
  );
}
