
import React from 'react';

function TextComponent({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default TextComponent;
