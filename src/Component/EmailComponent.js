
import React from 'react';

function EmailComponent({ value, onChange }) {
  return (
    <div>
      <label>Email:</label>
      <input type="email" value={value} onChange={onChange} />
    </div>
  );
}

export default EmailComponent;
