import express from 'express';
import wordRouter from './word';

const router = express.Router();

router.use('/words', wordRouter);

export default router;
