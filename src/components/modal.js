import { createCard } from "./card";

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup_type_edit");
const addProfileButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector(".popup_type_new-card");
const closedPopupsButtons = document.querySelectorAll(".popup__close");
const savePopupButtons = document.querySelectorAll(".popup__button");

function openPopup(evt) {
  evt.classList.add("popup_is-animated");
  evt.classList.add("popup_is-opened");
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      const popup = document.querySelector(".popup_is-opened");
      if (popup) {
        closePopup(popup);
      }
    }
  });
}

editProfileButton.addEventListener("click", () => {
  openPopup(editProfilePopup);
});

addProfileButton.addEventListener("click", () => {
  openPopup(addCardPopup);
});

function closePopup(item) {
  item.classList.remove("popup_is-opened");
}

closedPopupsButtons.forEach((closeButton) => {
  const popup = closeButton.closest(".popup");
  closeButton.addEventListener("click", () => {
    closePopup(popup);
  });
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(evt.target);
    }
  });
});





const formElement = document.forms["edit-profile"];
const nameInput = formElement.name;
const jobInput = formElement.description;

//осознать как сделать закрытие кнопки
savePopupButtons.forEach((closeButton) => {
  const popup = closeButton.closest(".popup");
  closeButton.addEventListener("click", () => {
    closePopup(popup);
  });
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  const profileName = document.querySelector(".profile__title");
  const profileJob = document.querySelector(".profile__description");

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  formElement.reset();
}

formElement.addEventListener("submit", handleFormSubmit);

export { closePopup, openPopup };
