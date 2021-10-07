module.exports = (router, controller, resources, idName) => {
  const root = `/api/${controller.name}`;
  const resource = `:${idName || `${controller.name}Id`}`;
  const able = (actionName) =>
    (!resources || resources.includes(actionName)) &&
    controller.hasOwnProperty(actionName);

  if (able('index')) router.get(root, controller.index);
  if (able('create')) router.post(root, controller.create);
  if (able('show')) router.get(`${root}/${resource}`, controller.show);
  if (able('update')) router.patch(`${root}/${resource}`, controller.update);
  if (able('destroy')) router.delete(`${root}/${resource}`, controller.destroy);
};
