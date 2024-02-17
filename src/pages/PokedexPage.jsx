import { useDispatch, useSelector } from "react-redux";
import { setPokemonName } from "../store/slices/PokemonName.slice";
import { useEffect, useRef } from "react";
import { useFetch } from "../hooks/useFetch";
import { PokedexCard } from "../components/pokedexPage/PokedexCard";

export const PokedexPage = () => {
    const trainerName = useSelector(store => store.trainerName);
    const pokemonName = useSelector(store => store.pokemonName);
    const textInput = useRef();
    const dispatch = useDispatch();
    const [pokemons, getPokemons] = useFetch();
    
    useEffect(() => {
        let url = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
        getPokemons(url);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            setPokemonName(textInput.current.value.trim().toLowerCase()),
        );
    };

    return (
        <div>
            <section>
                <h3>
                    <span>Bienvenido {trainerName}, </span>
                    <span>Aquí podrás encontrar tu pokemon favorito.</span>
                </h3>

                <form onSubmit={handleSubmit}>
                    <input type="text" ref={textInput} />
                    <button>Buscar</button>
                </form>
            </section>

            <section>
                {pokemons?.results.map(poke => (
                    <PokedexCard
                        key={poke.url}
                        url={poke.url}
                    />
                ))}
            </section>
        </div>
    );
};
