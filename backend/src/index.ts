import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import mentorRoutes from './routes/mentorRoutes';
import bookingRoutes from './routes/bookingRoutes';
import cors, { CorsOptions } from 'cors';

dotenv.config();

const app = express();
app.use(express.json());

// Define allowed origins
const allowedOrigins = ['http://localhost:5003', process.env.FRONTEND_URI || ''];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};


app.use(cors(corsOptions));


// Sample error handler middleware (optional)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).send('Internal Server Error');
});

connectDB();

app.use('/api/mentors', mentorRoutes);
app.use('/api/bookings', bookingRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
