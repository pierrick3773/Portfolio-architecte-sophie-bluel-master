console.log("hello world");
const API_BASE_URL = "http://localhost:5678/api";
console.log(API_BASE_URL);

const buttonConnecter = document.querySelector(`.connect`);
console.log(buttonConnecter);

function logIn() {
  const mail = document.getElementById(`email`).value;
  const password = document.getElementById(`password`).value;
  console.log(mail);
  console.log(password);
  return {
    email: mail,
    password: password,
  };
}

async function logToken(data) {
  const result = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok != true) {
      console.log("email ou mdp incorrect");
    } else {
      window.location.assign("./index.html");
    }
  });
}
buttonConnecter.addEventListener(`click`, () => {
  const data = logIn();
  logToken(data);
});
