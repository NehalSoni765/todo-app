import { getTodos, removeTodo, toggleTodo } from "./todos";
import { getFilters } from "./filters";
const renderTodos = () => {
  const todosElem = document.querySelector("#todos");
  const {searchText,hideCompleted} = getFilters();
  todosElem.innerHTML = "";

  const filterTodos = getTodos().filter((todo) => {
    const searchTextMatch = todo.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const hideCompletedMatch = !hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });
  
  const incomplete = filterTodos.filter((todo) => !todo.completed);
  todosElem.innerHTML = "";
  todosElem.appendChild(generateSummaryDom(incomplete));

  if (filterTodos.length > 0) {
    filterTodos.forEach((todo) => todosElem.appendChild(generateTodoDOM(todo)));
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "There are no to-do to show";
    emptyMessage.classList.add("empty-message");
    todosElem.appendChild(emptyMessage);
  }
};

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const checkbox = document.createElement("input");
  const todoText = document.createElement("span");
  const buttonElem = document.createElement("button");

  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.completed;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener("change", function () {
    toggleTodo(todo.uuid);
    renderTodos();
  });

  todoText.textContent = todo.title;
  containerEl.appendChild(todoText);

  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  buttonElem.textContent = "remove";
  buttonElem.classList.add("button", "button--text");
  todoEl.appendChild(buttonElem);
  buttonElem.addEventListener("click", function () {
    removeTodo(todo.uuid);
    renderTodos();
  });
  return todoEl;
};

const generateSummaryDom = (filterTodos) => {
  const h2element = document.createElement("h2");
  const plural = filterTodos.length == 1 ? "" : "s";
  h2element.classList.add("list-title");
  h2element.textContent = `You have ${filterTodos.length} todo${plural} left`;
  return h2element;
};

export {generateSummaryDom,generateTodoDOM,renderTodos}