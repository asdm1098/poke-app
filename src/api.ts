export const searchPokemon = async (pokemon:string) => {
    try {
      // let url = `http://localhost:4000/pokedex/${pokemon}`;
      let url = `https://pokemon-back-hero.herokuapp.com/pokedex/${pokemon}`
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  
  export const getPokemons = async (limit = 25, offset = 0) => {
    try {
      // let url = `http://localhost:4000/pokedex/get/${limit}/of/${offset}`;
      let url = `https://pokemon-back-hero.herokuapp.com/pokedex/get/${limit}/of/${offset}`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (err) {}
  };
  
  export const getPokemonData = async (url:string) => {
    let a = url.split('/');
    try {
      // let p = `http://localhost:4000/pokedex/${a[6]}/`;
      let p = `https://pokemon-back-hero.herokuapp.com/pokedex/${a[6]}/`;
      const response = await fetch(p);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  