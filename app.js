function addTodo() {
  let taskTitle = document.getElementById("taskTitle");
  let taskDesc = document.getElementById("taskDesc");
  let todos = document.getElementById("todos");

  if (taskTitle.value.trim() === "" || taskDesc.value.trim() === "") {
    alert("You must enter a todo title and description");
  }

  let li = document.createElement("li");
  li.textContent = taskTitle.value;

  let span = document.createElement("span");
  span.textContent = taskDesc.value;

  todos.appendChild(li);
  todos.appendChild(span);
}
