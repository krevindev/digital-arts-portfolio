import { create } from "zustand";

interface ArchiveModalStateType {
  activeImageItemIdx: number | null;
  setActiveImageItemIdx: (value: number | null) => void;
}

export const useArchiveModalStore = create<ArchiveModalStateType>((set) => ({
  activeImageItemIdx: null,
  setActiveImageItemIdx: (value: number | null) =>
    set({ activeImageItemIdx: value }),
}));
