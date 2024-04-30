const cardTemplate = document.querySelector("#card-template").content;

function createCard(card, remove) {
  const createCard = cardTemplate.cloneNode(true);
  createCard.querySelector(".card__title").textContent = card.name;
  const createImg = createCard.querySelector(".card__image");
  createImg.setAttribute("alt", `${card.name}`);
  createImg.setAttribute("src", `${card.link}`);

  const deleteButton = createCard.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", remove);
  return createCard;
}

function removeCard(evt) {
  const card = evt.target.closest(".card");
  card.remove();
}



export { createCard, removeCard };
