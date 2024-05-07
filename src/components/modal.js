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





// openPopup closePopup closePopupByEsc closePopupByOverlay

editProfileButton.addEventListener("click", () => {
  openPopup(editProfilePopup);
});

addProfileButton.addEventListener("click", () => {
  openPopup(addCardPopup);
});

// закрытие попапа
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





const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.name;
const jobInput = formEditProfile.description;

//осознать как сделать закрытие кнопки
savePopupButtons.forEach((closeButton) => {
  const popup = closeButton.closest(".popup");
  closeButton.addEventListener("click", () => {
    closePopup(popup);
  });
});

function handleFormCreateCard(evt) {
  evt.preventDefault();
  const profileName = document.querySelector(".profile__title");
  const profileJob = document.querySelector(".profile__description");

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  formEditProfile.reset();
}

formEditProfile.addEventListener("submit", handleFormCreateCard);

export { closePopup, openPopup };
