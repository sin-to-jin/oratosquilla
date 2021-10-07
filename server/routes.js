const express = require('express');
const router = express.Router();

router.get('/healthcheck', (req, res) => {
  res.send('ok');
});

router.get('/api/human', (req, res) => {
  res.send({ message: 'ok' });
});

router.use('/api/human/:humanId', (req, res) => {
  res.send({ message: `ok: ${req.params.humanId}` });
});

module.exports = router;
