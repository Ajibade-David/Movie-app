import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';

function NavigationMenu({ user, onSignOut }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="container-fluid background-container" id={styles.NavBar}>
      <nav className="navbar navbar-expand-lg img-fluid img-fluid"   >
         <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://s3-alpha-sig.figma.com/img/a73b/9b32/376a54ffd2dfb11ef1f3a8b513491895?Expires=1695600000&Signature=PwVvK6KfdUw4JIzipR9rZvRmFJnvPO5O1aDWcC3-72QgXOG7EHZ1VxMy46eaqGN3vT9Y7NbePvbvSkUVgPVmMQ61xpnsWTRz00MAb5PIKPwjjVhkO7T30OqqpVW5i105r5HXrD2qdnu5gEzHN3fN3rwqkC58dDRBvkRDuBLpQIsb5kr7fMPGUvecD46K~ZhPvfSloW1m8re5yL-DWnQiY78WqoYidxryuXmPrT8mWF5HULiRCo1MwLUWlfxONKaUTbuFBI1aCOb77EwX5fFlA8akB6EHBTnceY6jmbyt-cw9QK-Bc3Z4IsYoS8MNfYxZPQY8z2HJ0ANwp4bQieTnrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Logo" width="35" height="35" class="d-inline-block align-text-top"/>
     MovieBox
    </a>
    <form class="container-fluid" role="search">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </div>
  </form>
  </div>
      <div className="container">
        {/* <button
          className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search Movies
              </Link>
            </li>
          </ul> */}
          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/favorites">
                    Favorites
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
              
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                </li>
                <div  className="h1">John Wick 3 : Parabellum</div>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search movies..."
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
            </li>
          </ul>
        </div>
    </nav>
      </div>
  );
}

export default NavigationMenu;
