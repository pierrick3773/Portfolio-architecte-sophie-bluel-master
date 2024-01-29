const openModale = function (e) {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute(`href`));
  console.log(target);
  // target.style.display = null;
};

document.querySelectorAll(`.js-modale`).forEach((a) => {
  a.addEventListener(`click`, openModale);
});
