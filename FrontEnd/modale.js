import { getAll } from "./script.js";

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

  modale.addEventListener(`click`, async () => {
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
      trash.setAttribute("id", "trash");
      imgElement.src = work.imageUrl;
      imgDiv.appendChild(trash);
      imgContainer.appendChild(imgDiv);
      imgDiv.appendChild(imgElement);
    }
  }
});
