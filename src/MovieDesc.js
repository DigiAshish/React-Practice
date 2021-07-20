import React from "react";

const MovieDesc = ({ movies }) => {
  const myStyle = {
    width: "50%",
    margin: "auto",
    border: "1px solid black"
  };
  const box = {
    border: "1px solid green"
  };
  return (
    <div style={myStyle}>
      {/* <p>hello from MovieDesc</p> */}
      {movies &&
        movies.map((movie, index) => (
          <>
            <div style={box}>
              <p>{movie.original_title}</p>
              <p>{movie.overview}</p>
            </div>
          </>
        ))}
    </div>
  );
};
export default MovieDesc;
