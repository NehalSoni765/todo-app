import moment from "moment";
import { v4 as uuidv4 } from "uuid";
let todos = [];

const loadTodos = () => {
  todos = localStorage.getItem("todos");
  try {
    return todos ? JSON.parse(todos) : [];
  } catch (e) {
    return [];
  }
};

const saveTodos = () => localStorage.setItem("todos", JSON.stringify(todos));

const getTodos = () => loadTodos();

const createTodo = (text) => {
  const timestamp = moment().valueOf();
  const uuid = uuidv4();
  todos.push({
    title: text,
    completed: false,
    uuid: uuid,
    createDate: timestamp,
    updateDate: timestamp,
  });
  saveTodos();
};

const removeTodo = (uuid) => {
  const index = todos.findIndex((val) => val.uuid === uuid);
  if (index > -1) {
    todos.splice(index, 1); //index,how many want ot delete
    saveTodos(todos);
  }
};

const toggleTodo = (uuid) => {
  const todo = todos.find((val) => val.uuid === uuid);
  if (todo) {
    todo.completed = !todo.completed;
  }
  saveTodos(todos);
};

loadTodos();

export { loadTodos,saveTodos, getTodos, removeTodo, createTodo, toggleTodo };
