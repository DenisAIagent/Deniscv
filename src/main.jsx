import React from 'react';
import '../i18n/locales/config.js'; // Import i18n configuration
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ce chemin est correct (App.jsx est au même niveau que main.jsx dans src)
import './index.css'; // Ce chemin est correct (index.css est au même niveau que main.jsx dans src)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
