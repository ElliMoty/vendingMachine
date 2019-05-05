"use strict";
//////////////// BUSINESS LOGIC /////////

const coins = [10, 20, 50, 100, 200];

const chocolateOption = {
  caramel: 250,
  hazelnut: 310,
  organic: 200
};

let totalMoney = 0;
let sum;

//////// cent to dollar ////////////////

function centDollar(input) {
  if (input < 100) {
    sum = `${input}c`;
  } else {
    sum = `$${input / 100}`;
  }
  return sum;
}

////////// selecting coins /////////////

function paidCash(amount) {
  for (let i = 0; i < coins.length; i++) {
    if (amount === coins[i]) {
      totalMoney += amount;
    }
  }
  return centDollar(totalMoney);
}

////////// selecting chocolate //////////

function selectChocolate(price) {
  //   debugger;
  let shoppingTrack;
  Object.keys(chocolateOption).forEach((key, index) => {
    if (totalMoney === price) {
      shoppingTrack = `😀 Successfully done! Enjoy your ${key} chocolate bar 🍫.`;
    } else if (totalMoney > chocolateOption[key]) {
      shoppingTrack =
        "😏 Sorry, you paid more than this chocolate price. 🤓 Please try to enter exact amount one more time.";
    } else {
      shoppingTrack = `🤑 You should pay ${centDollar(
        price - totalMoney
      )} more! 💰`;
    }
  });
  return shoppingTrack;
}

//////////// export ///////////////////

if (typeof module !== "undefined") {
  module.exports.paidCash = paidCash;
  module.exports.selectChocolate = selectChocolate;
}
