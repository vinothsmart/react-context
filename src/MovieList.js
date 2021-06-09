import { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  return (
    <div>
      {movieList.map((movie) => (
        <Movie
          name={movie.name}
          price={movie.price}
          id={movie.id}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default MovieList;
