import { Request, Response } from 'express';
import path from 'path';

const sendStaticJs = (req: Request, res: Response) => {
  res
    .sendFile('public/plugin.js', { root: path.join(__dirname, '../../public') });
};

export default sendStaticJs;
