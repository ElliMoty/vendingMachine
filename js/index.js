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

function pickBar(name) {
  // debugger;
  shopping.innerHTML = selectChocolate(name);

  setTimeout(() => {
    shopping.innerHTML = "";
  }, 3000);
}
