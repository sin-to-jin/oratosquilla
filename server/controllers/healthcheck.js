const name = 'healthcheck';

const index = (req, res) => {
  res.send({ message: 'ok' });
};

module.exports = {
  name,
  index,
};
