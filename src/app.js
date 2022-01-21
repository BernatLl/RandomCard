/* eslint-disable */
import "bootstrap";
import "./main.css";

const GenRandomNumber = () => {
  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexNumbers = Math.floor(Math.random() * cardNumber.length);
  return cardNumber[indexNumbers];
};
const GenRandomPicks = () => {
  let picks = ["♦️", "♥️", "♠️", "♣️"];

  let indexPicks = Math.floor(Math.random() * picks.length);
  return picks[indexPicks];
};
const randomPicks = GenRandomPicks();
const cardPick = document.querySelectorAll(".cardpick");
window.onload = () => {
  document.querySelector(".cardNumber").innerHTML = GenRandomNumber();

  cardPick.forEach(item => {
    item.innerHTML = randomPicks;
    if (item.innerHTML === "♦️" || item.innerHTML === "♥️")
      item.style.color = "red";
  });
};
