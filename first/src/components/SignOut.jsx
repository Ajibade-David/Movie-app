import React from 'react';
import { useAuth } from './AuthContext';

function SignOut() {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div>
      <button onClick={handleSignOut} className="btn btn-danger">
        Sign Out
      </button>
    </div>
  );
}

export default SignOut;
