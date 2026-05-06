let tableBody = document.getElementById("todosBody");

function loadTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(response => response.json())
        .then(data => {
            tableBody.innerHTML = "";
            
            data.forEach(todo => {
                let row = document.createElement("tr");
                
                let statusText = "Не виконано";
                if (todo.completed == true) {
                    statusText = "Виконано";
                }

                row.innerHTML = `
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${statusText}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Помилка:", error));
}
loadTodos();

document.getElementById("updateBtn").addEventListener("click", function() {
    loadTodos();
});

document.getElementById("addForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let titleValue = document.getElementById("titleInput").value;
    let statusValue = document.getElementById("statusInput").value;
    
    let statusText = "Не виконано";
    if (statusValue == "true") {
        statusText = "Виконано";
    }

    let row = document.createElement("tr");
    row.innerHTML = `
        <td>Новий</td>
        <td>${titleValue}</td>
        <td>${statusText}</td>
    `;
    
    tableBody.appendChild(row);
    
    document.getElementById("addForm").reset();
});