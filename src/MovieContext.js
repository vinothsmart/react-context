import React, { createContext, useState } from "react";
export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
      name: "Karnan",
      price: "120rs",
      id: "003",
    },
  ]);
  return (
    <MovieContext.Provider value="vinoth">
      {props.children}
    </MovieContext.Provider>
  );
};
