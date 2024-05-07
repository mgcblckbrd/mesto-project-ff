import "../pages/index.css";
import { initialCards } from "./cards";
import { createCard, removeCard, likeCard} from "../components/card";
import { closePopup, openPopup } from "../components/modal";

const cardContainer = document.querySelector(".places__list");



// загрузка стартовых карточек
initialCards.forEach((card) => {
  cardContainer.append(createCard(card, removeCard, likeCard, openPopupImg));
});




const newPlace = document.forms["new-place"]

newPlace.addEventListener('submit', (evt) =>{
  evt.preventDefault();
const namePlace = newPlace['place-name']
const linkPlace = newPlace.link
const card = {
  name: namePlace.value,
  link: linkPlace.value
}

cardContainer.prepend(createCard(card, removeCard));
newPlace.reset()
})

// Открытие попапа с большой картинкой
const placesList = document.querySelector(".places__list");
const imgPopup = document.querySelector(".popup_type_image");
function openPopupImg(evt) {
  if (evt.target.className === "card__image") {
    const linkImg = imgPopup.querySelector(".popup__image");
    linkImg.src = evt.target.src;
    linkImg.alt = evt.target.alt;

    const descriptionImg = imgPopup.querySelector("p");
    descriptionImg.textContent = evt.target.alt;

    openPopup(imgPopup);
  }
}
placesList.addEventListener("click", openPopupImg);

export {openPopupImg}