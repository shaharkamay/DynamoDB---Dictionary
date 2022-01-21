import { NextFunction, Request, Response } from 'express';
import { wordService } from '../services';

const getWord = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { word } = req.params;
    const wordDef = await wordService.getWord(word);
    res.json(wordDef);
  } catch (error) {
    next(error);
  }
};

const getWordAndPOS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { word, pos } = req.params;
    const wordDef = await wordService.getWordAndPOS(word, pos);
    res.json(wordDef);
  } catch (error) {
    next(error);
  }
};

export { getWord, getWordAndPOS };
