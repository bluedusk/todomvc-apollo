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
  type Mutation {
    addTodo(text: String!): TODO!
    updateTodo(id: ID!, text: String): TODO!
    deleteTodo(id: ID!): TODO
    completeAll: Boolean
    deleteCompleted: Boolean
  }
`;
