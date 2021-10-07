const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const app = express();

app.use(cors());
app.use(helmet());
app.use(hpp());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

const logger = require('./logger.js');
app.use(logger);

const router = require('./routes.js');
app.use(router);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listen at http://localhost:${port}`);
});
