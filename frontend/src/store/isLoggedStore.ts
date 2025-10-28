import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IsLoggedVisibilityState {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export const useIsLoggedStore = create<IsLoggedVisibilityState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (value) => set({ isLoggedIn: value }),
    }),
    {
      name: "isLogged-storage", 
    }
  )
);
