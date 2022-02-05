import { NextFunction, Request, Response } from 'express';
import { posService } from '../services';

const getRandomWord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { pos } = req.params;
    const letter = (req.query.letter || '') as string;
    const wordDef = await posService.getRandomWord(pos, letter);
    res.json(wordDef);
  } catch (error) {
    next(error);
  }
};

export { getRandomWord };
