// src/hooks/useWhiskey.ts
import { useState, useEffect } from 'react';
import { Drink } from '../types/Drinks';

export const useCognac = () => {
    const [cognacDrinks, setCognacDrinks] = useState<Drink[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCognacData = async () => {
            setIsLoading(true);
            setError(null);
            setCognacDrinks([]);

            await new Promise(resolve => setTimeout(resolve, 1)); 

            try {
                const response = await fetch('/mock/сognac.json'); 

                if (!response.ok) {
                    throw new Error(`Не вдалося завантажити дані: ${response.statusText}`);
                }

                const data: Drink[] = await response.json();
                setCognacDrinks(data);
            } catch (err: any) {
                console.error("Помилка завантаження даних:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCognacData();

        console.log(error)

        setInterval(fetchCognacData, 60000)
    }, []);

    return { cognacDrinks, isLoading, error };
};