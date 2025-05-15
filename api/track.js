import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();
let client;
let db;
let events;

// Fonction pour initialiser la connexion MongoDB
async function initMongoDB() {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('❌ MONGODB_URI is not defined');
      return;
    }
    
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db('cvsite');
    events = db.collection('events');
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

// Initialiser la connexion
initMongoDB();

// Middleware pour vérifier la connexion MongoDB
const checkMongoConnection = (req, res, next) => {
  if (!events) {
    console.error('❌ MongoDB not initialized');
    return res.status(500).json({ error: 'Database connection not available' });
  }
  next();
};

router.post('/', checkMongoConnection, async (req, res) => {
  try {
    const { event, lang, userAgent } = req.body;
    
    if (!event) {
      return res.status(400).json({ error: 'event is required' });
    }

    const trackingData = {
      event,
      lang: lang || 'unknown',
      userAgent: userAgent || 'unknown',
      timestamp: new Date(),
      ip: req.ip
    };

    console.log('📊 Tracking event:', trackingData);
    
    await events.insertOne(trackingData);
    res.sendStatus(200);
  } catch (err) {
    console.error('❌ Tracking error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Gérer la fermeture propre de la connexion
process.on('SIGINT', async () => {
  if (client) {
    await client.close();
    console.log('✅ MongoDB connection closed');
  }
  process.exit(0);
});

export default router; 