import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNomber from "./utils/getRandomNomber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import ImagenLogo from "./components/ImagenLogo";
import Pagination from "./components/Pagination";

function App() {
  const [inputValue, setInputValue] = useState(getRandomNomber(126));

  const url = `https://rickandmortyapi.com/api/location/${
    inputValue || "no hay respuesta"
  }`;
  const [location, getLocation, hasError] = useFetch(url);

  const [pages, setPages] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);

  console.log(currentPage);

  useEffect(() => {
    getLocation();
  }, [inputValue]);

  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim());
  };

  const skip = (currentPage - 1) * 8;

  return (
    <div className="main__container">
      <ImagenLogo />
      <form className="container__search" onSubmit={handleSubmit}>
        <input
          placeholder="Search by id i.e 1"
          className="input__search"
          ref={inputSearch}
          type="text"
        />
        <button className="button__search">Search</button>
      </form>
      {hasError ? (
        <h2 className="error__text">
          ❌ Hey!!! you must provide an id from 1 to 126😓
        </h2>
      ) : (
        <>
          {" "}
          <LocationInfo location={location} />
          <div className="info__cards">
            {location?.residents.slice(skip, 8 + skip).map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
      <Pagination
        residents={location?.residents}
        pages={pages}
        setPages={setPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
