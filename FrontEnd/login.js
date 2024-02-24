console.log("hello world");
const API_BASE_URL_ = "http://localhost:5678/api";
console.log(API_BASE_URL_);

async function logIn() {
  let email = document.querySelector(`#email`).value;
  let password = document.querySelector(`#password`).value;
  console.log(email);
  console.log(password);
  let data = {
    email: email,
    password: password,
  };
  const responseToken = await fetch(`${API_BASE_URL_}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  console.log("responseToken: ", responseToken);
  if (responseToken.ok != true) {
    alert("email ou mot de passe incorrect");
    return;
  }

  const dataResponse = await responseToken.json();

  console.log("dataResponse: ", dataResponse);
  localStorage.setItem("token", dataResponse.token);
  window.location.href = "index.html";
}

document
  ?.querySelector(`#logIn form`)
  ?.addEventListener(`submit`, function (event) {
    event.preventDefault();
    logIn();
  });
