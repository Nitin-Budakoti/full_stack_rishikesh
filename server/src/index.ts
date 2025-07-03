import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bookingRoutes from './routes/booking';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/', bookingRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});