import { useEffect, useState } from "react";

const names = ["Charlie", "Leslie", "Jane", "Gordo"];

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [itemsFound, setItemsFound] = useState([]);

  useEffect(() => {
    const foundItems = getFoundItems(searchText, names);
    console.log("found->", foundItems);
    // console.log(foundItems);
    // display(foundItems);
    setItemsFound(foundItems);
  }, [searchText]);

  const getFoundItems = (searchText, items) => {
    if (searchText === "") return [];

    return items.filter((i) => {
      const regex = new RegExp(searchText, "gi");
      const match = i.match(regex);
      console.log(match);
      return match;
    });
  };

  const display = (items) => {
    return (
      <>hi...</>
      // {
      //   items.map( (i) => {

      // }) }
    );
  };

  const handleOnChange = (e) => {
    const value = e.target.value;

    setSearchText(value);
  };

  return (
    <>
      <input
        aria-label="Name Search"
        placeholder="Enter a name"
        onChange={handleOnChange}
        value={searchText}
      />
      <SearchResults results={itemsFound} />
    </>
  );
};

const SearchResults = ({ results }) => {
  return (
    <>
      {results.map((result, i) => {
        return (
          <div key="result" style={{ padding: "10px", border: "solid" }}>
            {result}
          </div>
        );
      })}
    </>
  );
};

export default Search;
