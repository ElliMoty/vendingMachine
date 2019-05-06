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

function centDollarSign(input) {
  let result;
  if (input < 100) {
    result = `${input}c`;
  } else {
    result = `$${input / 100}`;
  }
  return result;
}

////////// selecting coins /////////////

function addingCoins(amount) {
  for (let i = 0; i < coins.length; i++) {
    if (amount === coins[i]) {
      totalMoney += amount;
    }
  }
  return centDollarSign(totalMoney);
}

////////// selecting chocolate //////////

function selectChocolate(chocolateName) {
  //   debugger;
  const price = chocolateOption[chocolateName];
  let message;

  if (totalMoney === price) {
    message = `😀 Successfully done! Enjoy your ${chocolateName.replace(
      /_/,
      " "
    )} chocolate bar. 🍫`;
  } else if (totalMoney > price) {
    message =
      "😏 Sorry, you paid more than this chocolate bar price. 🤓 Please try to enter the exact amount one more time.";
    totalMoney = 0;
  } else {
    message = `🤑 You should pay ${centDollarSign(
      price - totalMoney
    )} more! 💰`;
  }

  return message;
}

/////// reset TotalMoney /////////////

function resetTotalMoney() {
  totalMoney = 0;
}

//////////// export ///////////////////

if (typeof module !== "undefined") {
  module.exports.addingCoins = addingCoins;
  module.exports.selectChocolate = selectChocolate;
  module.exports.resetTotalMoney = resetTotalMoney;
}
