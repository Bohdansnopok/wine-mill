// src/hooks/useWhiskey.ts
import { useState, useEffect } from 'react';
import { Drink } from '../types/Drinks';

export const useWhiskey = () => {
    const [whiskeyDrinks, setWhiskeyDrinks] = useState<Drink[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWhiskeyData = async () => {
            setIsLoading(true);
            setError(null);
            setWhiskeyDrinks([]);

            await new Promise(resolve => setTimeout(resolve, 500)); 

            try {
                const response = await fetch('/mock/wiskey.json'); 

                if (!response.ok) {
                    throw new Error(`Не вдалося завантажити дані про віскі: ${response.statusText}`);
                }

                const data: Drink[] = await response.json();
                setWhiskeyDrinks(data);
            } catch (err: any) {
                console.error("Помилка завантаження даних:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWhiskeyData();

        setInterval(fetchWhiskeyData, 60000)
    }, []);

    return { whiskeyDrinks, isLoading, error };
};