// src/hooks/useWhiskey.ts
import { useState, useEffect } from 'react';
import { Drink } from '../types/Drinks';

export const useSparkling = () => {
    const [sparklingDrinks, setSparklingDrinks] = useState<Drink[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSparklingData = async () => {
            setIsLoading(true);
            setError(null);
            setSparklingDrinks([]);

            await new Promise(resolve => setTimeout(resolve, 1)); 

            try {
                const response = await fetch('/mock/sparkling.json'); 

                if (!response.ok) {
                    throw new Error(`Не вдалося завантажити дані про віскі: ${response.statusText}`);
                }

                const data: Drink[] = await response.json();
                setSparklingDrinks(data);
            } catch (err: any) {
                console.error("Помилка завантаження даних:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSparklingData();

        setInterval(fetchSparklingData, 60000)
    }, []);

    return { sparklingDrinks, isLoading, error };
};