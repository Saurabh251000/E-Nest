import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', required: true },
  sessionDate: { type: Date, required: true },
  sessionType: { type: String, enum: ['online', 'offline'], required: true },
});

export const Booking = mongoose.model('Booking', bookingSchema);
