import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../store/slices/PokemonName.slice';

export const PokedexPage = () => {
    const trainerName = useSelector(store => store.trainerName);
    const pokemonName = useSelector(store => store.pokemonName);
    const textInput = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            setPokemonName(textInput.current.vale.trim().toLowerCase()),
        );
    };

    console.log()

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
                {}
            </section>
        </div>
    );
};
