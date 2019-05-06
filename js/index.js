"use strict";
/////////////// Vending Machine System ////////////

let paymentConfirmation = document.getElementById("receipt");
let shoppingAlarm = document.getElementById("message");

/////////////// coins option //////////////////////

function handleClick(event) {
  const amount = parseInt(event.target.value, 10);
  paymentConfirmation.innerHTML = `You paid ${paidCash(amount)}!`;
}

/////////////// chocolates option //////////////////

function chooseChocolateBar(name) {
  // debugger;
  shoppingAlarm.innerHTML = selectChocolate(name);

  setTimeout(() => {
    shoppingAlarm.innerHTML = "";
  }, 3000);
}
