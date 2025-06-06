import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();

let client, db, events;

// Connexion MongoDB seulement lors du premier appel
async function initMongo() {
  if (!client) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("❌ MONGODB_URI is not defined");

    client = new MongoClient(uri);
    await client.connect();
    db = client.db('cvsite');
    events = db.collection('events');
    console.log('✅ Connexion MongoDB établie');
  }
}

// Route POST /api/track
router.post('/', async (req, res) => {
  try {
    await initMongo();

    const { event, lang, userAgent } = req.body;
    if (!event) return res.status(400).json({ error: 'event is required' });

    await events.insertOne({
      event,
      lang: lang || 'unknown',
      userAgent: userAgent || 'unknown',
      timestamp: new Date()
    });

    res.sendStatus(200);
  } catch (err) {
    console.error('❌ Erreur dans /api/track :', err.stack || err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
