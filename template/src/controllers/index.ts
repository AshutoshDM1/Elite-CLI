import { Request, Response } from 'express';

export const homeController = {
  index: (req: Request, res: Response) => {
    res.json({ message: 'Welcome to Elite-xpress API' });
  }
};
