import express from 'express';
import { getRandomWord } from '../controllers/pos';

const router = express.Router();

router.get('/:pos', getRandomWord);

export default router;
