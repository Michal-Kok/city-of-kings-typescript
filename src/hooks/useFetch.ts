import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const { data } = await axios.get(url);
            setData(data);
        } catch (error: any) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { error, data };
}