import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  return (
    <div className="card shadow">
      <Link to={`/movies/${movie.id}`} className="card-link">
        <img src={imageUrl} className="card-img-top" alt={movie.title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p className="card-text">
          <strong>Rating:</strong> {movie.vote_average}
        </p>
        <p className="card-text">
          <strong>Overview:</strong> {movie.overview}
        </p>
        {/* You can add more movie details here as needed */}
      </div>
    </div>
  );
}

export default MovieCard;
