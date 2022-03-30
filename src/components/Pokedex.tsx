import {Pagination} from "./Pagination";
import {Pokemon} from "./Pokemon";

interface PropsPokedex{
  loading: boolean;
  page: number;
  pokemons: Array<any>;
  total: number;
  setPage: (num: number) => void;
}
export const Pokedex = ({ pokemons, page, setPage, total, loading }: PropsPokedex) => {

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="header">
        <h1>Pokemon finder</h1>
        <p>El que quiere Pokemons, que los busque.</p>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div>Cargando pokemones...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons?.map((pokemon: any) => {
            return <Pokemon pokemon={pokemon} key={pokemon?.name} />;
          })}
        </div>
      )}
    </div>
  );
};
