console.log("hello world");
const API_BASE_URL = "http://localhost:5678/api";

const buttonConnecter = document.querySelector(`.connect`);
console.log(buttonConnecter);

// // // // function connect(buttonConnecter, works, categories) {
// // // // buttonConnecter.addEventListener(`click`, () => {
// // // const connect = fetch(`${API_BASE_URL}/users/login`, { method: "post" }).then(
// // //   (response) => {
// // //     //handle response
// // //     console.log(response);
// // //   }
// // // );
// // // // .then((Response) => Response.json())
// // // // .then((data) => {
// // // //   console.log(data);
// // // //   return data;
// // // //   .then token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4"
// // // // });
// // // //  });
// // // // }
// buttonConnecter.addEventListener(`click`, () => {

//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));
// // });

function logIn() {
  const mail = document.getElementById(`email`).value;
  const password = document.getElementById(`password`).value;
  console.log(mail);
  console.log(password);
}
logIn();
let data = {
  email: `mail`,
  password: `password`,
};
console.log(data);

function logToken(data) {
  fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
logToken();
