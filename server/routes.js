const express = require('express');
const router = express.Router();

const api = (name, idName, controller) => {
  const root = `/api/${name}`;
  const action = controller || eval(name);
  const resource = `:${idName || `${name}Id`}`;

  router.get(root, action.index);
  router.get(`${root}/${resource}`, action.show);
};

router.get('/healthcheck', (req, res) => {
  res.send('ok');
});

api('human');

module.exports = router;
