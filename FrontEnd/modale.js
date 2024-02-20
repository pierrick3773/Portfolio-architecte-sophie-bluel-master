import { displayFilter, getAll } from "./script.js";

const API_BASE_URL = "http://localhost:5678/api";

// affichage modale delete plus fonctionnement croix et fleche retour
document.addEventListener("DOMContentLoaded", () => {
  const modale = document.querySelector(`.mod`);
  const modaleDelete = document.querySelector(`.modale-delete`);
  const crossClose = document.querySelectorAll(`.crossClose`);
  const buttonAjouter = document.querySelector(`.ajouter`);
  const modalePost = document.querySelector(`.modale-post`);

  const inputFile = document.querySelector(`.buttonAjouter`);
  inputFile.addEventListener(`click`, () => {
    const newWorkButton = document.getElementById("new_Work");
    newWorkButton.click();
    event.preventDefault();
  });

  crossClose.forEach((cross) =>
    cross.addEventListener(`click`, () => {
      modaleDelete.style.display = "none";
      modalePost.style.display = "none";
      console.log("click cross");
    })
  );

  modale?.addEventListener(`click`, async () => {
    modaleDelete.style.display = "flex";
    console.log(crossClose);

    const { works } = await getAll();
    console.log(works);
    displayWorksModale(works);
  });

  function displayWorksModale(works) {
    const imgContainer = document.querySelector(`.gallery-modale`);
    imgContainer.innerHTML = ``;

    // affichage poubelle dynamique avec id = id image
    for (const work of works) {
      const imgDiv = document.createElement("figure");
      const imgElement = document.createElement("img");
      const trash = document.createElement("i");
      trash.classList.add("fa-solid", "fa-trash");
      trash.id = work.id;
      imgElement.id = work.id;
      imgElement.src = work.imageUrl;
      imgDiv.appendChild(trash);
      imgContainer.appendChild(imgDiv);
      imgDiv.appendChild(imgElement);
      trash.addEventListener(`click`, () => {
        console.log("tu clique sur la poubelle debile !");
        deleteWork(work.id);
      });
    }
  }

  buttonAjouter?.addEventListener(`click`, async () => {
    modaleDelete.style.display = "none";
    modalePost.style.display = "flex";
  });

  arrowReturn?.addEventListener(`click`, async () => {
    modaleDelete.style.display = "flex";
    modalePost.style.display = "none";
  });
});

async function deleteWork(id) {
  const token = localStorage.getItem("token");

  // Fetch delete
  try {
    const response = await fetch(`${API_BASE_URL}/works/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
}

// affichage miniature image modale post
const submit = document.querySelector(`.buttonValider`);
const newWorkButton = document.getElementById("new_Work");
const imgPreview = document.getElementById("img-preview");
const logoImg = document.getElementById("logoImg");
const buttonAjouter = document.querySelector(".buttonAjouter");
const stringJpg = document.querySelector(".stringJpg");
await newWorkButton.addEventListener("change", function () {
  getImgData();
});

function getImgData() {
  const files = newWorkButton.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    console.log(fileReader);
    fileReader.addEventListener("load", function () {
      stringJpg.style.display = "none";
      buttonAjouter.style.display = "none";
      logoImg.style.display = "none";
      imgPreview.style.display = "block";
      imgPreview.innerHTML = '<img src="' + this.result + '" />';
    });
  }
}

// modale post nouveu projet
async function postWorks(event) {
  event.preventDefault();

  const token = localStorage.getItem("token");
  console.log(token);

  const addImage = document.querySelector(`#new_Work`).files[0];
  console.log(addImage);
  const addTitle = document.querySelector(`#title`).value;
  console.log(addTitle);
  const addCategory = document.querySelector(`#category`).value;
  console.log(addCategory);

  const formData = new FormData();
  formData.append(`title`, addTitle);
  formData.append(`image`, addImage);
  formData.append(`category`, addCategory);
  console.log([...formData.entries()]);
  console.log(formData.get("title"));
  console.log(formData.get("image"));
  try {
    await fetch(`${API_BASE_URL}/works`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
  } catch {}

  await displayFilter;
}

submit.addEventListener(`click`, postWorks);
