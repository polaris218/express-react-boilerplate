export default function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
          <head>
            <title>Redux Universal Example</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <div id="root">${html}</div>
            <script>
              window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      '\\u003c',
    )}
            </script>
            <script src="bundle.js"></script>
          </body>
        </html>
    `;
}   