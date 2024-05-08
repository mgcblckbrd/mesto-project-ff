

const closedPopupsButtons = document.querySelectorAll(".popup__close");

// открытие попапа
function openPopup(evt) {
  evt.classList.add("popup_is-animated");
  evt.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupByEsc);
  document.addEventListener("mousedown", closePopupByOverlay);
  document.addEventListener("submit", () => {
    closePopup(evt);
  });
}

// закрытие попапа
function closePopup(item) {
  item.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupByEsc);
  document.removeEventListener("mousedown", closePopupByOverlay);
}

//закрытие по Esc
function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closePopup(popup);
  }
}

// закрытие по оверлею
function closePopupByOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}

// закрытие попаов по кнопке
closedPopupsButtons.forEach((closeButton) => {
  const popup = closeButton.closest(".popup");
  closeButton.addEventListener("click", () => {
    closePopup(popup);
  });
});

export { closePopup, openPopup };
