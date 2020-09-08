import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Request, Response } from 'express';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { getDataFromTree } from '@apollo/client/react/ssr';

import { Routes } from '../client/Routes';
import { client, context } from './apollo';
import { Html } from './Html';

export const renderer = (req: Request, res: Response) => {
  const clientInstance = client(req);
  const App = (
    <ApolloProvider client={clientInstance}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </ApolloProvider>
  );

  getDataFromTree(App).then(() => {
    // We are ready to render for real
    const content = renderToString(App);
    const initialState = clientInstance.extract();

    const html = <Html content={content} state={initialState} />;
    res.status(200);
    res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
    res.end();
  });
};
