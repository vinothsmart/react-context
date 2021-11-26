import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        {/* <h1>Let's Code</h1> */}
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
