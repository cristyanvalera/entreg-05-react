import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import './styles/pokeIdPage.css';
import { HeaderImg } from "./HeaderImg";

export const PokeIdPage = () => {
    const [pokeData, getPokeData] = useFetch();
    const param = useParams();

    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${param.id}`;
        getPokeData(url);
    }, []);

    const pokemonName = pokeData?.name;
    const abilities = pokeData?.abilities;
    const types = pokeData?.types;
    const moves = pokeData?.moves;
    const height = pokeData?.height;
    const weight = pokeData?.weight;
    const pokemonImg = pokeData?.sprites.other['official-artwork'].front_default;

    const stats = pokeData?.stats.filter(i => {
        return !i.stat.name.includes('special');
    });

    return (
        <article className="container">
            <HeaderImg />

            <div className="card">
                <div className="gradient"></div>

                <figure>
                    <img src={pokemonImg} alt={pokemonName} />
                </figure>

                <hr />
                <h1>#{param.id}</h1>
                <hr />

                <h2 className="title">{pokemonName}</h2>

                <div className="corporal-units">
                    <div className="individual-unit">
                        <span><strong>Peso</strong></span>
                        <span>{weight}</span>
                    </div>

                    <div className="individual-unit">
                        <span><strong>Altura</strong></span>
                        <span>{height}</span>
                    </div>
                </div>

                <section className="poke-type-container">
                    <div>
                        <h3>Tipo</h3>

                        <ul className="poke-type-card">
                            {types?.map(type => (
                                <li key={type.type.url}>
                                    <span className="tag poke-type">
                                        {type.type.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3>Habilidades</h3>

                        <ul className="poke-type-card">
                            {abilities?.map(ability => (
                                <li key={ability.ability.url}>
                                    <span className="tag poke-type">
                                        {ability.ability.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="stats-section">
                    <div>
                        <h2>Stats</h2>
                    </div>

                    <ul>
                        {stats?.map(stat => (
                            <li key={stat.stat.url}>
                                <div className="stat-labels">
                                    <span>{stat.stat.name}:</span>
                                    <span>{stat.base_stat}/150</span>
                                </div>

                                <ProgressBar
                                    completed={`${stat.base_stat}`}
                                />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <section className="card">
                <div>
                    <h2>Movements</h2>
                </div>

                <hr />

                <ul className="list">
                    {moves?.map(m => (
                        <li key={m.move.url}>
                            <span className="tag">{m.move.name}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </article >
    );
};
