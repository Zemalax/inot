const express = require('express');
const app = express();
const port = 3322;

app.get('/', (req, res) => {
    res.send(`
    <html>
      <body>
        <h1>Welcome !s</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});