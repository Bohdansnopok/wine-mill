// src/hooks/useWhiskey.ts
import { useState, useEffect } from 'react';
import { Drink } from '../types/Drinks';

export const useArmagnac = () => {
    const [armagnacDrinks, setArmagnacDrinks] = useState<Drink[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArmagnacData = async () => {
            setIsLoading(true);
            setError(null);
            setArmagnacDrinks([]);

            await new Promise(resolve => setTimeout(resolve, 1)); 

            try {
                const response = await fetch('/mock/armagnac.json'); 

                if (!response.ok) {
                    throw new Error(`Не вдалося завантажити дані: ${response.statusText}`);
                }

                const data: Drink[] = await response.json();
                setArmagnacDrinks(data);
            } catch (err: any) {
                console.error("Помилка завантаження даних:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArmagnacData();

        console.log(error)

        setInterval(fetchArmagnacData, 60000)
    }, []);

    return { armagnacDrinks, isLoading, error };
};