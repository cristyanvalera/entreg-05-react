import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { setTrainerName } from "../store/slices/TrainerName.slice";

export const HomePage = () => {
    const dispatch = useDispatch();
    const textInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            setTrainerName(textInput.current.value.trim()),
        );
    };

    return (
        <div>
            <h1>¡Hola Entrenador!</h1>
            <h2>Para poder comenzar, dame tu nombre</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" ref={textInput} />
                <button>Comenzar</button>
            </form>
        </div>
    );
};