import { getAll } from "./script.js";
const API_BASE_URL_LOG = "http://localhost:5678/api";

document.addEventListener("DOMContentLoaded", () => {
  const modale = document.querySelector(`.mod`);
  const modalePostDelete = document.querySelector(`.modale-post-delete`);
  const crossClose = document.querySelector(`#crossClose`);

  function closeModale() {
    console.log(crossClose);
    crossClose.addEventListener(`click`, () => {
      modalePostDelete.style.display = "none";
    });
  }

  modale?.addEventListener(`click`, async () => {
    modalePostDelete.style.display = "flex";
    console.log(crossClose);
    closeModale();
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
        deleteWork();
      });
    }
  }
});

async function deleteWork(id) {
  const token = localStorage.getItem("token");
  const trash = document.querySelector(`.fa-trash`);

  try {
    if (trash.id) {
      const response = await fetch(`${API_BASE_URL_LOG}/works/${trash.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      return response;
    }
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
}
