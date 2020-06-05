import { gql } from 'apollo-server-express';
import itemSchema from './items';
const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;


export default [linkSchema, itemSchema];