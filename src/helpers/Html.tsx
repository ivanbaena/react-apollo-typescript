import React from 'react';

export const Html = ({ content, state }: any) => {
  return (
    <html>
      <body>
        <div id='root' dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(
              /</g,
              '\\u003c'
            )};`,
          }}
        />
        <script src='bundle.js'></script>
      </body>
    </html>
  );
};
