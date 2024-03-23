function addTodo() {
  let taskTitle = document.getElementById("taskTitle");
  let taskDesc = document.getElementById("taskDesc");
  let todos = document.getElementById("todos");

  if (taskTitle.value.trim() === "") {
    alert("You must enter a todo title and description");
  }

  let li = document.createElement("li");
  let span = document.createElement("span");
  let hr = document.createElement("hr");

  // let radio = document.createElement("input");
  // radio.setAttribute("type", "checkbox");

  li.textContent = taskTitle.value;
  span.textContent = taskDesc.value;

  todos.appendChild(li);
  todos.appendChild(hr);
}
