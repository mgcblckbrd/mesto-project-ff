import "../pages/index.css";
import { initialCards } from "./cards";
import { createCard, removeCard, likeCard } from "../components/card";
import { closePopup, openPopup } from "../components/modal";

const cardContainer = document.querySelector(".places__list");

const newPlace = document.forms["new-place"];

const placesList = document.querySelector(".places__list");
const imgPopup = document.querySelector(".popup_type_image");

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup_type_edit");
const addProfileButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector(".popup_type_new-card");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.name;
const jobInput = formEditProfile.description;

// Загрузка стартовых карточек
initialCards.forEach((card) => {
  cardContainer.append(createCard(card, removeCard, likeCard, openPopupImg));
});

// Добавление новой карточки
newPlace.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const namePlace = newPlace["place-name"];
  const linkPlace = newPlace.link;
  const card = {
    name: namePlace.value,
    link: linkPlace.value,
  };

  cardContainer.prepend(createCard(card, removeCard));
  newPlace.reset();
});

// Открытие попапа с большой картинкой
function openPopupImg(evt) {
  if (evt.target.className === "card__image") {
    const linkImg = imgPopup.querySelector(".popup__image");
    const descriptionImg = imgPopup.querySelector("p");
    linkImg.src = evt.target.src;
    linkImg.alt = evt.target.alt;

    descriptionImg.textContent = evt.target.alt;
    openPopup(imgPopup);
  }
}

placesList.addEventListener("click", openPopupImg);


editProfileButton.addEventListener("click", () => {
  openPopup(editProfilePopup);
});

addProfileButton.addEventListener("click", () => {
  openPopup(addCardPopup);
});

// Редактирование профиля
editProfileButton.addEventListener("click", () => {
  nameInput.placeholder = profileName.textContent;
  jobInput.placeholder = profileJob.textContent;
});


function handleFormCreateCard(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  formEditProfile.reset();
}

formEditProfile.addEventListener("submit", handleFormCreateCard);
export { openPopupImg };
