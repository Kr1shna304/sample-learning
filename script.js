let tasks = 0;

function openModal() {
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function addTask() {
const title = document.getElementById('taskTitle').value;
const description = document.getElementById('taskDescription').value;

if (title.trim() === '') {
alert('Title is required!');
return;
}
if (description.trim() === '') {
alert('Description is required!');
return;
}

tasks++;

const taskBox = document.createElement('div');
taskBox.className = 'task-box';

const taskInfoDiv = document.createElement('div');
taskInfoDiv.className = 'task-info';

// Task number and Title
taskInfoDiv.innerHTML = `${tasks}) <strong>Title:</strong> ${title}`;

// Dropdown list
const dropdown = document.createElement('select');
dropdown.className = 'task-dropdown';
const options = ['New', 'In Progress', 'Completed'];

options.forEach(option => {
const optionElement = document.createElement('option');
optionElement.value = option;
optionElement.text = option;
dropdown.appendChild(optionElement);
});

taskInfoDiv.appendChild(dropdown);

// Description
const descriptionDiv = document.createElement('div');
descriptionDiv.style.marginLeft = '20px'; // Adjust the margin as needed
descriptionDiv.innerHTML = `<br><strong>Description:</strong> ${description}`;

taskInfoDiv.appendChild(descriptionDiv);
taskBox.appendChild(taskInfoDiv);

document.getElementById('taskListContainer').appendChild(taskBox);

closeModal();
}