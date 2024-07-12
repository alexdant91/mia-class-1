import { useEffect, useState } from "react"

export const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const reload = async () => {
        setError(false);
        setLoading(true);
        try {
            const response = await fetch(url, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error("Error during fetch data");
            }

            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        reload();
    }, [url]);

    return {
        data, error, loading, reload
    }
}
