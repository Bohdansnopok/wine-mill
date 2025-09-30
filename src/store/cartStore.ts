import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  createdAt: string;
  liters: number;
  country: string;
  city: string;
  price: number;
  image?: string;
};

type CartStore = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

// функция для загрузки корзины из localStorage
const loadCart = (): Product[] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

const saveCart = (cart: Product[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const useCartStore = create<CartStore>((set) => ({
  cart: loadCart(),

  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find((p) => p.id === product.id);
      if (exists) return state;

      const updatedCart = [...state.cart, product];
      saveCart(updatedCart);
      return { cart: updatedCart };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((p) => p.id !== productId);
      saveCart(updatedCart);
      return { cart: updatedCart };
    }),

  clearCart: () =>
    set(() => {
      saveCart([]);
      return { cart: [] };
    }),
}));
