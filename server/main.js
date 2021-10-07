const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./logger.js');
const router = require('./routes.js');
const app = express();
const port = 3001;

app.use(cors());
app.use(helmet());
app.use(logger);
app.use(router);

app.listen(port, () => {
  console.log(`Server listen at http://localhost:${port}`);
});
