export const resolvers = {
  Query: {
    todos: () => [
      {
        id: "0",
        text: "Buy milk",
        completed: false,
      },
      {
        id: "1",
        text: "Sing a song",
        completed: true,
      },
    ],
  },
};
