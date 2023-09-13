import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./styles.module.css";

function NavigationMenu({ user, onSignOut }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerStyle = {
    maxWidth: '800px', // Limit the maximum width for responsiveness
    margin: '0 auto',  // Center the container horizontally
    marginTop: '50px', // Add top margin for spacing
  };

  const titleStyle = {
    fontSize: '2.5rem',    // Larger font size for the title
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '1rem',  // Add margin below the title
    color: 'white',        // Text color
  };

  const ratingContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const ratingStyle = {
    fontSize: '1rem',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '400',
    color: 'white',
    marginRight: '1rem', // Add spacing between ratings
  };

  const descriptionStyle = {
    fontSize: '1rem',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '500',
    lineHeight: '1.5',
    marginBottom: '1rem',
    color: 'white',
  };

  const buttonStyle = {
    backgroundColor: '#BE123C',
    borderRadius: '6px',
    fontSize: '1rem',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '700',
    textTransform: 'uppercase',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 12px',
    color: 'white',
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '50%',
    marginRight: '8px',
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=03ace05640f5232c7c45f00e0e67fcc4'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
          setLoading(false);
        } else {
          throw new Error('API response does not contain results');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSignOut = () => {
    onSignOut();
    navigate('/');
  };

  const handleSearch = () => {
    navigate(`/MovieList`);
  };

  return (
    <div> 
       <div className="container-fluid background-container img-fluid" id={styles.NavBar}>
        <nav className="navbar navbar-expand-lg img-fluid img-fluid">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/a73b/9b32/376a54ffd2dfb11ef1f3a8b513491895?Expires=1695600000&Signature=PwVvK6KfdUw4JIzipR9rZvRmFJnvPO5O1aDWcC3-72QgXOG7EHZ1VxMy46eaqGN3vT9Y7NbePvbvSkUVgPVmMQ61xpnsWTRz00MAb5PIKPwjjVhkO7T30OqqpVW5i105r5HXrD2qdnu5gEzHN3fN3rwqkC58dDRBvkRDuBLpQIsb5kr7fMPGUvecD46K~ZhPvfSloW1m8re5yL-DWnQiY78WqoYidxryuXmPrT8mWF5HULiRCo1MwLUWlfxONKaUTbuFBI1aCOb77EwX5fFlA8akB6EHBTnceY6jmbyt-cw9QK-Bc3Z4IsYoS8MNfYxZPQY8z2HJ0ANwp4bQieTnrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Logo"
                width="35"
                height="35"
                className="d-inline-block align-text-top"
              />
              <span id={styles.Moviebox} className="h5">
                Movie Box
              </span>
            </a>
            <div className="d-flex align-items-center justify-content-center container-fluid w-50 text-white ">
              <div className="input-group">
                <input
                  type="text"
                  id={styles.input1}
                  className="form-control text-white"
                  placeholder="What do you want to watch?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    onClick={handleSearch}
                    disabled={!searchTerm}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/MovieList">
                  Search Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SignIn" id={styles.input1}>
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-5" style={containerStyle}>
          <div className="row">
            <div className="col-lg-10">
              <h1 style={titleStyle}>John Wick 3: <br /> Parabellum</h1>
              <div style={ratingContainerStyle}>
                <div style={ratingStyle}>
                  <img
                    style={{ width: '35px', height: '17px', marginRight: '10px' }}
                    src="https://s3-alpha-sig.figma.com/img/a423/5182/5bf071206cd1f384cc337b8867ae5aeb?Expires=1695600000&Signature=GmjlYRtN7Bn0a000PlFfH7~PSPUqhjlmeVjeG78xahYPVsdYtx9OB4Xw~McOajU0VJdzWV~kOb9Y7BxuYGt9nLl4j3fa13J0CV-jFgkZYrbsnLqCsatzsp-GOBePlv11WtoU0Y-VyqcucOgQ4WtWOpm-CRHRxt6dyYhRTWnHDK6jTdwq450LeJJDrlGIXs7UR48IWEjn4CLtl-yFzrYzqgaEJFc4hhkYaRWHEHA5zq~9PMSRfatf1FMdVUmSY-f4dRF~XYj82h7PF5RCazgn8p-k6cF5zKaAZwg5mDRFcAa6L4dnBpVqub5ELdMya7wD4MgJe1KfHFUR-ipYPNEGEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="IMDb"
                  />
                  86.0 / 100
                </div>
                <div style={ratingStyle}>
                  <img
                    style={{ width: '16px', height: '17px', marginRight: '10px' }}
                    src="https://s3-alpha-sig.figma.com/img/8e6d/4012/82ace228929a9068f3eb189a3ea549a7?Expires=1695600000&Signature=qF~QGIuW0LhKdlzuXcioKGCczJNvscvmmfw3pgAXSbQ52prxwI9-Xim4eWdhQiBWp9IJmdhPMWUEd6h1hTVX0MZMfjSzN7KGWIg~K6crB4ucKBB2kGenYomk~GvlnFGnNQeNR5cNJtpRx8ZP0PQCYmdhLkay5A5nZJyxnpXAggdswF0osy6Fjkt9YG81WFkdC0A~mRZEtFm5SfDi-yi-PryjCvHBFC-TwQwloT-~aPsEOEzQYsuiiCK9ub32hslNLXDrRNTQNT~fVbndRlX8bIIhhjPLQtzp~b7pFAiJdAat~0~U2nLFTMMCbpeOHUy-9W4hSYpoHwKVxwVyQG8xZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="Rotten Tomatoes"
                  />
                  97%
                </div>
              </div>
              <p style={descriptionStyle}>
                John Wick is on the run after killing a member <br /> of the international assassins' guild, and with <br /> a $14 million price tag on his head, he is the <br /> target of hit men and women everywhere.
              </p>
              <button style={buttonStyle}>
                <div style={iconStyle}></div> Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-10">
            <h1 className="display-4">John Wick 3: Parabellum</h1>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
              <div className="row">
                {movies.map((movie) => (
                  <div key={movie.id} className="col-sm-6 col-md-3 col-lg-3 " id={styles.MovieCard}>
                    <div className="card mb-2">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">
                          Release Date: {movie.release_date}
                        </p>
                        <p className="card-text">
                        Watch Movie {movie.poster_path}
                        </p>
                        <p className="card-text">
                          Movie Popularity: {movie.popularity}
                        </p>
                        {/* Add more movie details here */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
