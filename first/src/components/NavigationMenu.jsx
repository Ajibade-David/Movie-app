import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavigationMenu({ user, onSignOut }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSignOut = () => {
    onSignOut();
    navigate('/');
  };

  const handleSearch = () => {
    // Handle the search functionality here, e.g., navigate to the search results page
    // You can replace this comment with the actual code to perform the search
    navigate(`/search/${searchTerm}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="logo-text">MovieBox</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search Movies
              </Link>
            </li>
          
          </ul>
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
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
              <li className="nav-item ">
              <input
                type="text"
                className="form-control ml-2"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary ml-2"
                onClick={handleSearch}
                disabled={!searchTerm}
              >
                Search
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;
