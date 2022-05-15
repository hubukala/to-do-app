const taskInputBox = document.getElementsByClassName("add-task-input");
const addTaskButton = document.getElementsByClassName("add-task-button");

const newTask = (taskDescription) => {
  taskInputBox[0].value = "";

  const ul = document.getElementById("list-all");

  const li = document.createElement("li");
  li.setAttribute("id", "list-element");

  const inputBox = document.createElement("input");
  inputBox.setAttribute("class", "add-task-input");
  inputBox.type = "text";
  inputBox.value = taskDescription;
  inputBox.readOnly = true;

  const editButton = document.createElement("button");
  editButton.setAttribute("class", "edit-button");
  editButton.innerHTML = "EDIT";

  const doneButton = document.createElement("button");
  doneButton.setAttribute("class", "done-button");
  doneButton.innerHTML = "DONE";

  li.append(inputBox, editButton, doneButton);
  ul.appendChild(li);

  editButton.addEventListener("click", () => {
    editButtonHandler(editButton, inputBox);
  });

  doneButton.addEventListener("click", () => {
    doneButtonHandler(ul, li);
  });
};

const doneButtonHandler = (list, listElement) => {
  list.removeChild(listElement);
};

const editButtonHandler = (editButton, inputBox) => {
  if (editButton.innerHTML === "EDIT") {
    console.log(editButton);
    editButton.innerHTML = "SAVE";
    inputBox.removeAttribute("readonly");
  } else {
    editButton.innerHTML = "EDIT";
    inputBox.readOnly = true;
  }
};

addTaskButton[0].addEventListener("click", () => {
  newTask(taskInputBox[0].value);
});
