import express, { Response, Request } from 'express';
import { renderer } from './helpers/index';

const app = express();

app.use(express.static('dist'));

app.listen(3000, () => {
  console.log('React SSR! is ready on PORT: 3000');
});

// Page Renderer
app.use('*', (req: Request, res: Response) => {
  renderer(req, res);
});
