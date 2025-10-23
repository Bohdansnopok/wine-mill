import { create } from "zustand";

type isLoggedVisibilityState = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

export const useIsLoggedStore = create<isLoggedVisibilityState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
}));
