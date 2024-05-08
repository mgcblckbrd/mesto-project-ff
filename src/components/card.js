const cardTemplate = document.querySelector("#card-template").content;

// Создание карточки
function createCard(card, remove) {
  const createCard = cardTemplate.cloneNode(true);
  const createImg = createCard.querySelector(".card__image");
  const deleteButton = createCard.querySelector(".card__delete-button");

  createCard.querySelector(".card__title").textContent = card.name;
  createImg.setAttribute("alt", card.name);
  createImg.setAttribute("src", card.link);

  deleteButton.addEventListener("click", remove);
  return createCard;
}

// Удаление карточки
function removeCard(evt) {
  const card = evt.target.closest(".card");
  card.remove();
}

// лайк в карточке
const placesList = document.querySelector(".places__list");

function likeCard(evt) {
  if (evt.target.type === "button") {
    evt.target.classList.toggle("card__like-button_is-active");
  }
}

placesList.addEventListener("click", likeCard);

export { createCard, removeCard, likeCard };
