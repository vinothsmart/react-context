import { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [movieList, setMovieList] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updatePrice = (event) => {
    setPrice(event.target.value);
  };

  const addMovie = (event) => {
    event.preventDefault();
    setMovieList((preMovies) => [
      ...preMovies,
      { name: name },
      { price: price },
    ]);
  };

  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" placeholder="Name" onChange={updateName} />
      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={updatePrice}
      />
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
