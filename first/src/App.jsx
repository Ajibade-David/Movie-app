import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import Favorites from './components/Favorites';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NavigationMenu from './components/NavigationMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoMatch from "./components/NoMatch";
// import './styles.css';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Function to simulate user login (replace with real authentication)
  const handleSignIn = (userData) => {
    setUser(userData);
    navigate('/');
  };

  // Function to simulate user registration (replace with real authentication)
  const handleSignUp = (userData) => {
    setUser(userData);
    navigate('/');
  };
  
  // Function to simulate user logout (replace with real authentication)
  const handleSignOut = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="container">
      <header>
        <NavigationMenu user={user} onSignOut={handleSignOut} />
      </header>
      <main>
        <Routes>
          
        <Route path='*' element={<NoMatch/>}/>
          <Route
            path="/"
            element={ <Layout user={user}>
            <MovieSearch user={user} />
          </Layout>
            }
          />
          <Route
            path="/search/*"
            element={
              <Layout user={user}>
                <MovieSearch user={user} />
              </Layout>
            }
          />
          <Route
            path="/movies/:id"
            element={
              <Layout user={user}>
                <MovieDetails user={user} />
              </Layout>
            }
          />
          <Route
            path="/favorites"
            element={
              <Layout user={user}>
                <Favorites user={user} />
              </Layout>
            }
          />
          <Route
            path="/signin"
            element={
              <Layout user={user}>
                <SignIn onSignIn={handleSignIn} />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout user={user}>
                <SignUp onSignUp={handleSignUp} />
              </Layout>
            }
          />
        </Routes>
      </main>
      <footer className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Movie App</p>
      </footer>
    </div>
  );
}

export default App;
