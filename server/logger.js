module.exports = (req, res, next) => {
  console.info(
    `${new Date().toISOString()} : "${req.method} ${req.url}" - ${
      req.headers['user-agent']
    }`
  );

  next();
};
