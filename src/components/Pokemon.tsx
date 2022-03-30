import { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

export const Pokemon = (props: any) => {

  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const handlePokemon = () => {
    console.log('click')!
  }

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container" onClick={ handlePokemon }>
        <img
          src={pokemon?.urlImg}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body" >
        <div className="card-top" onClick={ handlePokemon }>
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {/* {
              <div className="pokemon-type-text">
                {pokemon.type}
              </div>
            } */}
            {pokemon.types.map((type: any, idx: number) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type}
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart} className="pokemon-heart-btn">
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};
