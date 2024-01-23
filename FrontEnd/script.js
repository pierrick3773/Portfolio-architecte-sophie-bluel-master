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
  // fonction pour le button "tous"
  let buttonTous = document.querySelector(`.selected`);
  // buttonTous.className = `selected`;
  buttonTous.addEventListener(`click`, () => {
    //   const buttonTous = document.querySelector(`.selected`);
    const galleryFilter = document.querySelector(`.gallery`);
    galleryFilter.innerHTML = ``;
    displayWorks(works);

    // buttonTous.classList.add(`selected`);
  });

  for (const category of categories) {
    // création des button
    const filterButton = document.createElement(`button`);
    filterButton.id = category.id;
    filterButton.textContent = category.name;
    filterButton.className = `filter`;
    buttonContainer.appendChild(filterButton);
    // création du tri par catégories au click button
    filterButton.addEventListener(`click`, () => {
      const buttonGreen = document.querySelector(`.selected`);

      const filteredArray = works.filter(
        (work) => work.categoryId == category.id
      );
      console.log(filteredArray);
      const galleryFilter = document.querySelector(`.gallery`);

      galleryFilter.innerHTML = ``;
      // button vert au click
      buttonGreen.classList.remove(`selected`);
      filterButton.classList.add(`selected`);

      displayWorks(filteredArray);
    });
  }
}
