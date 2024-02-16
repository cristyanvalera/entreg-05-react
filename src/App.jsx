import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PokedexPage } from './pages/PokedexPage';
import { PokeIdPage } from './pages/PokeIdPage';

function App() {
    return (
        <>
            <h1>Pokedex</h1>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/pokedex' element={<PokedexPage />} />
                <Route path='/pokedex/:id' element={<PokeIdPage />} />
            </Routes>
        </>
    );
}

export default App;
