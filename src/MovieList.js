import { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const value = useContext(MovieContext);
  return (
    <div>
      <h1>{value}</h1>
      {/* {movieList.map((movie) => (
        <Movie
          name={movie.name}
          price={movie.price}
          id={movie.id}
          key={movie.id}
        />
      ))} */}
    </div>
  );
};

export default MovieList;
