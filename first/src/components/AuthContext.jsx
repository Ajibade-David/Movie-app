import React, { useState, useContext } from 'react';

// Create a context for managing authentication
const AuthContext = React.createContext();

// Create a provider component for the AuthContext
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to handle user sign-in
  const signIn = (userData) => {
    setUser(userData);
  };

  // Function to handle user sign-out
  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
