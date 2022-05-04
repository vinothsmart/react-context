import { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movieList] = useContext(MovieContext);
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
