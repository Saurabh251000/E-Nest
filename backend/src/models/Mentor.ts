import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  profile: { type: String },
  experience: { type: Number, required: true },
  topVoice: { type: Boolean, default: false },
  color: { type: String },
});

export const Mentor = mongoose.model('Mentor', mentorSchema);
