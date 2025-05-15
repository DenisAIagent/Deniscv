import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import trackRouter from './api/track.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8080;

const app = express();

// Middleware
app.use(express.json());
app.use('/api/track', trackRouter);

// Serve fichiers frontend
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});

// Pour logs d'erreurs non capturées
process.on('unhandledRejection', (err) => {
  console.error('🚨 Promesse non gérée :', err);
});
