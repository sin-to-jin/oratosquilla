const name = 'animal';

const index = (req, res) => {
  res.send({ message: 'animal: ok' });
};

const show = (req, res) => {
  res.send({ message: `animal: ok [${req.params.animalId}]` });
};

module.exports = {
  name,
  index,
  show,
};
