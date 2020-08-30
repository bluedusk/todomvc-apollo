export const resolvers = {
  Query: {
    todos: (parent, args, { Todos }) => {
      return Todos.getTodos();
    },
  },
  Mutation: {
    addTodo: (parent, { text }, { Todos }) => {
      const result = Todos.addTodo(text);
      return result;
    },
    deleteTodo: (parent, { id }, { Todos }) => {
      const result = Todos.deleteTodo(id);
      return result;
    },
    updateTodo: (parent, { id, text }, { Todos }) => {
      const result = Todos.updateTodoById(id, text);
      return result;
    },
    deleteCompleted: (_, __, { Todos }) => {
      Todos.deleteCompleted();
      return true;
    },
    completeAll: (_, __, { Todos }) => {
      Todos.completeAll();
      return true;
    },
  },
};
