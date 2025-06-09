// hooks/useAlcoholData.ts
import { useState, useEffect } from 'react';
import { Drink } from '../types/Drinks'; // Змінено імпорт на Drink
import localDrinksData from '../../public/mock/drinks.json'; // Змінено шлях та назву імпорту

interface UseDrinksDataResult {
  drinksList: Drink[]; // Змінено назву на drinksList
  isLoading: boolean;
  error: string | null;
}

export function useDrinksData(): UseDrinksDataResult { // Змінено назву хука
  const [drinksList, setDrinksList] = useState<Drink[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const data: Drink[] = localDrinksData;
        setDrinksList(data);
        setIsLoading(false);
      } catch (err) {
        setError('Не вдалося завантажити дані про напої.');
        console.error(err);
        setIsLoading(false);
      }
    }, 500); // Симулюємо затримку 500мс

    return () => clearTimeout(timer);
  }, []);

  return { drinksList, isLoading, error };
}