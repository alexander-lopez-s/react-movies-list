import MovieList from "./components/MovieList";
import "./App.css";
import Title from "./components/Title";
import movieListData from "../film.js";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to search for the specific movie
  const handleSearchChange = (search) => {
    setSearchTerm(search);
  };

  // Conditionally filter the movies or show all movies
  const filteredMovies = searchTerm
    ? movieListData.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : movieListData;

  return (
    <div className="main-container">
      <Title />
      <SearchBar onSearchChange={handleSearchChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
