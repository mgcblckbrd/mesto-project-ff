const editProfileButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup_type_edit");
const addProfileButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector(".popup_type_new-card");
const closedPopupsButtons = document.querySelectorAll(".popup__close");
const placesList = document.querySelector(".places__list");
const savePopupButton = document.querySelectorAll(".popup__button");

function openPopup(evt) {
  evt.classList.add("popup_is-animated");
  evt.classList.add("popup_is-opened");
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      const popup = document.querySelector(".popup_is-opened");
      if (popup) {
        closedPopup(popup);
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

function closedPopup(item) {
  item.classList.remove("popup_is-opened");
}

closedPopupsButtons.forEach((closeButton) => {
  const popup = closeButton.closest(".popup");
  closeButton.addEventListener("click", () => {
    closedPopup(popup);
  });
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closedPopup(evt.target);
    }
  });
});

// placesList.addEventListener('click', (evt)=> {
//   console.log(evt)
// })

const formElement = document.forms["edit-profile"];
const nameInput = formElement.name;
const jobInput = formElement.description;

//осознать как сделать закрытие кнопки
 savePopupButton.forEach((closeButton) => {
  const popup = closeButton.closest(".popup");
  closeButton.addEventListener("click", () => {
    closedPopup(popup);
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

export { closedPopup, openPopup };
