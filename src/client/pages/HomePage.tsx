import React from 'react';

const HomePage = (props: any) => {
  return (
    <div>
      HomePage SSR<button></button>
    </div>
  );
};

const loadData = () => {
  console.log('load data');
};

export default {
  component: HomePage,
  loadData: loadData,
};
