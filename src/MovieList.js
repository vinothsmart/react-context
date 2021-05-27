import { useState } from "react";

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
        <li>{movie.name}</li>
      ))}
    </div>
  );
};

export default MovieList;
