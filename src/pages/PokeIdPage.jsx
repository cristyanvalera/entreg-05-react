import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export const PokeIdPage = () => {
    const [pokeData, getPokeData] = useFetch();
    const param = useParams();

    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${param.id}`;
        getPokeData(url);
    }, []);

    console.log(pokeData);

    return (
        <article>
            <img
                src={pokeData?.sprites.other['official-artwork'].front_default}
                alt={pokeData?.name}
            />
            <h3>{pokeData?.name}</h3>
        </article>
    );
};
