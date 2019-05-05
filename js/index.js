"use strict";
/////////////// Vending Machine System ////////////

let message = document.getElementById("message");
let shopping = document.getElementById("shopping");

/////////////// coins option //////////////////////

function handleClick(event) {
  const amount = parseInt(event.target.value, 10);
  message.innerHTML = `You paid ${paidCash(amount)}!`;
}

/////////////// chocolates option //////////////////

function pickBar(barPrice) {
  // debugger;
  shopping.innerHTML = selectChocolate(barPrice);

  setTimeout(() => {
    shopping.innerHTML = "";
  }, 3000);
}
