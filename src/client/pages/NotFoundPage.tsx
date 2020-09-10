import React from 'react';

const NotFoundPage = ({ staticContext }: any) => {
  staticContext.notFound = true;
  return <h1>Oops route not found!</h1>;
};

export default {
  component: NotFoundPage,
};
