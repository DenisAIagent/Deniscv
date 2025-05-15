import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('cvsite');
const events = db.collection('events');

router.post('/', async (req, res) => {
  try {
    const { event, lang, userAgent } = req.body;
    await events.insertOne({ event, lang, userAgent, timestamp: new Date() });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

export default router; 