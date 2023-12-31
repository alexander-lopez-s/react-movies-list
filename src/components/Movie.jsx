import { useState } from "react";

const Movie = ({movie}) => {
    const [like, setLike] = useState(false);
    const handleLike = () => {
        setLike(!like);
      };
    return (
    <div className="movie-card">
    <img src={movie.Poster} alt={movie.Title} />
    <h2>{movie.Title}</h2>
    <div className="year-likes-wrapper">
    <p>Year: {movie.Year}</p>
    <p className={`heart-icon ${like ? 'liked' : 'not-liked'}`}
        onClick={handleLike}>
        ❤
    </p>
    </div>
  </div>
    )
}

export default Movie;