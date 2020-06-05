export default {
  Query: {
    items: (parent, args, {
      models
    }) => {
      return Object.values(models.items);
    },
    item: (parent, {
      id
    }, {
      models
    }) => {
      return models.items[id]
    }
  }
}