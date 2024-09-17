import mongoose, { Schema, Document } from "mongoose";

// Review schema
const ReviewSchema: Schema = new Schema({
  user: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String }
});

// Session schema
const SessionSchema: Schema = new Schema({
  date: { type: Date, required: true },
  duration: { type: Number, required: true }, 
  topic: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
  bookedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
});

//  Mentor interface
interface Mentor extends Document {
  name: string;
  bio: string;
  expertise: string[];
  sessions: typeof SessionSchema[];
  reviews: typeof ReviewSchema[];
  mentorshipDetails: {
    yearsOfExperience: number;
    availableHours: number;
  };
}

//  MentorSchema
const MentorSchema: Schema = new Schema({
  name: { type: String, required: true },
  bio: { type: String },
  expertise: [{ type: String, required: true }],
  sessions: [SessionSchema],
  reviews: [ReviewSchema],
  mentorshipDetails: {
    yearsOfExperience: { type: Number, required: true },
    availableHours: { type: Number, required: true }
  }
});

// MentorModel
const MentorModel = (mongoose.models.Mentor as mongoose.Model<Mentor>) || mongoose.model<Mentor>("Mentor", MentorSchema);

export default MentorModel;
