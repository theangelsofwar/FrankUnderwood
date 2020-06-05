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
  },
  Mutation: {
    createNewItem: (parent, {
      name,
      origin,
      price
    }, {
      models
    }) => {
      const id = uuidv4();
      const newItem = {
        id,
        name,
        origin,
        price
      }
      models.items[id] = newItem;
      return newItem;
    },

    deleteItem: (parent, {
      id
    }, {
      models
    }) => {
      const {
        [id]: item, ...otherItems
      } = models.items
      if (!item) {
        return false
      }
      models.items = otherItems
      return true
    }
  },
}