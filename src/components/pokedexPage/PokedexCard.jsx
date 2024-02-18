import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const PokedexCard = ({ url }) => {
    const [pokemon, getPokemon] = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        getPokemon(url);
    }, []);

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`);
    };

    return (
        <article onClick={handleClick}>
            <img
                src={pokemon?.sprites.other['official-artwork'].front_default}
                alt="pokemon"
            />
            <h3>{pokemon?.name}</h3>
        </article>
    );
};