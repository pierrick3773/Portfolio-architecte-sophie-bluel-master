function deleteWork(workId) {
  fetch(`${API_BASE_URL_LOG}/works/${workId}`, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`La suppression a échoué`);
      }
      return response.json();
    })
    .then(() => {
      console.log("Élément supprimé avec succès", workId);
      const deletedElement = document.getElementById(workId);
      if (deletedElement) {
        deletedElement.parentElement.remove();
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la suppression de l'élément", error);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
  const modale = document.querySelector(`.mod`);
  const modalePostDelete = document.querySelector(`.modale-post-delete`);
  const crossClose = document.querySelector(`#crossClose`);

  function closeModale() {
    crossClose.addEventListener("click", () => {
      modalePostDelete.style.display = "none";
    });
  }

  modale?.addEventListener("click", async () => {
    modalePostDelete.style.display = "flex";
    closeModale();
    const { works } = await getAll();
    displayWorksModale(works);
  });

  function displayWorksModale(works) {
    const imgContainer = document.querySelector(`.gallery-modale`);
    imgContainer.innerHTML = ``;

    for (const work of works) {
      const imgElement = document.createElement("img");
      const trash = document.createElement("i");

      trash.classList.add("fa-solid", "fa-trash");
      trash.id = work.id;
      imgElement.id = work.id;
      imgElement.src = work.imageUrl;

      trash.addEventListener("click", () => deleteWork(work.id));

      imgContainer.appendChild(
        document.createElement("figure").append(trash, imgElement)
      );
    }
  }
});
