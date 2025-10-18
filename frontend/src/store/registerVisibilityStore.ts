import { create } from "zustand";

type VisibilityState = {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
};

export const useVisibilityStore = create<VisibilityState>((set) => ({
  isVisible: false,
  show: () => {
    console.log("SHOW викликано");
    set({ isVisible: true });
  },
  hide: () => set({ isVisible: false }),
}));
