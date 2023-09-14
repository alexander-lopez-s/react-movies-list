import MovieList from "./components/MovieList"; 
import "./App.css"
import Title from "./components/Title";
import movieListData from "../film.js";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const filteredMovies = movieListData.filter((movie) =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (search) => {
    setSearchTerm(search);
  };

  return (
    <div className="main-container">
      <Title />
      <SearchBar onSearchChange={handleSearchChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};


export default App;
