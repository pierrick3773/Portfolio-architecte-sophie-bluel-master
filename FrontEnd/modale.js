const API_BASE_URL = "http://localhost:5678/api";
const modale = document.querySelector(`.mod`);
const modalePostDelete = document.querySelector(`.modale-post-delete`);
const crossClose = document.querySelector(`#crossClose`);

function closeModale() {
  console.log(crossClose);
  crossClose.addEventListener(`click`, () => {
    modalePostDelete.style.display = "none";
  });
}

modale.addEventListener(`click`, () => {
  modalePostDelete.style.display = "flex";
  console.log(crossClose);
  closeModale();
  getAll();
  displayWorksModale(works);
});
import { getAll } from "./script.js";
console.log(getAll);

function displayWorksModale(works) {
  const imgContainer = document.querySelector(`.gallery-modale`);
  console.log(imgContainer);
  for (const work of works) {
    const imgDiv = document.createElement("figure");
    const imgElement = document.createElement("img");
    imgElement.src = work.imageUrl;
    imageContainer.appendChild(imgDiv);
    imgDiv.appendChild(imgElement);
  }
}
