import { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const value = useContext(MovieContext);
  return (
    <div>
      {/* {movieList.map((movie) => (
        <Movie
          name={movie.name}
          price={movie.price}
          id={movie.id}
          key={movie.id}
        />
      ))} */}
      <h1>{value}</h1>
    </div>
  );
};

export default MovieList;
