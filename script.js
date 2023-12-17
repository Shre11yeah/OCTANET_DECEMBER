function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(taskInput.value));
    li.appendChild(span);

    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);

    var completeBtn = document.createElement("button");
    completeBtn.appendChild(document.createTextNode("Complete"));
    completeBtn.onclick = function() {
        span.classList.toggle("completed");
    };
    li.appendChild(completeBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}
