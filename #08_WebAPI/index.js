const USERS_API = "https://jsonplaceholder.typicode.com/users";

async function callAPI() {
    const res = await fetch(USERS_API);
    const users = await res.json();
    console.log(users);
}

callAPI();

// then (async/await の方が後発のため、よく使われる)
function callAPIWithThen() {
    fetch(USERS_API)
    .then(function(res) {
        return res.json();
    })
    .then(function(users) {
        console.log(users);
    });
}

callAPIWithThen();

// XMLHttpRequest (昔の使い方。これを使うと進捗が分かる)
function callAPIWithXhr() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", USERS_API);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = function() {
        console.log(xhr.response);
    };
}

callAPIWithXhr();
