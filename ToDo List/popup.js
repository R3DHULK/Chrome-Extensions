document.addEventListener('DOMContentLoaded', function () {
    var addButton = document.getElementById('addButton');
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    // Load tasks from storage
    chrome.storage.sync.get(['tasks'], function (result) {
        if (result.tasks) {
            result.tasks.forEach(function (task) {
                addTaskToList(task);
            });
        }
    });

    // Add button click event
    addButton.addEventListener('click', function () {
        var task = taskInput.value.trim();

        if (task !== '') {
            addTaskToList(task);
            saveTasksToStorage();
            taskInput.value = '';
        }
    });

    // ...

    // Add task to the list
    function addTaskToList(task) {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);

        var label = document.createElement('label');
        label.textContent = task;
        li.appendChild(label);

        var editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = task;
        li.appendChild(editInput);

        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        li.appendChild(editButton);

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        // Checkbox change event
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                label.style.textDecoration = 'line-through';
            } else {
                label.style.textDecoration = 'none';
            }

            saveTasksToStorage();
        });

        // Edit button click event
        editButton.addEventListener('click', function () {
            label.style.display = 'none';
            editInput.style.display = 'inline';
            editInput.focus();
        });

        // Edit input blur event
        editInput.addEventListener('blur', function () {
            label.style.display = 'inline';
            editInput.style.display = 'none';
            label.textContent = editInput.value;

            saveTasksToStorage();
        });

        // Edit input keyup event
        editInput.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                editInput.blur();
            }
        });

        // Delete button click event
        deleteButton.addEventListener('click', function () {
            li.remove();
            saveTasksToStorage();
        });
    }
})

// ...

document.addEventListener('DOMContentLoaded', function () {
    // ...

    // Update date and time
    function updateDateTime() {
        var dateTimeElement = document.getElementById('dateTime');
        var currentDateTime = new Date().toLocaleString();
        dateTimeElement.textContent = currentDateTime;
    }

    // ...

    // Call updateDateTime initially
    updateDateTime();

    // Update date and time every second
    setInterval(updateDateTime, 1000);

    // ...
});

// Load stored tasks from storage
function loadTasksFromStorage() {
    chrome.storage.sync.get(['tasks'], function (result) {
        if (result.tasks) {
            tasks = result.tasks;
            renderTasks();
        }
    });
}

// Save tasks to storage
function saveTasksToStorage() {
    chrome.storage.sync.set({ tasks: tasks });
}

document.addEventListener('DOMContentLoaded', function () {
    // ...

    // Load stored tasks
    loadTasksFromStorage();

    // ...

    // Add task to the list
    function addTaskToList(task) {
        // ...

        taskList.appendChild(li);

        tasks.push(task);
        saveTasksToStorage();
    }

    // ...
});
