import React, { useState } from 'react';

function PasswordComponent({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label>Password:</label>
      <input type={showPassword ? "text" : "password"} value={value} onChange={onChange} />
      <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default PasswordComponent;
