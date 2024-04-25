import "../pages/index.css";
import { initialCards } from "./cards";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки
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

// @todo: Функция удаления карточки
function removeCard(evt) {
  const card = evt.target.closest(".card");
  card.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
  cardContainer.append(createCard(card, removeCard));
});
