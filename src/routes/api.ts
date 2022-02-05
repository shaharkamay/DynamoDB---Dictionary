import express from 'express';
import wordRouter from './word';
import posRouter from './pos';

const router = express.Router();

router.use('/words', wordRouter);
router.use('/part-of-speech', posRouter);

export default router;
