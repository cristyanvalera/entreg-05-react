import axios from "axios";
import { useState } from "react";

export const useFetch = () => {
    const [apiData, setApiData] = useState();

    const getApi = (url) => {
        axios.get(url)
            .then(response => setApiData(response.data))
            .catch(error => console.log(error));
    };

    return [apiData, getApi];
};
