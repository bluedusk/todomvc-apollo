import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { Todos } from "./datasource";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: Where we "inject" our fake datasource
  context: {
    Todos: new Todos(),
  },
  // plugins(optional): A small plugin to print log when server receives request
  // More on plugins: https://www.apollographql.com/docs/apollo-server/integrations/plugins/
  plugins: [
    {
      requestDidStart(requestContext) {
        console.log(
          `[${new Date().toISOString()}] - Graphql operationName:  ${
            requestContext.request.operationName
          }`
        );
      },
    },
  ],
  // capture errors
  formatError: (err) => {
    console.log(err);
  },
});

// The `listen` method launches a web server at localhost:4000.
server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀  Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});
