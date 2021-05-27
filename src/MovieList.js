import { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movieList, setMovieList] = useState([
    {
      name: "Petta",
      price: "120rs",
      id: "001",
    },
    {
      name: "Viswasam",
      price: "120rs",
      id: "002",
    },
    {
      name: "Karanan",
      price: "120rs",
      id: "003",
    },
  ]);
  return (
    <div>
      {movieList.map((movie) => (
        <Movie name={movie.name} />
      ))}
    </div>
  );
};

export default MovieList;
