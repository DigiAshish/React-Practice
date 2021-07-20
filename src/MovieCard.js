import React from "react";

const MovieCard = ({ movies }) => {
  const myStyle = {
    float: "right",
    width: "25%",
    marginRight: "0px",
    border: "1px solid black"
  };
  return (
    <div style={myStyle}>
      {movies &&
        movies.map((movie, index) => (
          <>
            <div>
              <p>{movie.original_title}</p>
            </div>
          </>
        ))}
    </div>
  );
};
export default MovieCard;
