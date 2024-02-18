import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

export const SelectType = () => {
    const [types, getTypes] = useFetch();

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type';
        getTypes(url);
    }, []);

    console.log(types);

    return (
        <select>
            <option value="allPokemos">All pokemons</option>
            {types?.results.map(type => (
                <option key={type.url} value={type}>{type.name}</option>
            ))}
        </select>
    )
};
