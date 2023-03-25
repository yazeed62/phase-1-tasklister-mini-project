const form = document.querySelector("#create-task-form");
const taskList = document.querySelector("#tasks");


form.addEventListener("submit", function(e) {

  e.preventDefault();

  
  const newTaskInput = document.querySelector("#new-task-description");
  const newTaskDescription = newTaskInput.value;

  
  newTaskInput.value = "";

  const newTaskListItem = document.createElement("li");
  newTaskListItem.innerText = newTaskDescription;

  
  taskList.appendChild(newTaskListItem);
});