import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import trackRouter from './api/track.js';
app.use('/api/track', trackRouter);


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log des variables d'environnement
console.log('🔧 Environment variables:');
console.log('MONGODB_URI:', process.env.MONGODB_URI ? '✅ Defined' : '❌ Not defined');
console.log('PORT:', process.env.PORT || 3000);
console.log('NODE_ENV:', process.env.NODE_ENV || 'development');

// Middleware pour parser le JSON
app.use(express.json());

// Middleware pour gérer les CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Middleware pour logger les requêtes
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes API
app.use('/api/track', trackRouter);

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'dist')));

// Route catch-all pour le SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
}); 
