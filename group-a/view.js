import todosView from "./todos";
import counterView from "./counter";
import filtersView from "./filters";

export default (targetElement, state) => {
  const element = targetElement.cloneNode(true);
  const list = element.querySelector(".todo-list");
  const filters = element.querySelector(".filters");
  const counter = element.querySelector(".todo-count");

  list.replaceWith(todosView(list, state));
  filters.replaceWith(filtersView(filters, state));
  counter.replaceWith(counterView(counter, state));

  return element;
};
