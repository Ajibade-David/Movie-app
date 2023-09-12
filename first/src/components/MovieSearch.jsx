import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function MovieSearch({ user }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Initially set to true to display a loading message

  useEffect(() => {
    // Define your API endpoint (replace with your actual API endpoint)
    const API_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?api_key=03ace05640f5232c7c45f00e0e67fcc4`;

    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false on error
      });
  }, []); // The empty dependency array ensures this effect runs only once, when the component mounts

  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">Top Movies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
