import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import logo from "./assets/logo.png";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevius = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <div className="text-center">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="container">
        <Characters characters={characters} />

        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevius={onPrevius}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
