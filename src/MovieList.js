import React from "react";

const MovieList = ({ movies }) => {
  const myStyle = {
    float: "left",
    marginLeft: "0px",
    width: "25%",
    border: "1px solid black",
    height: "auto",
    backgroundColor: "lightgrey"
  };

  return (
    <div style={myStyle}>
      {/* <p>hello from Movie List</p> */}
      {movies &&
        movies.map((movie, index) => (
          <>
            <li style={{ listStyleType: "none" }}>
              <a key={index} href="blank">
                {movie.original_title}
              </a>
            </li>
          </>
        ))}
    </div>
  );
};
export default MovieList;
