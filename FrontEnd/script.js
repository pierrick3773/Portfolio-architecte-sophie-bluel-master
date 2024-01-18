console.log("hello world");

const API_BASE_URL = "http://localhost:5678/api";

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

  displayImages(works, category);
}

function displayWorks(works) {
  const imageContainer = document.querySelector(`.gallery`);
  console.log(imageContainer);

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
function displayImages(works, categories) {
  displayWorks(works);
  const buttonContainer = document.querySelector(`.buttonCat`);
  console.log(buttonContainer);

  for (const category of categories) {
    const filterButton = document.createElement(`button`);
    filterButton.id = category.id;
    filterButton.textContent = category.name;
    filterButton.className = `filter filter_selec`;
    buttonContainer.appendChild(filterButton);
    filterButton.addEventListener(`click`, () => {
      // test const de filtre
      const filteredArray = works.filter(
        (work) => work.categoryId == category.id
      );
      console.log(filteredArray);
      const galleryFilter = document.querySelector(`.gallery`);
      galleryFilter.innerHTML = ``;
      displayWorks(filteredArray);
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  getAll();
});
