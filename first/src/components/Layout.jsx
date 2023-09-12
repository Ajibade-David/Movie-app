import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function Layout({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      return;
    }

    // Redirect to the search results page
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
           
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        {children}
      </div>
    </div>
  );
}

export default Layout;
