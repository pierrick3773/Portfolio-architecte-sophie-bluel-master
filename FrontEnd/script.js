console.log("hello world");

const API_BASE_URL = "http://localhost:5678/api";
// appel de works et categories via api au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  getAll();
});
export async function getAll() {
  const worksResponse = await fetch(`${API_BASE_URL}/works`);
  const works = await worksResponse.json();
  console.log(works);

  const categoriesResponse = await fetch(`${API_BASE_URL}/categories`);
  const categories = await categoriesResponse.json();
  console.log(categories);
  return { works, categories };
}
document.addEventListener("DOMContentLoaded", async () => {
  const { works, categories } = await getAll();
  displayFilter(works, categories);
});
export function displayWorks(works) {
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
    imageContainer?.appendChild(imgDiv);
    imgDiv?.appendChild(imgElement);
    imgDiv?.appendChild(imgCap);
    imgDiv?.appendChild(categoryID);
  }
}
export function displayFilter(works, categories) {
  displayWorks(works);
  const buttonContainer = document.querySelector(`.buttonCat`);
  console.log(buttonContainer);

  let buttonTous = document.querySelector(`.selected`);

  buttonTous?.addEventListener(`click`, () => {
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
    buttonContainer?.appendChild(filterButton);

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
const token = localStorage.getItem("token");
const editHeader = document.querySelector(`.edition`);
const editLink = document.querySelector(`.fa-lien`);
const logStatus = document.querySelector(`#log`);
const loginButton = document.querySelector(`#log`);
const filters = document.querySelector(`.buttonCat`);
function EditMode() {
  if (token != null) {
    editHeader.style.display = "flex";
    editLink.style.display = "flex";
    filters.style.display = "none";
    logStatus.innerHTML = "logout";
    logStatus.classList.remove(`logStatus`);
    logStatus.classList.add(`logOut`);
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
}

loginButton.addEventListener(`click`, () => {
  logStatus.classList.add(`logStatus`);
  window.location.href = "login.html";
});

const logoutButton = document.querySelector(`.logOut`);

logoutButton?.addEventListener(`click`, () => {
  logStatus.innerHTML = "login";
  localStorage.removeItem("token");
  window.location.href = "index.html";
  logStatus.classList.add(`logStatus`);
});
console.log("dom recharger");
