import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  description: String
});

export const Item = mongoose.model('Item', itemSchema);

export async function connectToDB() {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/testdb';
  await mongoose.connect(uri);
  console.log('Connected to MongoDB');
}
