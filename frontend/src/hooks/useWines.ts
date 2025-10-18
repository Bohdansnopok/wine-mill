// src/hooks/useWines.ts
"use client"; // Додайте цю директиву на самому початку файлу

import { useEffect, useState } from "react";
import { Drink } from '../types/Drinks';

export const useWines = () => {
    const [wines, setWines] = useState<Drink[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWinesData = async () => {
            setIsLoading(true);
            setError(null);
            setWines([]);

            await new Promise(resolve => setTimeout(resolve, 1)); 

            try {
                const response = await fetch('/mock/wines.json'); 

                if (!response.ok) {
                    throw new Error(`Не вдалося завантажити дані про віскі: ${response.statusText}`);
                }

                const data: Drink[] = await response.json();
                setWines(data);
            } catch (err: any) {
                console.error("Помилка завантаження даних:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWinesData();

        setInterval(fetchWinesData, 60000)
    }, []);

    return { wines, isLoading, error };
};