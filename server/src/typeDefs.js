const { gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
  type Query {
    todos: [TODO!]!
  }
  type TODO {
    id: ID!
    text: String!
    completed: Boolean!
  }
`;
