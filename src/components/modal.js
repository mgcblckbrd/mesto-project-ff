// это работа кнопки закрытия
function closedPopup(item) {
    item.classList.remove("popup_is-opened");
  }
  
  const closedPopupsButtons = document.querySelectorAll(".popup__close");
  
  closedPopupsButtons.forEach((closeButton) => {
    const popup = closeButton.closest(".popup");
    closeButton.addEventListener("click", () => {
      closedPopup(popup);
    });
  });
  const editProfileButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup_type_edit");

const addProfileButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector(".popup_type_new-card");
// колбэк открытия полапов
function openPopup(evt) {
    evt.classList.add("popup_is-opened");
  }
  
  // слушатели открытия попапов
  editProfileButton.addEventListener("click", () => {
    openPopup(editProfilePopup);
  });
  
  addProfileButton.addEventListener("click", () => {
    openPopup(addCardPopup);
  });

  export {closedPopup, openPopup};