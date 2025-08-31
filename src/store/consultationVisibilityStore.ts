import { create } from "zustand";

type ConsultationVisibilityState = {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
};

export const useConsultationVisibilityStore = create<ConsultationVisibilityState>((set) => ({
  isVisible: false,
  show: () => {
    set({ isVisible: true });
    console.log("Placing modal is now visible");
  },
  hide: () => set({ isVisible: false }),
}));
