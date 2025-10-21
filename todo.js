import { saveToLocalStorage, getToLocalStorage } from "./helpers.js";

const log = console.log;

const arrToDo = JSON.parse(getToLocalStorage("tasks")) || [];
const input = document.querySelector("[data-input-todo]");
const button = document.querySelector("[data-btn-add-todo]");
const todoList = document.querySelector(".todo-list");

const taskPattern = (value) => {
  const divTask = document.createElement("div");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  span.textContent = value;
  divTask.append(span, delBtn);
  todoList.append(divTask);

  delBtn.addEventListener("click", (e) => {
    const index = arrToDo.findIndex((item) => item === value);
    arrToDo.splice(index, 1);
    saveToLocalStorage("tasks", arrToDo);
    const delTask = e.target.parentElement;
    delTask.remove();
  });
};

const fnRender = () => {
  arrToDo.forEach((task) => {
    taskPattern(`${task}`);
  });
};

const clickAddTask = () => {
  if (!(input.value.trim() === "")) {
    arrToDo.push(input.value);
    saveToLocalStorage("tasks", arrToDo);
    taskPattern(input.value);
    input.value = "";
  } else {
    alert("Поле не может быть пустым");
  }
};

button.addEventListener("click", () => {
  clickAddTask();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    clickAddTask();
  }
});

fnRender();
