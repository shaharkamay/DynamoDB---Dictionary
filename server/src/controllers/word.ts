import { NextFunction, Request, Response } from 'express';
import { wordService } from '../services';

const getWord = async (req: Request, res: Response, next: NextFunction) => {
  const { word } = req.params;
  const wordDef = await wordService.getWord(word);
  res.json(wordDef);
};

export { getWord };
