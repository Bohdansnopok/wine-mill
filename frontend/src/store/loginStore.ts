import { create } from "zustand";

interface User {
  name?: string;
  email: string;
}

interface LoginState {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
  checkAuth: () => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  user: null,
  isLoggedIn: false,

  login: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");
    set({ user, isLoggedIn: true });
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    set({ user: null, isLoggedIn: false });
  },

  checkAuth: () => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const savedUser = localStorage.getItem("user");

    if (loggedIn && savedUser) {
      set({ user: JSON.parse(savedUser), isLoggedIn: true });
    } else {
      set({ user: null, isLoggedIn: false });
    }
  },
}));
