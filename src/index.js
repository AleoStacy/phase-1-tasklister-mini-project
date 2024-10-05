document.addEventListener("DOMContentLoaded", () => {
  // write your code here
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const taskValue = taskInput.value.trim();

    if (taskValue === '') return; 

    const li = document.createElement('li');
    li.textContent = taskValue;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete-button');
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';

    deleteButton.addEventListener('click', function() {
      taskList.removeChild(li);
    });
  });
});
