import { setFilters } from "./filters";
import { createTodo, loadTodos } from "./todos";
import { renderTodos } from "./view";

renderTodos();

document.querySelector("#form-name").addEventListener("submit", function (e) {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();
  if (text.length > 0) {
    createTodo(text);
    renderTodos();
    e.target.elements.text.value = "";
  }
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  setFilters({ searchText: e.target.value.trim() });
  renderTodos();
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    setFilters({ hideCompleted: e.target.checked });
    renderTodos();
  });

window.addEventListener("storage", (e) => {
  console.log(e.key);
  if (e.key === "todos") {
    loadTodos()
    renderTodos();
  }
});
