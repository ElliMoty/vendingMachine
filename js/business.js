"use strict";
//////////////// BUSINESS LOGIC /////////

const coins = [10, 20, 50, 100, 200];

const chocolateOption = {
  caramel: 250,
  hazelnut: 310,
  organic_raw: 200
};

let totalMoney = 0;

//////// cent to dollar ////////////////

function centDollar(input) {
  let sum;
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

function selectChocolate(chocolateName) {
  //   debugger;
  const price = chocolateOption[chocolateName];
  let shoppingTrack;

  if (totalMoney === price) {
    shoppingTrack = `😀 Successfully done! Enjoy your ${chocolateName.replace(
      /_/,
      " "
    )} chocolate bar 🍫.`;
  } else if (totalMoney > price) {
    shoppingTrack =
      "😏 Sorry, you paid more than this chocolate price. 🤓 Please try to enter exact amount one more time.";
    totalMoney = 0;
  } else {
    shoppingTrack = `🤑 You should pay ${centDollar(
      price - totalMoney
    )} more! 💰`;
  }

  return shoppingTrack;
}

/////// reset TotalMoney /////////////

function resetTotalMoney() {
  totalMoney = 0;
}

//////////// export ///////////////////

if (typeof module !== "undefined") {
  module.exports.paidCash = paidCash;
  module.exports.selectChocolate = selectChocolate;
  module.exports.resetTotalMoney = resetTotalMoney;
}
