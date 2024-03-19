import React, { useState } from 'react';
import './DynamicTextboxes.css';

function DynamicTextboxes() {
  const [textboxes, setTextboxes] = useState([{ id: Date.now(), value: '' }]);
  const [warning, setWarning] = useState('');

  const handleAddTextbox = () => {
    const allNumbers = textboxes.every(textbox => /^\d*\.?\d*$/.test(textbox.value));
    if (allNumbers) {
      setTextboxes([...textboxes, { id: Date.now(), value: '' }]);
      setWarning('');
    } else {
      setWarning('Please input a number for addition');
    }
  };

  const handleDeleteTextbox = (id) => {
    setTextboxes(textboxes.filter(textbox => textbox.id !== id));
    if (warning) setWarning('');
  };

  const handleChange = (id, value) => {
    const newTextboxes = textboxes.map(textbox => {
      if (textbox.id === id) {
        return { ...textbox, value };
      }
      return textbox;
    });
    setTextboxes(newTextboxes);
  };

  const sum = textboxes.reduce((acc, curr) => acc + (Number(curr.value) || 0), 0);

  return (
    <div className="dynamic-textboxes-container">
      {textboxes.map((textbox) => (
        <div key={textbox.id} className="dynamic-textbox-row">
          <input
            type="text" // Change this to text to allow any input
            value={textbox.value}
            onChange={(e) => handleChange(textbox.id, e.target.value)}
          />
          <button onClick={() => handleDeleteTextbox(textbox.id)} className="delete-btn">Delete</button>
        </div>
      ))}
      <button onClick={handleAddTextbox}>Add</button>
      {warning && <div className="warning">{warning}</div>}
      <div className="sum-display">Sum: {sum}</div>
    </div>
  );
}

export default DynamicTextboxes;
