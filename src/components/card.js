import { openPopup } from "./modal";

const cardTemplate = document.querySelector("#card-template").content;

function createCard(card, remove) {
  const createCard = cardTemplate.cloneNode(true);
  createCard.querySelector(".card__title").textContent = card.name;
  const createImg = createCard.querySelector(".card__image");
  createImg.setAttribute("alt", card.name);
  createImg.setAttribute("src", card.link);

  const deleteButton = createCard.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", remove);
  return createCard;
}

function removeCard(evt) {
  const card = evt.target.closest(".card");
  card.remove();
}


const placesList = document.querySelector(".places__list");

const imgPopup = document.querySelector(".popup_type_image");

function likeCard(evt) {
  if (evt.target.type === "button") {
    evt.target.classList.toggle("card__like-button_is-active");
  } else if (evt.target.className === "card__image") {
    const linkImg = imgPopup.querySelector("img");
    linkImg.src = evt.target.src;

    const descriptionImg = imgPopup.querySelector("p");
    descriptionImg.textContent = evt.target.alt;

    openPopup(imgPopup);
  }
}

placesList.addEventListener("click", likeCard);

export { createCard, removeCard, likeCard};
