// Button.jsx
import React from 'react';

function Button({ onClick, text, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
