import "../pages/index.css";
import { initialCards } from "./cards";
import { createCard, removeCard } from "../components/card";

const cardContainer = document.querySelector(".places__list");




// загрузка стартовых карточек
initialCards.forEach((card) => {
  cardContainer.append(createCard(card, removeCard));
});
