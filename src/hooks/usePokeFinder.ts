import { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "../api";

export const usePokeFinder = () => {
    const localStorageKey = "favorite_pokemon";

    const [pokemons, setPokemons] = useState<any>([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        loadFavoritePokemons();
    }, []);

    useEffect(() => {
        if (!searching) {
        fetchPokemons();
        }
    }, [page]);

    const fetchPokemons = async () => {
        try {
            setLoading(true);
                const data = await getPokemons(27, 27 * page);
                const promises = data.results.map(async (pokemon: any) => {
                return await getPokemonData(pokemon.url);
            });
            const results = await Promise.all(promises);            
            setPokemons(results);
            setLoading(false);
            setTotal(Math.ceil(data.count / 25));
            setNotFound(false);
        } catch (err) {}
    };

    const loadFavoritePokemons = () => {
        const res = window.localStorage.getItem(localStorageKey);
        if (res) {
            const pokemons = JSON.parse(res) || [];
            setFavorites(pokemons);
        }
    };

    const updateFavoritePokemons = (name: string ) => {
        const updated: any = [...favorites];
        const isFavorite = updated.indexOf(name);
        if (isFavorite >= 0) {
            updated.splice(isFavorite, 1);
        } else {
            updated.push(name);
        }
        setFavorites(updated);
        window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
    };

    const onSearch = async (pokemon: string) => {
        if (!pokemon) {
            return fetchPokemons();
        }
        setLoading(true);
        setNotFound(false);
        setSearching(true);
        try {
            const result = await searchPokemon(pokemon);
            
            if (!result) {
                setNotFound(true);
                setLoading(false);
                return;
            } else {
                setPokemons([result]);
                setPage(0);
                setTotal(1);
            }
            setLoading(false);
            setSearching(false);
            
        } catch (error) {
            console.log(error);
            
        }
    };
  
    return {
        pokemons,
        page,
        total,
        loading,
        favorites,
        notFound,
        onSearch,
        setPage,
        updateFavoritePokemons,
    }
}
