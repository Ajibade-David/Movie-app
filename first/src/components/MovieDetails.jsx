import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [originalLink, setOriginalLink] = useState(null);

  useEffect(() => {
    // Define your TMDB API key
    const apiKey = '03ace05640f5232c7c45f00e0e67fcc4';

    // Define the TMDB API endpoint for movie details
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=watch/providers`;

    fetch(movieDetailsUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        const providers = data['watch/providers'];
        if (providers) {
          const streamingLinksArray = Object.entries(providers.results.US).map(([key, value]) => ({
            platform: key,
            link: value.link,
          }));
          setOriginalLink(data.homepage); // Set the original link
        }
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  const handleCheckout = () => {
    setIsCheckedOut(true);
  };

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h1 className="display-4">{movieDetails.title}</h1>
          <p>
            <strong>Release Date:</strong> {movieDetails.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movieDetails.vote_average}
          </p>
          <p>
            <strong>Overview:</strong> {movieDetails.overview}
          </p>
          {isCheckedOut ? (
            <div>
              <p className="text-success">Checked out successfully!</p>
              {originalLink && (
                <a href={originalLink} target="_blank" rel="noopener noreferrer">
                  Watch Now (Original Link)
                </a>
              )}
            </div>
          ) : (
            <button className="btn btn-primary" onClick={handleCheckout}>
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
