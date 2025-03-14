// DOM Elements //

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

const calendar = document.getElementById("calendar");
const dates = document.querySelectorAll("#dates button");

const profile = document.getElementById("profile");

const loginPage = document.getElementById("login");
const loginTitle = document.getElementById("login-title");
const loginLabel = document.getElementById("login-label");
const emailInput = document.getElementById("email-input");
const loginBtn = document.getElementById("login-btn");
const haveAccount = document.getElementById("have-account");
const loginLink = document.getElementById("login-link");

// Variables //

let tasks = [];

// Task Popup //

function createTaskWithDate() {
  calendar.classList.add("hidden");
  showTaskPopup();
}

function showTaskPopup() {
  taskPopup.classList.remove("hidden");
}

closePopup.addEventListener("click", () => {
  hideTaskPopup();
});

function hideTaskPopup() {
  taskPopup.classList.add("hidden");
}

// Select Date //

dates.forEach((date) => {
  date.addEventListener("click", (e) => {
    for (let item of dates) {
      item.classList.remove("bg-teal-600");
    }

    e.target.classList.add("bg-teal-600");
  });
});

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
  menu.style.height = "fit-content";
  menu.style.opacity = 1;
  menu.style.visibility = "visible";
}

function closeMenu() {
  menu.style.opacity = 0;
  menu.style.height = "0";
  menu.style.bottom = "-40%";
  menu.style.visibility = "hidden";
}

// Clear DOM Tasks //

function clearDom() {
  tasksWrapper.innerHTML = "";
}

// Notification //

function openNotification() {
  notificationBox.style.left = "0";
}

function closeNotification() {
  notificationBox.style.left = "-110%";
}

function readNotificationMode(el) {
  let icon = el.children[0].children[1];
  let icon2 = el.children[0].children[2];
  let message = el.children[1];

  if (
    icon.style.transform !== "rotate(180deg)" ||
    icon2.style.transform !== "rotate(180deg)"
  ) {
    openReadMode(el, icon, icon2, message);
  } else {
    closeReadMode(el, icon, icon2, message);
  }
}

function openReadMode(el, icon, icon2, message) {
  el.style.height = "150px";
  icon.style.transform = "rotate(180deg)";
  icon2.style.transform = "rotate(180deg)";
  message.style.height = message.scrollHeight + "px";
}

function closeReadMode(el, icon, icon2, message) {
  el.style.height = "64px";
  icon.style.transform = "rotate(0deg)";
  icon2.style.transform = "rotate(0deg)";
  message.style.height = 0;
}

// Calendar //

function openCalendar() {
  calendar.classList.remove("hidden");
}

function closeCalendar() {
  calendar.classList.add("hidden");
}

// Profile //

function openProfile() {
  profile.classList.remove("hidden");
}

function closeProfile() {
  profile.classList.add("hidden");
}

// Dark Mode //

function darkAndLightMode(el) {
  let switchToLight = el.children[0];
  let switchToDark = el.children[1];
  let html = document.getElementsByTagName("html")[0];

  html.classList.toggle("dark");
}

// Login Page //

function openLoginPage() {
  loginPage.classList.remove("hidden");
  loginPage.classList.add("flex");
}

function closeLoginPage() {
  loginPage.classList.add("hidden");
  loginPage.classList.remove("flex");
}

// Sign Up //

function signUp() {
  if (loginLabel.classList.contains("hidden")) {
    loginTitle.innerHTML = "Sign up";
    loginLabel.classList.remove("hidden");
    loginLabel.classList.add("flex");
    emailInput.classList.remove("hidden");
    loginBtn.innerHTML = "Sign up";
    haveAccount.innerHTML = "Do you have an account?";
    loginLink.innerHTML = "Login";
  } else {
    loginTitle.innerHTML = "Login";
    loginLabel.classList.add("hidden");
    loginLabel.classList.remove("flex");
    emailInput.classList.add("hidden");
    loginBtn.innerHTML = "Login";
    haveAccount.innerHTML = "Don’t have an account?";
    loginLink.innerHTML = "Sign up";
  }
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
