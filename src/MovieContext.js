import React, { createContext, useState } from "react";
import { render } from "react-dom";
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
      name: "Karanan",
      price: "120rs",
      id: "003",
    },
  ]);
  render(<MovieContext.Provider>{props.children}</MovieContext.Provider>);
};