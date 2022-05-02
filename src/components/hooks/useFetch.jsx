import { useState, useEffect } from "react"
import axios from "axios";

const API_AUTH = process.env.REACT_APP_1337_API_KEY;

const useFetch = (url) => {
    //Initialize as null becuase data may be different.
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoad(true);
        const fetchData = async () => {
            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `api-key ${API_AUTH}`,
                    }
                });
                const responseData = await response?.data;
                setData(responseData);
                setLoad(false);
            } catch (err) {
                setError(err);
                setLoad(false);
            }
        }
        fetchData();
    }, [url]);

    return {data, load, error}
}

export default useFetch;