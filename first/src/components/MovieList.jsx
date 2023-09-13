import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';

function NavigationMenu({ user, onSignOut }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your API here
    // Example fetch:
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=03ace05640f5232c7c45f00e0e67fcc4')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API Data:', data); // Debugging: Log the API response
        if (data.results) {
          setMovies(data.results);
          setLoading(false);
        } else {
          throw new Error('API response does not contain results');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);
  
  const handleSignOut = () => {
    onSignOut();
    navigate('/');
  };

  const handleSearch = () => {
    navigate(`/search/${searchTerm}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const containerStyle = {
    maxWidth: '800px', // Limit the maximum width for responsiveness
    margin: '0 auto', // Center the container horizontally
    marginTop: '50px', // Add top margin for spacing
  };

  const titleStyle = {
    fontSize: '2.5rem', // Larger font size for the title
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '1rem', // Add margin below the title
    color: 'white', // Text color
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

  return (
    <div>
      <div className="container-fluid background-container" id={styles.NavBar}>
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
                <Link className="nav-link" to="/search">
                  Search Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin" id={styles.input1}>
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
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <div className="row">
                  {movies.map((movie) => (
                    <div key={movie.id} className="col-lg-3">
                      <div className="MovieCard d-flex flex-column gap-2">
                        <div className="Poster">
                          <div className="PosterImage">
                            <div className="Poster" style={{ background: '#C4C4C4' }}></div>
                            <img
                              className="Poster"
                              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                              alt={movie.title}
                            />
                          </div>
                          {/* Rest of the MovieCard content */}
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
    </div>
  );
}

export default NavigationMenu;
