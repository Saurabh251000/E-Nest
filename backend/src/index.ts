import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import mentorRoutes from './routes/mentorRoutes';
import bookingRoutes from './routes/bookingRoutes';
import cors from 'cors'; // Import cors

dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_URI || '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true,
};
app.use(cors(corsOptions));

// app.use(cors()); 

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });


connectDB();

app.use('/api/mentors', mentorRoutes);
app.use('/api/bookings', bookingRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
