document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Select form and task list elements
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Handle form submission
  taskForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      const taskInput = document.getElementById("new-task-description").value.trim();

      if (taskInput !== "") {
          addTask(taskInput);
      }

      taskForm.reset(); // Clear input field
  });

  // Function to add a new task
  function addTask(taskText) {
      const li = document.createElement("li"); 
      li.textContent = taskText;

      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "x";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.addEventListener("click", () => li.remove());

      li.appendChild(deleteBtn);
      taskList.appendChild(li);}
});
