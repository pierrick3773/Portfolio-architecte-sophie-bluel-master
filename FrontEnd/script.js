console.log("hello world");

const API_BASE_URL = "http://localhost:5678/api";
// appel de works et categories via api au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  getAll();
});
async function getAll() {
  const works = await fetch(`${API_BASE_URL}/works`)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  const category = await fetch(`${API_BASE_URL}/categories`)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  displayFilter(works, category);
}

function displayWorks(works) {
  const imageContainer = document.querySelector(`.gallery`);
  console.log(imageContainer);
  // affichage des projets
  for (const work of works) {
    const imgDiv = document.createElement("figure");
    const imgElement = document.createElement("img");
    const imgCap = document.createElement(`figcaption`);
    const categoryID = document.createElement(`categroyId`);
    imgElement.src = work.imageUrl;
    imgElement.alt = work.title;
    imgCap.textContent = work.title;
    categoryID.id = work.categoryId;
    console.log(`figcaption`);
    console.log(imageContainer);
    imageContainer.appendChild(imgDiv);
    imgDiv.appendChild(imgElement);
    imgDiv.appendChild(imgCap);
    imgDiv.appendChild(categoryID);
  }
}
function displayFilter(works, categories) {
  displayWorks(works);
  const buttonContainer = document.querySelector(`.buttonCat`);
  console.log(buttonContainer);

  let buttonTous = document.querySelector(`.selected`);

  buttonTous.addEventListener(`click`, () => {
    const galleryFilter = document.querySelector(`.gallery`);
    galleryFilter.innerHTML = ``;
    displayWorks(works);

    const allFilterButtons = document.querySelectorAll(".filter");
    allFilterButtons.forEach((button) => button.classList.remove("selected"));

    buttonTous.classList.add("selected");
  });

  for (const category of categories) {
    const filterButton = document.createElement(`button`);
    filterButton.id = category.id;
    filterButton.textContent = category.name;
    filterButton.className = `filter`;
    buttonContainer.appendChild(filterButton);

    filterButton.addEventListener(`click`, () => {
      const filteredArray = works.filter(
        (work) => work.categoryId == category.id
      );
      console.log(filteredArray);
      const galleryFilter = document.querySelector(`.gallery`);
      galleryFilter.innerHTML = ``;

      const allFilterButtons = document.querySelectorAll(".filter, .selected");
      allFilterButtons.forEach((button) => button.classList.remove("selected"));

      filterButton.classList.add("selected");

      displayWorks(filteredArray);
    });
  }
}
// affichage mode edit
token = localStorage.getItem("token");
const editHeader = document.querySelector(`.edition`);
const editLink = document.querySelector(`.fa-lien`);
const logStatus = document.querySelector(`#log`);
// const logoutButton = document.querySelector(`#log`);
const loginButton = document.querySelector(`#log`);
function EditMode() {
  if (token != null) {
    editHeader.style.display = "flex";
    editLink.style.display = "flex";
    logStatus.innerHTML = "logout";
    logStatus.classList.remove(`logStatus`);
    logStatus.classList.add(`logOut`);
    // const logoutButton = document.querySelector(`.logOut`);
    // logoutButton.addEventListener(`click`, () => {
    //   logOut();
    // });
  } else {
    logOut();
  }
}
EditMode();
// logout et renvoi vers la page index initiale
function logOut() {
  logStatus.classList.add(`logStatus`);
  logStatus.innerHTML = "login";
  localStorage.removeItem("token");
  // window.location.href = "index.html";
}

// loginButton.addEventListener(`click`, logOut());

loginButton.addEventListener(`click`, () => {
  logStatus.classList.add(`logStatus`);
  window.location.href = "login.html";
});

const logoutButton = document.querySelector(`.logOut`);

logoutButton?.addEventListener(`click`, () => {
  // logStatus.classList.add(`logOut`);
  logStatus.innerHTML = "login";
  localStorage.removeItem("token");
  window.location.href = "index.html";
  logStatus.classList.add(`logStatus`);
});

// // ouverture modale
// const openModale = function (e) {
//   e.preventdefault();
//   const target = document.querySelector(e.target.getAttribute(`href`));
//   target.style.display = null;
// };

// document.querySelectorAll(`.js-modal`).forEach((a) => {
//   a.addEventListener(`click`, openModale);
// });
