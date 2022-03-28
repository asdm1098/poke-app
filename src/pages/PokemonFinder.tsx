
import { FavoriteProvider } from '../contexts/favoritesContext';
import { Footer, Navbar, Pokedex, Searchbar } from '../components';
import { usePokeFinder } from '../hooks/usePokeFinder';

import '../styles/styles.css';


export const PokemonFinder = () => {

    const { 
        favorites,
        loading,
        notFound,
        onSearch,
        page,
        pokemons,
        setPage,
        total,
        updateFavoritePokemons,
    } = usePokeFinder();

    return (
        <FavoriteProvider
            value={{
                favoritePokemons: favorites,
                updateFavoritePokemons: updateFavoritePokemons
            }}
        >
            <div>
                <Navbar />
                <div className="App">
                    <Searchbar onSearch={onSearch} />
                    {notFound ? (
                        <div className="not-found-text">
                            No se encontro el Pokemon que buscabas 😭
                        </div>
                    ) : (
                        <Pokedex
                            loading={loading}
                            pokemons={pokemons}
                            page={page}
                            setPage={setPage}
                            total={total}
                        />
                    )}
                </div>
            <Footer />
            </div>
        </FavoriteProvider>
    )
}
