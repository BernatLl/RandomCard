/* eslint-disable */
import "bootstrap";
import "./main.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".spade").classList.add(GenRandomPicks());
  document.querySelector(".cardNumber").innerHTML = GenRandomNumber();
};
let GenRandomNumber = () => {
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
let GenRandomPicks = () => {
  let picks = ["diamond", "heart", "spade", "club"];

  let indexPicks = Math.floor(Math.random() * picks.length);
  return picks[indexPicks];
};
