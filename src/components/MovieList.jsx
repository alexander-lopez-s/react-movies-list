import "../App.css";
import Movie from './Movie';

const MovieList = ({ movies }) => {

  return (
    <div className="movies-section">
      <ul className="movies-gallery">
        {movies.map((movie, index) => (
        <Movie movie={movie} key={index}/>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
