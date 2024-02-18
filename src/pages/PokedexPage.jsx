import { useDispatch, useSelector } from "react-redux";
import { setPokemonName } from "../store/slices/PokemonName.slice";
import { useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { PokedexCard } from "../components/pokedexPage/PokedexCard";
import { SelectType } from "../components/pokedexPage/SelectType";

export const PokedexPage = () => {
    const [selectValue, setSelectValue] = useState('allPokemons');
    const trainerName = useSelector(store => store.trainerName);
    const pokemonName = useSelector(store => store.pokemonName);
    const textInput = useRef();
    const dispatch = useDispatch();
    const [pokemons, getPokemons, getPerType] = useFetch();

    useEffect(() => {
        if (selectValue === 'allPokemons') {
            getPokemons('https://pokeapi.co/api/v2/pokemon/?limit=30');
        } else {
            getPerType(selectValue);
        }
    }, [selectValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            setPokemonName(textInput.current.value.trim().toLowerCase()),
        );
        textInput.current.value = '';
    };

    const filterByName = () => {
        if (pokemonName) {
            return pokemons?.results.filter(
                item => item.name.includes(pokemonName),
            );
        }

        return pokemons?.results;
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

                <SelectType setSelectValue={setSelectValue} />
            </section>

            <section>
                {filterByName()?.map(poke => (
                    <PokedexCard
                        key={poke.url}
                        url={poke.url}
                    />
                ))}
            </section>
        </div>
    );
};
