// import { useState, useCallback } from "react";

export const useHttp = () => {
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    const request = async (url, method = 'GET', params = null, headers = { 'Content-Type': 'application/json' }) => {
        // setLoading(true);

        try {
            const res = await fetch(url, { method, params, headers });

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status ${res.status}`);
            }

            const data = await res.json();

            // setLoading(false);

            return data;
        } catch (e) {
            // setLoading(false);
            // setError(e.message);
            throw e;
        }
    };

    // const clearError = useCallback(() => setError(null), []);

    return { request };
}