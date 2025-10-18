import { create } from "zustand";

type LogInVisibilityState = {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
};

export const useLogInVisibilityStore = create<LogInVisibilityState>((set) => ({
  isVisible: false,
  show: () => {
    console.log("SHOW викликано");
    set({ isVisible: true });
  },
  hide: () => set({ isVisible: false }),
}));
