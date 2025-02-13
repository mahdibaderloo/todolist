// DOM Elements //

const createTaskButton = document.getElementById('create-task-button')
const taskPopup = document.getElementById('task-popup')
const closePopup = document.getElementById('popup-back-button')


// Task Popup //

createTaskButton.addEventListener('click', () => {
    showTaskPopup()
})

function showTaskPopup () {
    taskPopup.classList.remove('hidden')
}

closePopup.addEventListener('click', () => {
    hideTaskPopup()
})

function hideTaskPopup () {
    taskPopup.classList.add('hidden')
}

