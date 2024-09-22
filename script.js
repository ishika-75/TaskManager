document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const tasksContainer = document.getElementById('tasks-container');

    function createTaskElement(taskText) {
        const taskBox = document.createElement('div');
        taskBox.className = 'task-box';

        const taskContent = document.createElement('div');
        taskContent.className = 'task-content';

        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.value = taskText;
        taskInput.disabled = true;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', function() {
            taskInput.disabled = !taskInput.disabled;
            taskInput.disabled ? editButton.textContent = 'Edit' : editButton.textContent = 'Save';
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            tasksContainer.removeChild(taskBox);
        });

        taskContent.appendChild(taskInput);
        taskContent.appendChild(editButton);
        taskContent.appendChild(deleteButton);

        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';

        const checkMark = document.createElement('span');
        checkMark.innerHTML = '&#10003;'; // Unicode for check mark

        const messageText = document.createElement('div');
        messageText.textContent = 'Task added successfully';

        successMessage.appendChild(checkMark);
        successMessage.appendChild(messageText);

        taskBox.appendChild(taskContent);
        taskBox.appendChild(successMessage);

        // Display the success message briefly, then remove it
        setTimeout(() => {
            taskBox.removeChild(successMessage);
        }, 3000);

        return taskBox;
    }

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            const taskElement = createTaskElement(taskText);
            tasksContainer.appendChild(taskElement);
            taskInput.value = '';
        }
    });
});
