import express from 'express';
import { getMentors, getMentorById } from '../controllers/mentorController';

const router = express.Router();

router.get('/', getMentors);
router.get('/:id', getMentorById);

export default router;
