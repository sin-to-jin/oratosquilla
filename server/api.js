module.exports = (router, controller, resources, idName) => {
  const root = `/api/${controller.name}`;
  const resource = `:${idName || `${controller.name}Id`}`;
  const able = (actionName) => !resources || resources.includes(actionName);

  if (able('index')) router.get(root, controller.index);
  if (able('show')) router.get(`${root}/${resource}`, controller.show);
};
