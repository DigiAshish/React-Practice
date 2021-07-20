import React, { useState } from "react";
import MovieSearchBar from "./MovieSearchBar";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import MovieDesc from "./MovieDesc";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const myStyle = {
    border: "1px solid black",
    // height: "auto",
    backgroundColor: "lightgrey"
  };

  const getMovies = (list) => {
    setMovies(list);
  };
  return (
    <div style={myStyle}>
      <p>hello from movie page</p>
      <MovieSearchBar getMovies={getMovies} />
      <MovieList movies={movies} />
      <MovieCard movies={movies} />
      <MovieDesc movies={movies} />
      {/* {movies &&
        movies.map((movie, index) => (
          <li key={index}>{movie.original_title}</li>
        ))} */}
    </div>
  );
};
export default MoviePage;
