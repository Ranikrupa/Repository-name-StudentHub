
function showMessage() {
    alert("Hello! StudentHub is working!");
}
function addTask() {
    let taskInput = document.getElementById("taskInput");

    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let newTask = document.createElement("li");

    newTask.innerText = task;

    

    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

    deleteButton.onclick = function() {

    newTask.remove();
newTask.onclick = function() {

    newTask.classList.toggle("completed");

    let completedTasks =
        document.querySelectorAll("#taskList .completed");

    document.getElementById("completedNumber").innerText =
        completedTasks.length;

    updateProgress();
};
    taskNumber.innerText = taskList.children.length;

    let completedTasks =
        document.querySelectorAll("#taskList .completed");

    document.getElementById("completedNumber").innerText =
        completedTasks.length;
};

newTask.appendChild(deleteButton);

taskList.appendChild(newTask);
saveTasks();
localStorage.setItem("tasks", taskList.innerText);

    taskInput.value = "";

    let taskNumber = document.getElementById("taskNumber");

    taskNumber.innerText = taskList.children.length;
}

function addNote() {

    let noteInput = document.getElementById("noteInput");

    let note = noteInput.value;

    if (note === "") {
        alert("Please enter a note!");
        return;
    }

    let noteList = document.getElementById("noteList");

    let newNote = document.createElement("li");

    newNote.innerText = note;

    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

    deleteButton.onclick = function() {

    newTask.remove();


    taskNumber.innerText = taskList.children.length;
    saveNotes();

    let completedTasks =
        document.querySelectorAll("#taskList .completed");

    document.getElementById("completedNumber").innerText =
        completedTasks.length;

    updateProgress();
    saveTasks();
};
newNote.appendChild(deleteButton);
saveNotes();

noteList.appendChild(newNote);

    noteInput.value = "";

    let noteNumber = document.getElementById("noteNumber");

    noteNumber.innerText = noteList.children.length;
}
function updateAttendance() {

    let attended = Number(document.getElementById("attendedClasses").value);

    let total = Number(document.getElementById("totalClasses").value);

    if (total === 0) {
        alert("Please enter total classes!");
        return;
    }

    let percentage = (attended / total) * 100;

    document.getElementById("attendanceNumber").innerText =
        percentage.toFixed(1) + "%";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function searchTasks() {

    let searchText = document.getElementById("taskSearch").value.toLowerCase();

    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(function(task) {

        let taskText = task.childNodes[0].textContent.toLowerCase();

        if (taskText.includes(searchText)) {
            task.style.display = "list-item";
        } else {
            task.style.display = "none";
        }

    });
}
function searchNotes() {

    let searchText =
        document.getElementById("noteSearch").value.toLowerCase();

    let notes = document.querySelectorAll("#noteList li");

    notes.forEach(function(note) {

        let noteText =
            note.childNodes[0].textContent.toLowerCase();

        if (noteText.includes(searchText)) {
            note.style.display = "list-item";
        } else {
            note.style.display = "none";
        }

    });
}
function updateProgress() {

    let totalTasks = document.querySelectorAll("#taskList li").length;

    let completedTasks =
        document.querySelectorAll("#taskList .completed").length;

    let percentage = 0;

    if (totalTasks > 0) {
        percentage = (completedTasks / totalTasks) * 100;
    }

    document.getElementById("progressBar").style.width =
        percentage + "%";

    document.getElementById("progressText").innerText =
        percentage.toFixed(0) + "% completed";
}
function addEvent() {

    let name = document.getElementById("eventName").value;
    let date = document.getElementById("eventDate").value;

    if (name === "" || date === "") {
        alert("Please enter event name and date!");
        return;
    }

    let events = document.getElementById("events");

    let newEvent = document.createElement("div");

    newEvent.className = "event";

    newEvent.innerHTML =
        "<h3>" + name + "</h3>" +
        "<p>Date: " + date + "</p>";

    events.appendChild(newEvent);

    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
}
function changeProfileImage() {

    let file = document.getElementById("imageInput").files[0];

    if (file) {

        let image = document.getElementById("profileImage");

        image.src = URL.createObjectURL(file);
    }
}
function changeProfileImage() {

    let file = document.getElementById("imageInput").files[0];

    if (file) {

        let image = document.getElementById("profileImage");

        image.src = URL.createObjectURL(file);
    }
}
localStorage.setItem("studentHubStarted", "yes");
function saveTasks() {

    let tasks = [];

    let taskItems = document.querySelectorAll("#taskList li");

    taskItems.forEach(function(task) {

        tasks.push({
            text: task.childNodes[0].textContent,
            completed: task.classList.contains("completed")
        });

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {

    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks === null) {
        return;
    }

    let tasks = JSON.parse(savedTasks);

    tasks.forEach(function(task) {

        let taskList = document.getElementById("taskList");

        let newTask = document.createElement("li");

        newTask.innerText = task.text;

        if (task.completed) {
            newTask.classList.add("completed");
        }

        taskList.appendChild(newTask);
    });
}
loadTasks();
function saveNotes() {

    let notes = [];

    let noteItems = document.querySelectorAll("#noteList li");

    noteItems.forEach(function(note) {

        notes.push(note.childNodes[0].textContent);

    });

    localStorage.setItem("notes", JSON.stringify(notes));
}
function saveProfile() {

    let name = document.getElementById("studentName").value;
    let course = document.getElementById("studentCourse").value;
    let semester = document.getElementById("studentSemester").value;

    let profile = {
        name: name,
        course: course,
        semester: semester
    };

    localStorage.setItem("profile", JSON.stringify(profile));
}
function updateProfile() {
    document.getElementById("profileDetails").innerHTML =
    "<p><strong>Name:</strong> " + name + "</p>" +
    "<p><strong>Course:</strong> " + course + "</p>" +
    "<p><strong>Semester:</strong> " + semester + "</p>";

saveProfile();

alert("Profile updated successfully!");
function loadProfile() {

    let savedProfile = localStorage.getItem("profile");

    if (savedProfile === null) {
        return;
    }

    let profile = JSON.parse(savedProfile);

    document.getElementById("studentName").value = profile.name;
    document.getElementById("studentCourse").value = profile.course;
    document.getElementById("studentSemester").value = profile.semester;

    document.getElementById("profileDetails").innerHTML =
        "<p><strong>Name:</strong> " + profile.name + "</p>" +
        "<p><strong>Course:</strong> " + profile.course + "</p>" +
        "<p><strong>Semester:</strong> " + profile.semester + "</p>";
}

loadProfile();