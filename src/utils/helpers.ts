import { NextFunction, Request, Response } from 'express';
import path from 'path';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const render = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.sendFile(path.resolve('./client/build/index.html'));
  } catch (err) {
    next(err);
  }
};

export { getRandomInt, render };
