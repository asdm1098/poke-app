import { createContext } from "react";

type contextProps = {
  favoritePokemons: Array<string>,
  updateFavoritePokemons: (id: string) => void
}
const FavoriteContext = createContext<contextProps>({} as contextProps);

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;