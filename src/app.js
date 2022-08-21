/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let icon1 = document.getElementById("upCard");
  let icon2 = document.getElementById("footCard");
  let randomIndex = Math.floor(Math.random() * 4);
  let iconsArr = ["♦", "♥", "♠", "♣"];
  icon1.innerHTML = `<p>${iconsArr[randomIndex]}`;
  icon2.innerHTML = `<p>${iconsArr[randomIndex]}`;

  let numberOfCard = document.getElementById("numberCard");
  let indexCard = Math.floor(Math.random() * 10);
  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];
  numberOfCard.innerHTML = `<p>${cardNumber[indexCard]}</p>`;
};

function changeCard() {
  let icon1 = document.getElementById("upCard");
  let icon2 = document.getElementById("footCard");
  let randomIndex = Math.floor(Math.random() * 4);
  let iconsArr = ["♦", "♥", "♠", "♣"];
  icon1.innerHTML = `<p>${iconsArr[randomIndex]}`;
  icon2.innerHTML = `<p>${iconsArr[randomIndex]}`;

  let numberOfCard = document.getElementById("numberCard");
  let indexCard = Math.floor(Math.random() * 10);
  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];
  numberOfCard.innerHTML = `<p>${cardNumber[indexCard]}</p>`;
}
let buttonToChange = document.getElementById("buttonChange");
buttonToChange.addEventListener("click", changeCard);
