import { Request, Response } from 'express';

const sendStaticJs = (req: Request, res: Response) => {
  res
    .sendFile('public/plugin.js', { root: __dirname });
};

export default sendStaticJs;
