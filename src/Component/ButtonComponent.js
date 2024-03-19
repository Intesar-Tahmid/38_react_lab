
import React from 'react';

function ButtonComponent({ text, onClick }) {
  return (
    <button type="submit" onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonComponent;
