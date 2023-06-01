import { env } from 'node:process';
import path from 'node:path';

import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = env.PORT || 8080;

const mainPathJoin = (...paths: string[]) => {
  const main: string = require.main?.path ? require.main.path : "../";
  return path.join(main, ...paths);
}

app.get("*", (req: Request, res: Response) => {
  res.sendFile(mainPathJoin("index.html"));
});

app.listen(port, () => {
  console.warn(`-> App listening on port ${port}`);
});