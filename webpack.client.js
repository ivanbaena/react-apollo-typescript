const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts|.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.mjs', '.js', '.jsx', 'tsx', '.gql', '.graphql'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/src'),
  },
  target: 'node',
};
