export const searchPokemon = async (pokemon:string) => {
    try {
      // let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      // let url = `http://localhost:4000/pokedex/${pokemon}`;
      let url = `https://pokemon-back-hero.herokuapp.com/pokedex/${pokemon}`
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  
  export const getPokemons = async (limit = 25, offset = 0) => {
    try {
      // let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      // let url = `http://localhost:4000/pokedex/all/${limit}/of/${offset}`;
      let url = `https://pokemon-back-hero.herokuapp.com/pokedex/all/${limit}/of/${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  
  export const getPokemonData = async (url:string) => {
    let a = url.split('/');
    try {
      // let p = `https://pokeapi.co/api/v2/pokemon/${a[6]}`;
      // let p = `http://localhost:4000/pokedex/urlt/${a[6]}/`;
      let p = `https://pokemon-back-hero.herokuapp.com/pokedex/urlt/${a[6]}/`;
      const response = await fetch(p);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  