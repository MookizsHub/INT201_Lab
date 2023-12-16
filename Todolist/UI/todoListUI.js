function todoUserUI() {
function showTodoItem(newId, newDescription) {
    // Create div element for todo item
    const todoItemDiv = document.createElement("div");
    todoItemDiv.classList.add("todoItem");
    todoItemDiv.id = newId;
  
    // Create p element for todo description
    const description = document.createElement("p");
    description.textContent = newDescription;
  
    // Create buttons for 'Not done' and 'Remove'
    const notDoneButton = document.createElement("button");
    notDoneButton.textContent = "Not done";
  
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
  
    // Append elements to the todo item div
    todoItemDiv.appendChild(description);
    todoItemDiv.appendChild(notDoneButton);
    todoItemDiv.appendChild(removeButton);
  
    // Append todo item div to the container
    listTodoContainer.appendChild(todoItemDiv);
  }
  
  // Function to show the number of done todos
  function showNumberOfDone(numberOfDone) {
    const doneParagraph = document.getElementById("done");
    doneParagraph.textContent = `Number of Done: ${numberOfDone}`;
  }
  
  // Function to show the number of not done todos
  function showNumberOfNotDone(numberOfNotDone) {
    const notDoneParagraph = document.getElementById("notDone");
    notDoneParagraph.textContent = `Number of Not Done: ${numberOfNotDone}`;
  }
}

module.exports = todoUserUI