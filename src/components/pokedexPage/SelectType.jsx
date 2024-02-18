import { useEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { setPokemonName } from "../../store/slices/PokemonName.slice";
import { useDispatch } from "react-redux";

export const SelectType = ({ setSelectValue }) => {
    const [types, getTypes] = useFetch();
    const dispatch = useDispatch();
    const textSelect = useRef();

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type';
        getTypes(url);
    }, []);

    const handleChange = () => {
        setSelectValue(textSelect.current.value.trim());
        dispatch(setPokemonName(''));
    };

    return (
        <select onChange={handleChange} ref={textSelect}>
            <option value="allPokemos">All pokemons</option>
            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>
                        {type.name}
                    </option>
                ))
            }
        </select>
    )
};
