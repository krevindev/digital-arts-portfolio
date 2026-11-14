import { create } from "zustand";

interface SplashStoreType {
  isSplashOut: boolean;
  setIsSplashOut: (value: boolean) => void;
}

export const useSplashStore = create<SplashStoreType>((set) => ({
  isSplashOut: false,
  setIsSplashOut: (value: boolean) => set({ isSplashOut: value }),
}));
