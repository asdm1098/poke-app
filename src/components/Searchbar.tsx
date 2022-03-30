import { ChangeEvent, useState } from "react";

interface PropsSearchBar {
  onSearch: (search: any) => void;
}
export const Searchbar = ({ onSearch }: PropsSearchBar) => {
  const [search, setSearch] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    
    if (e.target.value.length === 0) {
      onSearch(null);
    }

  };

  const onClick = async () => {
    onSearch(search.toLocaleLowerCase());
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={ onChange } />
      </div>
      <div className="searchbar-btn">
        <button onClick={ onClick }>Buscar</button>
      </div>
    </div>
  );
};
