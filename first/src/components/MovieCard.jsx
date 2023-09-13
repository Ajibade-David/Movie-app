// MovieCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieCard = ({ movieId }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    // Replace with your TMDb API key
    const apiKey = 'YOUR_API_KEY_HERE';

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=watch/providers`)
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  // Extract relevant information from movieData
  const {
    title,
    poster_path,
    release_date,
    overview,
    genres,
    vote_average,
    providers,
  } = movieData;

  return (
    <div className="MovieCard">
      <img
        src={`https://image.tmdb.org/t/p/w250_and_h370_bestv2${poster_path}`}
        alt={title}
      />
      <h2>{title}</h2>
      <p>Release Date: {release_date}</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres.map((genre) => genre.name).join(', ')}</p>
      <p>Rating: {vote_average}</p>
      {/* You can display streaming providers here from the 'providers' object */}
    </div>
  );
};

export default MovieCard;
  