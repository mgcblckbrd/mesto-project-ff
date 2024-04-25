import "../pages/index.css";
import { initialCards } from "./cards";
import { createCard, removeCard } from "../components/card";

const cardContainer = document.querySelector(".places__list");

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup_type_edit");

const addProfileButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector(".popup_type_new-card");



const closePopupButton = document.querySelector(".popup__close");

// загрузка стартовых карточек
initialCards.forEach((card) => {
  cardContainer.append(createCard(card, removeCard));
});

function openPopup(evt) {
  evt.classList.add("popup_is-opened");
}

function closePopup(popupName) {
  popupName.classList.remove("popup_is-opened");
  
}

editProfileButton.addEventListener("click", () => {
  openPopup(editProfilePopup);
});

addProfileButton.addEventListener("click", () => {
  openPopup(addCardPopup);
});



closePopupButton.addEventListener("click", () => {
  closePopup(evt);
});


