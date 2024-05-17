// script.js
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = todoInput.value.trim();
    if (taskName !== '') {
        addTask(taskName);
        todoInput.value = '';
    }
});

function addTask(taskName) {
    const li = document.createElement('li');
    li.textContent = taskName;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
}
