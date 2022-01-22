import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import apiRouter from './routes/api';
import errorHandler from './utils/middleware/error-handling';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('../client/build'));

const render = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.sendFile(path.resolve('../client/build/index.html'));
  } catch (err) {
    next(err);
  }
};

app.get('/', render);
app.get('/words/:word', render);
app.get('/words/:word/:pos', render);
app.get('/part-of-speech/:pos', render);
app.get('/part-of-speech/:pos/:letter', render);

app.use('/api', apiRouter);

app.use(errorHandler);

// export { serverless(app) };

export default app;
