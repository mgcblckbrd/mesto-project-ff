

// открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_is-animated");
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupByEsc);
  document.addEventListener("mousedown", closePopupByOverlay);
  document.addEventListener("submit", function submitPopup() {
    closePopup(popup);
  });
}

// закрытие попапа
function closePopup(item) {
  item.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupByEsc);
  document.removeEventListener("mousedown", closePopupByOverlay);
  document.removeEventListener("submit", function submitPopup() {
    closePopup(popup);
  });
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



export { closePopup, openPopup };
