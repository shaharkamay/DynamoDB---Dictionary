import express from 'express';
import { getWord, getWordAndPOS } from '../controllers/word';

const router = express.Router();

router.get('/:word', getWord);
router.get('/:word/:pos', getWordAndPOS);

export default router;
