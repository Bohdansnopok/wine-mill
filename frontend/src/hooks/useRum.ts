// src/hooks/useWhiskey.ts
import { useState, useEffect } from 'react';
import { Drink } from '../types/Drinks';

export const useRum = () => {
    const [rumDrinks, setRumDrinks] = useState<Drink[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRumData = async () => {
            setIsLoading(true);
            setError(null);
            setRumDrinks([]);

            await new Promise(resolve => setTimeout(resolve, 1)); 

            try {
                const response = await fetch('/mock/rum.json'); 

                if (!response.ok) {
                    throw new Error(`Не вдалося завантажити дані: ${response.statusText}`);
                }

                const data: Drink[] = await response.json();
                setRumDrinks(data);
            } catch (err: any) {
                console.error("Помилка завантаження даних:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRumData();

        console.log(error)

        setInterval(fetchRumData, 60000)
    }, []);

    return { rumDrinks, isLoading, error };
};