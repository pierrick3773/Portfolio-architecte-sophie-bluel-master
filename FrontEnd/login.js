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
    .then((responseToken) => {
      console.log("responseToken: ", responseToken);
      if (responseToken.ok != true) {
        alert("email ou mot de passe incorrect");
      } else {
        window.location.href = "index.html";
      }
      return responseToken.json();
    })
    .then((dataResponse) => {
      console.log("dataResponse: ", dataResponse);
      localStorage.setItem("token", dataResponse.token);
    });
}

document
  .querySelector(`#logIn form`)
  .addEventListener(`submit`, function (event) {
    event.preventDefault();
    logIn();
  });
