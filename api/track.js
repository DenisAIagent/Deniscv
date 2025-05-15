// api/track.js
import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("❌ MONGODB_URI is not defined");

const client = new MongoClient(uri);
const db = client.db('cvsite');
const events = db.collection('events');

router.post('/', async (req, res) => {
  try {
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
    console.error('❌ Tracking error:', err.stack || err);
    res.sendStatus(500);
  }
});

export default router;
