const modale = document.querySelector(`.mod`);
const modalePostDelete = document.querySelector(`.modale-post-delete`);

modale.addEventListener(`click`, () => {
  modalePostDelete.style.display = "flex";
});
