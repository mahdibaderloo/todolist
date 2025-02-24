// DOM Elements //

const createTaskButton = document.getElementById("create-task-button");
const taskPopup = document.getElementById("task-popup");
const closePopup = document.getElementById("popup-back-button");
const tasksWrapper = document.getElementById("tasks-wrapper");
const submitTaskButton = document.getElementById("submit-task");

const taskNameInput = document.getElementById("task-name-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const menuButton = document.getElementById("menu-icon-box");
const menu = document.getElementById("menu");

const notificationBox = document.getElementById("notification-box");
const notificationButton = document.getElementById("notification-icon");
const leftIcon = document.getElementById("left-icon");

// Variables //

let tasks = [];

// Task Popup //

createTaskButton.addEventListener("click", () => {
  showTaskPopup();
});

function showTaskPopup() {
  taskPopup.classList.remove("hidden");
}

closePopup.addEventListener("click", () => {
  hideTaskPopup();
});

function hideTaskPopup() {
  taskPopup.classList.add("hidden");
}

// Local Storage //

function getLocalStorageData() {
  return JSON.parse(localStorage.getItem("tasks"));
}

function addDataToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Create Task //

submitTaskButton.addEventListener("click", () => {
  let data = {
    taskName: taskNameInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (getLocalStorageData()) {
    let localTasks = getLocalStorageData();
    tasks = [];
    localTasks.forEach((task) => {
      task.push(task);
    });
  } else {
    tasks.push(data);
    addDataToLocalStorage(tasks);
    clearDom();
    addTasksToDom(tasks);
  }
});

// Add Tasks To DOM //

// function addTasksToDom (tasks) {
//     tasks.forEach (task => {
//         tasksWrapper.insertAdjacentHTML('beforeend', `
//             <li id="task-box" class="w-full flex items-center rounded-xl shadow-[2px_2px_10px_1px_rgba(0,0,0,0.15)] pl-4 pr-4 pt-1 pb-1">
//                 <div id="done" class="w-11 h-11 flex justify-center items-center bg-teal-600 rounded-xl">
//                     <img src="Images/Svg/tick.svg" alt="" id="tick-icon" class="hidden">
//                 </div>
//                 <div id="task-information" class="flex flex-col gap-0.5 ml-4">
//                     <p id="task-title" class="text-2xl font-bold">${task.title}</p>
//                     <div id="time-box">
//                         <p id="task-time" class="text-[14px] opacity-60">9:00 - 23:00</p>
//                         <p id="task-date" class="text-[14px] opacity-60">16 April, Friday</p>
//                     </div>
//                 </div>
//                 <img src="Images/Svg/arrow-right.svg" alt="" id="task-setting-icon" class="ml-auto mr-3 w-3">
//             </li>`)
//     })
// }

// Menu //

menuButton.addEventListener("click", () => {
  if (menu.style.opacity == 0) {
    openMenu();
  } else {
    closeMenu();
  }
});

function openMenu() {
  menu.style.bottom = "0";
  menu.style.opacity = 1;
}

function closeMenu() {
  menu.style.opacity = 0;
  menu.style.bottom = "-40%";
}

// Clear DOM Tasks //

function clearDom() {
  tasksWrapper.innerHTML = "";
}

// Notification //

notificationButton.addEventListener("click", () => {
  openNotification();
});

function openNotification() {
  notificationBox.style.opacity = 1;
  notificationBox.style.left = "0";
}

leftIcon.addEventListener("click", () => {
  closeNotification();
});

function closeNotification() {
  notificationBox.style.left = "-110%";
  notificationBox.style.opacity = 0;
}

// Window //

window.addEventListener("click", (e) => {
  if (
    e.target.id !== "menu" &&
    e.target.id !== "menu-icon-box" &&
    e.target.id !== "menu-icon"
  ) {
    closeMenu();
  }
});
