document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('taskInput').value;
    const dateInput = document.getElementById('dateInput').value;
    const priorityInput = document.getElementById('priorityInput').value;
    const statusInput = document.getElementById('statusInput').value;

    addTask(taskInput, dateInput, priorityInput, statusInput);

    // Clear input fields
    document.getElementById('taskInput').value = '';
    document.getElementById('dateInput').value = '';
    document.getElementById('priorityInput').value = 'Low';
    document.getElementById('statusInput').value = 'New';
});

function addTask(task, date, priority, statusInput) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `${task} - ${date} -  ${priority} - ${statusInput} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);

    // Add delete functionality
    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li);
    });
}
