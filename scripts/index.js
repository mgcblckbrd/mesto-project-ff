// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCards(cards, remove) {
  const createCard = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  createCard.querySelector(".card__title").textContent = cards.name;

  const createImg = createCard.querySelector(".card__image");
  createImg.setAttribute("alt", `${cards.name}`);
  createImg.setAttribute("src", `${cards.link}`);

  const deleteButton = createCard.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", remove);
  return createCard;
}

// @todo: Функция удаления карточки
function removeOneCard(evt) {
  const card = evt.target.closest(".card");
  card.remove();
}

// @todo: Вывести карточки на страницу
function renderInitialCards() {
  initialCards.forEach((cards) => {
    cardContainer.append(createCards(cards, removeOneCard));
  });
}

renderInitialCards();
