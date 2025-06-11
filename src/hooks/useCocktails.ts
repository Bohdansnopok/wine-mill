// src/hooks/useWhiskey.ts
import { useState, useEffect } from 'react';
import { Drink } from '../types/Drinks';

export const useCocktails = () => {
    const [cocktailsDrinks, setCocktailsDrinks] = useState<Drink[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLiqourData = async () => {
            setIsLoading(true);
            setError(null);
            setCocktailsDrinks([]);

            await new Promise(resolve => setTimeout(resolve, 1)); 

            try {
                const response = await fetch('/mock/cocktails.json'); 

                if (!response.ok) {
                    throw new Error(`Не вдалося завантажити дані: ${response.statusText}`);
                }

                const data: Drink[] = await response.json();
                setCocktailsDrinks(data);
            } catch (err: any) {
                console.error("Помилка завантаження даних:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLiqourData();

        setInterval(fetchLiqourData, 60000)
    }, []);

    return { cocktailsDrinks, isLoading, error };
};