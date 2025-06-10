"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Drink } from '../types/Drinks';

// Результат хука
interface UseDrinksResult {
  drinks: Drink[];
  loading: boolean;
  error: string | null;
}

// Хук для загрузки напитков
export const useDrinks = (category?: string): UseDrinksResult => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    console.log('Загружаем напитки, категория:', category);
    
    // Используем абсолютный путь
    axios.get<Drink[]>("/mock/drinks.json", {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
      .then((res) => {
        console.log('Получили данные из drinks.json:', res.data);
        
        // фильтрация по категории, если задана
        const filteredDrinks = category 
          ? res.data.filter(drink => {
              console.log('Сравниваем категорию:', drink.category.toLowerCase(), 'с', category.toLowerCase());
              return drink.category.toLowerCase() === category.toLowerCase();
            })
          : res.data;
        
        console.log('Отфильтрованные напитки:', filteredDrinks);
        
        setDrinks(filteredDrinks);
        setError(null);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке напитков:", err);
        setError("Не удалось загрузить напитки");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]); // перезапрос при изменении категории

  return { drinks, loading, error };
};