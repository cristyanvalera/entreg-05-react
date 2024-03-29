import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { setTrainerName } from "../store/slices/TrainerName.slice";
import { useNavigate } from 'react-router-dom';
import pokedexTitle from '../assets/pokedex-title.png';
import './styles/homePage.css'
import { FooterLogo } from "./FooterLogo";

export const HomePage = () => {
    const dispatch = useDispatch();

    const textInput = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            setTrainerName(textInput.current.value.trim()),
        );

        navigate('/pokedex');
    };

    return (
        <div className="home-container">
            <figure className="homepage-img">
                <img src={pokedexTitle} alt="pokedex logo" />
            </figure>

            <div className="body">
                <div className="title">
                    <h1>¡Hola Entrenador!</h1>
                    <br />
                    <h3>Para poder comenzar, dame tu nombre</h3>
                </div>

                <form onSubmit={handleSubmit} className="form-homepage">
                    <input type="text" ref={textInput} />
                    <button>Comenzar</button>
                </form>
            </div>

            <footer className="footer">
                <FooterLogo />
            </footer>
        </div>
    );
};
