import { getAll } from "./script.js";
const API_BASE_URL_LOG = "http://localhost:5678/api";

document.addEventListener("DOMContentLoaded", () => {
  const modale = document.querySelector(`.mod`);
  const modaleDelete = document.querySelector(`.modale-delete`);
  const crossClose = document.querySelector(`#crossClose`);
  const buttonAjouter = document.querySelector(`.ajouter`);
  const modalePost = document.querySelector(`.modale-post`);
  const inputFile = document.querySelector(`buttonAjouter`);
  crossClose?.addEventListener(`click`, () => {
    closeModale();
    console.log("click cross");
  });
  function closeModale() {
    modaleDelete.style.display = "none";
    modalePost.style.display = "none";
    console.log(crossClose);
  }

  modale?.addEventListener(`click`, async () => {
    modaleDelete.style.display = "flex";
    console.log(crossClose);
    // closeModale();
    const { works } = await getAll();
    console.log(works);
    displayWorksModale(works);
  });

  function displayWorksModale(works) {
    const imgContainer = document.querySelector(`.gallery-modale`);
    imgContainer.innerHTML = ``;
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
    // closeModale();
    inputFile?.addEventListener(`click`, async () => {
      console.log("input");
    });
  });
  inputFile?.addEventListener(`click`, async () => {
    console.log("input");
  });
  arrowReturn?.addEventListener(`click`, async () => {
    modaleDelete.style.display = "flex";
    modalePost.style.display = "none";
    // closeModale();
  });
  inputFile?.addEventListener(`click`, async () => {
    console.log("input");
  });
});

async function deleteWork(id) {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${API_BASE_URL_LOG}/works/${id}`, {
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
const inputFile = document.querySelector(`buttonAjouter`);
inputFile?.addEventListener(`click`, async () => {
  console.log("input");
});

// const buttonAjouter = document.querySelector(`.ajouter`);
// const modalePost = document.querySelector(`.modale-post`);
// const modaleDelete = document.querySelector(`.modale-delete`);
// const arrowReturn = document.querySelector(`#arrowReturn`);
// const crossClose = document.querySelector(`#crossClose`);
// buttonAjouter?.addEventListener(`click`, async () => {
//   modaleDelete.style.display = "none";
//   modalePost.style.display = "flex";
// });
// arrowReturn?.addEventListener(`click`, async () => {
//   modaleDelete.style.display = "flex";
//   modalePost.style.display = "none";
// });
