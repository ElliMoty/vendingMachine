"use strict";
//////////////// BUSINESS LOGIC /////////

const coinsOption = [10, 20, 50, 100, 200];

const chocolateOption = {
  caramel: 250,
  hazelnut: 310,
  organic_raw: 200
};

let totalMoney = 0;

//////// cent/dollar sign ///////////////

function centDollarSign(input) {
  let result;

  if (input !== 0) {
    if (input < 100) {
      result = `${input}c`;
    } else {
      result = `$${input / 100}`;
    }
  }
  return result;
}

////////// Validating coin ////////////

function validateCoin(coin) {
  if (coinsOption.indexOf(coin) >= 0) {
    return;
  } else {
    throw new Error(
      `${centDollarSign(
        coin
      )} is not accepted! Please enter only our machine acceptable coins.`
    );
  }
}

////////// Adding coins ////////////////
function addingCoins(amount) {
  validateCoin(amount);
  totalMoney += amount;

  return centDollarSign(totalMoney);
}

////////// selecting chocolate //////////

function selectChocolate(chocolateName) {
  //   debugger;
  const price = chocolateOption[chocolateName];
  let shoppingProcessMsg;
  let resetMoney = false;

  if (totalMoney !== 0) {
    if (totalMoney === price) {
      shoppingProcessMsg = `😀 Successfully done! Enjoy your ${chocolateName.replace(
        /_/,
        " "
      )} chocolate bar. 🍫`;
    } else if (totalMoney > price) {
      shoppingProcessMsg =
        "😏 Sorry, you paid more than enough. Please try to enter the exact amount one more time.";
      resetMoney = true;
      resetTotalMoney();
    } else {
      shoppingProcessMsg = `🤑 You should pay ${centDollarSign(
        price - totalMoney
      )} more! 💰`;
    }
  } else {
    shoppingProcessMsg =
      "Please pay first then select your favorite one! Thank you.";
  }

  return { shoppingProcessMsg, resetMoney };
}

/////// reset TotalMoney /////////////

function resetTotalMoney() {
  totalMoney = 0;
}

//////////// export ///////////////////

if (typeof module !== "undefined") {
  module.exports.validateCoin = validateCoin;
  module.exports.addingCoins = addingCoins;
  module.exports.selectChocolate = selectChocolate;
  module.exports.resetTotalMoney = resetTotalMoney;
}
