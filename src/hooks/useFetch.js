import axios from "axios";
import { useState } from "react";

export const useFetch = () => {
    const [apiData, setApiData] = useState();

    const getApi = (url) => {
        axios.get(url)
            .then(response => setApiData(response.data))
            .catch(error => console.log(error));
    };

    const getApiType = (url) => {
        axios.get(url)
            .then(response => {
                setApiData({
                    results: response.data.pokemon.map(pok => pok.pokemon),
                });
            })
            .catch(error => console.log(error));
    };

    return [apiData, getApi, getApiType];
};
