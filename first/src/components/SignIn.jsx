import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate user authentication (replace with real authentication)
    const userData = {
      name: 'John Doe',
      email: formData.email,
    };
    navigate('/Movies'); // Redirect to the Movies page after sign-in
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/SignUp">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignIn;
