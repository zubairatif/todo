// inputTodo = document.querySelector("#todo-inp");
// todoList = document.querySelector(".todo-list");
// function addTodo() {
//   const newTodo = document.createElement("div");
//   const newTodoContent = document.createTextNode(inputTodo.value);
//   newTodo.appendChild(newTodoContent);
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newTodo, currentDiv);
// }

inputTodo = document.querySelector("#todo-inp");
todoList = document.querySelector(".todo-list");
function addTodo() {
  const newTodo = document.createElement("li");
  const newTodoContent = document.createTextNode(inputTodo.value);
  newTodo.appendChild(newTodoContent);
  todoList.appendChild(newTodo);
}
