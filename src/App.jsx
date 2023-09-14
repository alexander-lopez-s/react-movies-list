import MovieList from "./components/MovieList"; 
import "./App.css"
import Title from "./components/Title";
import movieListData from "../film.js";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="main-container">
      <Title/>
      <SearchBar/>
      <MovieList movies={movieListData} />
    </div>
  );
};

export default App;
