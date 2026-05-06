let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const sortBtn = document.getElementById("sortBtn");

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onchange = function() {
            task.completed = checkbox.checked;
            saveAndRender();
        };

        let span = document.createElement("span");
        span.textContent = task.text;
        span.className = "task-text";
        if (task.completed) {
            span.classList.add("completed");
        }

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Видалити";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            tasks.splice(index, 1);
            saveAndRender();
        };

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

addBtn.onclick = function() {
    let text = taskInput.value.trim();
    if (text !== "") {
        let newTask = {
            text: text,
            completed: false,
            timestamp: Date.now()
        };
        tasks.push(newTask);
        taskInput.value = "";
        saveAndRender();
    } else {
        alert("Введіть текст завдання!");
    }
};

let isSortedDesc = false;

sortBtn.onclick = function() {
    if (isSortedDesc) {
        tasks.sort((a, b) => a.timestamp - b.timestamp);
        sortBtn.textContent = "Сортувати за датою додавання (нові спочатку)";
    } else {
        tasks.sort((a, b) => b.timestamp - a.timestamp);
        sortBtn.textContent = "Сортувати за датою додавання (старі спочатку)";
    }
    isSortedDesc = !isSortedDesc;
    saveAndRender();
};

renderTasks();