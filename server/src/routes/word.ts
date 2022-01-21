import express from 'express';
import { getWord } from '../controllers/word';

const router = express.Router();

router.get('/:word', getWord);

export default router;
