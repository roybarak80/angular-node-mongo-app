import express from 'express';
import cors from 'cors';
import { connectToDB, Item } from './mongo.js';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/api/item', async (req, res) => {
  const item = await Item.findOne();
  res.json(item);
});

app.listen(PORT, async () => {
  await connectToDB();
  const count = await Item.countDocuments();
  if (count === 0) {
    await Item.create({
      name: 'Test Item',
      description: 'This is a test entry from MongoDB'
    });
    console.log('Inserted sample item');
  }
  console.log(`Server is running on port ${PORT}`);
});
