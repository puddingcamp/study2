const getTodoCount = (todos) => {
  const notCompleted = todos.filter((todo) => {
    return !todo.completed;
  });

  const { length } = notCompleted;

  if (length === 1) {
    return "1 item left";
  }

  return `${length} items left`;
};

export default (targetElement, { todos }) => {
  const newCounter = targetElement.cloneNode(true);
  newCounter.textContent = getTodoCount(todos);
  return newCounter;
};
