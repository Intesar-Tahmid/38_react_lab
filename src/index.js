import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css'; // Your CSS file for styling
import DynamicTextboxes from './DynamicTextboxes';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskManager from './TaskManager';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dynamic-textboxes" element={<DynamicTextboxes />} />
        <Route path="/task-manager" element={<TaskManager />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

