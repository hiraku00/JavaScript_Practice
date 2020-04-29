const USERS_API = "https://jsonplaceholder.typicode.com/users";

// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// function
function addList(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
}

async function getUsers() {
    // data exchange
    const res = await fetch(USERS_API);
    const users = await res.json();
    return users;
}

async function listUsers() {
    // data exchange
    const users = await getUsers();
    // DOM operation
    users.forEach(addList);
}

// Event
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
