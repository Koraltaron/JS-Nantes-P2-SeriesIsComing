import "./FilterBar.css";
import type EventI from "../assets/interfaces/EventI";

interface SearchI {
  search: string;
  setSearch: (index: string) => void;
}

function FilterBar({ search, setSearch }: SearchI) {
  const MAX_LENGTH = 20;

  const handleChange = (event: EventI) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setSearch(event.target.value);
    }
  };

  const maximumReached = search.length >= MAX_LENGTH;

  return (
    <>
      <input
        id="filter-bar"
        type="text"
        name="filter-bar"
        placeholder="Filtre les personnages"
        value={search}
        onChange={handleChange}
        className={maximumReached ? "length-maximum-reached" : "length-ok"}
      />
      <label htmlFor="filter-bar" id="label-search">
        Recherche :
      </label>
    </>
  );
}

export default FilterBar;
