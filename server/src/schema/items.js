import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    items: [Item!]
    item(id: ID!) : Item! 
  }

  extend type Mutation {
    createNewItem(text: String!): Item!
    deleteItem(id: ID!): Booelean!
    updateItem(id: ID!, text: String!): Item!
  }

  type Item {
    id: ID!
    name: String!
    origin: String!
    price: Number!
  }
`;