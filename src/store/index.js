import { configureStore } from '@reduxjs/toolkit';
import trainerName from './slices/TrainerName.slice';
import pokemonName from './slices/PokemonName.slice';

const store = configureStore({
    reducer: {
        trainerName,
        pokemonName,
    },
});

export default store;