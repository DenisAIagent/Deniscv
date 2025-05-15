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
      console.error('MONGODB_URI is not defined');
      return;
    }
    
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db('cvsite');
    events = db.collection('events');
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

// Initialiser la connexion
initMongoDB();

router.post('/', async (req, res) => {
  try {
    if (!events) {
      throw new Error('MongoDB not initialized');
    }
    
    const { event, lang, userAgent } = req.body;
    await events.insertOne({ 
      event, 
      lang, 
      userAgent, 
      timestamp: new Date(),
      ip: req.ip
    });
    res.sendStatus(200);
  } catch (err) {
    console.error('Tracking error:', err);
    res.sendStatus(500);
  }
});

// Gérer la fermeture propre de la connexion
process.on('SIGINT', async () => {
  if (client) {
    await client.close();
    console.log('MongoDB connection closed');
  }
  process.exit(0);
});

export default router; 