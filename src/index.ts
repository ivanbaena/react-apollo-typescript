import express, { Response, Request } from 'express';

const app = express();

app.listen(3000, () => {
  console.log('React SSR! is ready on PORT: 3000');
});

// Page Renderer
app.get('*', (req: Request, res: Response) => {
  const content = 'Hello World';
  res.send(content);
});
