import { Request, Response } from 'express';
import { Booking } from '../models/Booking';
import { Mentor } from '../models/Mentor';
import { sendConfirmationEmail } from '../utils/sendEmails';

export const createBooking = async (req: Request, res: Response) => {
  const { userEmail, userName, mentorId, sessionDate, sessionType } = req.body;

  try {
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }

    const booking = await Booking.create({ userEmail, userName, mentorId, sessionDate, sessionType });

    // Send confirmation email
    sendConfirmationEmail(userEmail, {
      mentorName: mentor.name,
      sessionDate,
      sessionType,
    });

    res.status(200).json({ message: 'Booking successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
