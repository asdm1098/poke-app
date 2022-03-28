import { BrowserRouter, Routes, Route, /* NavLink, */ Navigate} from 'react-router-dom';
import { PokemonFinder } from '../pages/PokemonFinder';

export const Navigation = () => {

    return (

        <BrowserRouter>
            <div className='main-layout'>
                <Routes>

                    <Route path="pokemon-finder" element={<PokemonFinder />} />

                    <Route path="/*" element={<Navigate to="/pokemon-finder" replace />} />


                </Routes>
            </div>
        </BrowserRouter>
    )
}
