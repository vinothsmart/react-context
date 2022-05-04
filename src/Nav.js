import { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movieList] = useContext(MovieContext);
  return (
    <nav>
      <h2>Vinoth</h2>
      <h2>No of Movies: {movieList.length}</h2>
    </nav>
  );
};

export default Nav;
