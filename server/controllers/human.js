const index = (req, res) => {
  res.send({ message: 'ok' });
};

const show = (req, res) => {
  res.send({ message: `ok: ${req.params.humanId}` });
};

module.exports = {
  index,
  show,
};
