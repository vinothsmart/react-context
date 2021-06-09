import { render } from "@testing-library/react";
import React, { createContext } from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";

const MovieContext = createContext();

const MovieProvider = () => {
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
  render(
    <MovieContext.Provider>
      <Nav />
      <MovieList />
    </MovieContext.Provider>
  );
};
