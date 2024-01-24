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
const data = logIn();

console.log(data);

async function logToken(data) {
  const result = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  console.log(result);
}
buttonConnecter.addEventListener(`click`, () => {
  logToken(data);
});
