import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';

// const app = express();
// app.use(express.json());
dotenv.config({ path: './.env' });
console.log('Connecting to MongoDB...');
connectDB();

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });
