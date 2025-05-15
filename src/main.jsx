import React, { Suspense } from 'react'; // <--- Importer Suspense
import ReactDOM from 'react-dom/client';
import '../i18n/locales/config.js'; // Import i18n configuration (garder avant)
import App from './App.jsx'; 
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👇 Ajouter Suspense ici 👇 */}
    <Suspense fallback={<div>Chargement des traductions...</div>}> 
      <App /> 
    </Suspense>
    {/* ↑↑↑ Fin de Suspense ↑↑↑ */}
  </React.StrictMode>,
);
