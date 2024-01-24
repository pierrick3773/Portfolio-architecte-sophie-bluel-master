console.log("hello world");
const API_BASE_URL = "http://localhost:5678/api";
console.log(API_BASE_URL);

function logIn() {
  let email = document.querySelector(`#email`).value;
  let password = document.querySelector(`#password`).value;
  console.log(email);
  console.log(password);
  let data = {
    email: email,
    password: password,
  };
  fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((data) => {
      localStorage.setItem(`token`, data.token);
      window.location.href = "index.html";
    })
    .then((response) => {
      if (response.ok != true) {
        console.log("email ou mdp incorrect");
      } else {
        window.location.href("./index.html");
      }
    });
}

document
  .querySelector(`#logIn form`)
  .addEventListener(`submit`, function (event) {
    event.preventDefault();
    logIn();
  });
