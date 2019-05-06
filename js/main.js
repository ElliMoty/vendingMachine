"use strict";
/////////////// Vending Machine System ////////////

let paymentConfirmation = document.getElementById("receipt");
let shoppingAlarm = document.getElementById("message");

/////////////// coins option //////////////////////

function handleClick(event) {
  const value = parseInt(event.target.value, 10);
  paymentConfirmation.innerHTML = `You paid ${addingCoins(value)}!`;
}

/////////////// chocolates option //////////////////

function chooseChocolateBar(name) {
  const selectChocolateResult = selectChocolate(name);
  shoppingAlarm.innerHTML = selectChocolateResult.shoppingProcessMsg;
  if (selectChocolateResult.resetMoney) {
    paymentConfirmation.innerHTML = "";
  }

  setTimeout(() => {
    shoppingAlarm.innerHTML = "";
  }, 3000);
}
