import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import './styles/pokedexCard.css';

export const PokedexCard = ({ url }) => {
    const [pokemon, getPokemon] = useFetch();
    const navigate = useNavigate();

    useEffect(() => getPokemon(url), []);

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`);
    };

    return (
        <article
            onClick={handleClick}
            className={`poke-card border-${pokemon?.types[0].type.name}`}
        >
            <div className={pokemon?.types[0].type.name}></div>
            <figure>
                <img
                    src={pokemon?.sprites.other['official-artwork'].front_default}
                    alt="pokemon"
                />
            </figure>

            <h3>{pokemon?.name}</h3>

            <ul className="poke-types">
                {pokemon?.types.map(type => (
                    <li key={type.type.url} className={`slot${type.slot}`}>
                        {type.type.name}
                    </li>
                ))}
            </ul>

            <p>Type</p>
            <hr />
            <ul className="poke-stats">
                {pokemon?.stats.map(stat => (
                    !stat.stat.name.includes('special') &&
                    <li key={stat.stat.url}>
                        {stat.stat.name}
                        <span>{stat.base_stat}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
};