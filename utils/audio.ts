type AudioController = {
  audio: HTMLAudioElement;
  stop: () => void;
  reset: () => void;
};

export function playAudio(path: string): AudioController {
  const audio = new Audio(path);

  audio.volume = 1;

  audio.play().catch((err) => {
    console.warn("Audio playback failed:", err);
    alert("Error playing audio");
  });

  return {
    audio,
    stop: () => {
      audio.pause();
      audio.currentTime = 0;
    },
    reset: () => {
      audio.currentTime = 0;
    },
  };
}
