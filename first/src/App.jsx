import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NavigationMenu from './components/NavigationMenu'; // Import the NavigationMenu component
import 'bootstrap/dist/css/bootstrap.min.css';
import NoMatch from './components/NoMatch';
import Movies from './components/Movies';
import MovieSearch from './components/MovieSearch';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Function to simulate user login (replace with real authentication)
  const handleSignIn = (userData) => {
    setUser(userData);
    navigate('/SignIn');
  };

  // Function to simulate user registration (replace with real authentication)
  const handleSignUp = (userData) => {
    setUser(userData);
    navigate('/SignUp');
  };

  // Function to simulate user logout (replace with real authentication)
  const handleSignOut = () => {
    setUser(null);
    navigate('/SignOut');
  };

  return (
    <Routes>
    <Route path='/' element={<NavigationMenu  />}/>
    <Route path='/SignUp' element={<SignUp/>}/>
     <Route path='SignIn' element={<SignIn/>}/>
     <Route path='Movies' element={<Movies/>}/>
      <Route path='*' element={<NoMatch/>}/>
      <Route path='MovieSearch' element={<MovieSearch/>}/>
      <Route path='NavigationMenu' element={<NavigationMenu/>}/>
    </Routes>
  );
}

export default App;
