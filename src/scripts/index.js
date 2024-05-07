import "../pages/index.css";
import { initialCards } from "./cards";
import { createCard, removeCard, likeCard} from "../components/card";
import { closePopup, openPopup } from "../components/modal";

const cardContainer = document.querySelector(".places__list");



// загрузка стартовых карточек
initialCards.forEach((card) => {
  cardContainer.append(createCard(card, removeCard));
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



