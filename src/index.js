document.addEventListener("DOMContentLoaded", function() {

  // write your code here
  let taskForm = document.getElementById('create-task-form');
  let taskList = document.getElementById('tasks');
  let taskInput = document.getElementById('new-task-description');
  let priorityInput = document.getElementById('task-priority');
  let dueDateInput = document.getElementById('task-due-date');
  let sortSelect = document.getElementById('sort-tasks');
  let durationInput = document.getElementById('task-duration');
  let userInput = document.getElementById('task-user');

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let taskValue = taskInput.value.trim();
    let priorityValue = priorityInput.value;
    let durationValue = durationInput.value.trim();
    let dueDateValue = dueDateInput.value;
    let userValue = userInput.value.trim();

    if (taskValue === '') return; 

    let li = document.createElement('li');
    li.innerHTML = `${taskValue} | User: ${userValue} | Duration: ${durationValue} | Due: ${dueDateValue}`;
    
    if (priorityValue === 'high') {
      li.style.color = 'red';
    } else if (priorityValue === 'medium') {
      li.style.color = 'yellow';
    } else {
      li.style.color = 'green';
    }

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit Task';
    li.appendChild(editButton);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    durationInput.value = '';
    taskInput.value = '';
    dueDateInput.value = '';
    userInput.value = '';

    deleteButton.addEventListener('click', function() {
      taskList.removeChild(li);
    });

    editButton.addEventListener('click', function() {
      durationInput.value = durationValue;
      taskInput.value = taskValue;
      userInput.value = userValue;
      priorityInput.value = priorityValue;
      dueDateInput.value = dueDateValue;

      taskList.removeChild(li);
    });
  });

  sortSelect.addEventListener('change', function() {
    let tasks = Array.from(taskList.children);
    tasks.sort(function(a, b) {
      let firstPriority = getPriorityValue(a.style.color);
      let secondPriority = getPriorityValue(b.style.color);

      if (sortSelect.value === 'ascending') {
        return firstPriority - secondPriority;
      } else {
        return secondPriority - firstPriority;
      }
    });

    taskList.innerHTML = '';
    tasks.forEach(function(task) {
      taskList.appendChild(task);
    });
  });

  function getPriorityValue(color) {
    if (color === 'red') {
      return 1; 
    } else if (color === 'yellow') {
      return 2; 
    } else {
      return 3; 
    }
  }
});
