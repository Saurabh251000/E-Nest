import { Request, Response } from 'express';
import { Mentor } from '../models/Mentor';

// Fetch all mentors
export const getMentors = async (req: Request, res: Response) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Fetch mentor by ID
export const getMentorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const mentor = await Mentor.findById(id);
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    res.json(mentor);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
