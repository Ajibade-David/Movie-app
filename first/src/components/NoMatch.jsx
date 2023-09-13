import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div className="text-center mt-5">
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default NoMatch;
