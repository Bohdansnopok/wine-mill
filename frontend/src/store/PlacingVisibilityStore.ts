import { create } from "zustand";

type PlacingVisibilityState = {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
};

export const usePlacingVisibilityStore = create<PlacingVisibilityState>((set) => ({
  isVisible: false,
  show: () => {
    set({ isVisible: true });
    console.log("Placing modal is now visible");
  },
  hide: () => set({ isVisible: false }),
}));
