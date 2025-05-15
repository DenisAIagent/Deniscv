import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import trackRouter from './api/track.js'; // tu peux le laisser ici

const app = express(); // 👈 doit être initialisé avant tout `app.use`

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api/track', trackRouter); // 👈 maintenant c’est OK
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.error('🚨 Promesse non gérée :', err);
});
