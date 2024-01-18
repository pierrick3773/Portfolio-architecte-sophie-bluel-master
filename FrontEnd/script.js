console.log("hello world");

const API_BASE_URL = "http://localhost:5678/api";

function getWorks() {
  return fetch(`${API_BASE_URL}/works`)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .then((data) => {
      displayImages(data);
    });
}

function displayImages(data) {
  const imageContainer = document.querySelector(`.gallery`);
  console.log(imageContainer);

  // test const de filtre
  const filteredArray = data.filter((work) => work.categoryId == 2);
  console.log(filteredArray);

  for (const works of filteredArray) {
    const imgDiv = document.createElement("figure");
    const imgElement = document.createElement("img");
    const imgCap = document.createElement(`figcaption`);
    const categoryID = document.createElement(`categroyId`);
    imgElement.src = works.imageUrl;
    imgElement.alt = works.title;
    imgCap.textContent = works.title;
    categoryID.id = works.categoryId;
    console.log(`figcaption`);
    console.log(imageContainer);
    imageContainer.appendChild(imgDiv);
    imgDiv.appendChild(imgElement);
    imgDiv.appendChild(imgCap);
    imgDiv.appendChild(categoryID);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  getWorks();
  getCategories();
});

function getCategories() {
  return fetch(`${API_BASE_URL}/categories`)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .then((data) => {
      // appeler une function de display button
      displayButton(data);
    });
}

function displayButton(data) {
  const buttonContainer = document.querySelector(`.buttonCat`);
  console.log(buttonContainer);

  for (const categories of data) {
    const filterButton = document.createElement(`button`);
    filterButton.id = categories.id;
    filterButton.textContent = categories.name;
    filterButton.className = `filter filter_selec`;
    buttonContainer.appendChild(filterButton);
  }
}
