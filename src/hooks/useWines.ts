// src/hooks/useWines.ts
"use client"; // Додайте цю директиву на самому початку файлу

import { useEffect, useState } from "react";
import axios from "axios";

export interface Wine {
  id: string;
  name: string;
  image: string;
  createdAt: string;
  liters: number;
  country: string;
  city: string;
  price: string;
}

export const useWines = () => {
  const [wines, setWines] = useState<Wine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<Wine[]>("/mock/wines.json")
      .then((res) => {
        setWines(res.data);
      })
      .catch((err) => {
        console.error("Помилка при завантаженні вин:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { wines, loading };
};