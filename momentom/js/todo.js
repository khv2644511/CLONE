const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //오 조금 이해가 안간다..
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  console.log("I will paint", newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// const savedlist = localStorage.getItem("Todolist");
// console.log(savedlist);

// function paintList(savedlist) {
//   console.log(savedlist);
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   li.appendChild(span);

//   li.innerText = savedlist;
//   toDoList.appendChild(li);
// }

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
  //   localStorage.setItem = ("newTodo", li);
  //   console.log(listTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  parseToDos.forEach((item) => console.log("this is the turn of", item));
}
