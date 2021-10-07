const name = 'human';

const index = (req, res) => {
  res.send({ message: 'human: ok' });
};

const show = (req, res) => {
  res.send({ message: `human: ok [${req.params.humanId}]` });
};

module.exports = {
  name,
  index,
  show,
};
