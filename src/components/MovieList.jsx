const MovieList = ({ movies }) => {
  return (
    <div className="movies-section">
      <ul className="movies-gallery">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
