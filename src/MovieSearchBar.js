import React, { useEffect, useRef, useState } from "react";

const MovieSearchBar = ({ getMovies }) => {
  const myRef = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=d3d2e3261fa9b4aff72b9f65f45d26ce&language=en-US&page=1&include_adult=false&query=${searchValue}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(typeof data.results);
      setMoviesList(data.results);
      getMovies(data.results);
    }
    fetchMyAPI();
  }, [searchValue]);

  const handleClick = () => {
    const src = myRef.current.value;
    setSearchValue(src);
    // getMovies(moviesList);
  };

  return (
    <div>
      {/* <p>hello from Movie Search Bar</p> */}
      Search:
      <input type="text" ref={myRef} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};
export default MovieSearchBar;
