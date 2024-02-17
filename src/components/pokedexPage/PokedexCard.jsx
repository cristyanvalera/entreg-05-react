import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

export const PokedexCard = ({ url }) => {
    const [pokemon, getPokemon] = useFetch();

    useEffect(() => {
        getPokemon(url);
    }, []);
    
    return (
        <article>
            <img
                src={pokemon?.sprites.other['official-artwork'].front_default}
                alt=""
            />
            <h3>{pokemon?.name}</h3>
        </article>
    );
};