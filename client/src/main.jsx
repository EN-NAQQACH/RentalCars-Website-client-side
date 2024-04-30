import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import App2 from './App2.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>

)
