const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/healthcheck', (req, res) => {
  res.send('ok');
});

app.get('/api/human', (req, res) => {
  res.send({ message: 'ok' });
});

app.listen(port, () => {
  console.log(`Server listen at http:localhost:${port}`);
});
