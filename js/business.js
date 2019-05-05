//////////////// BUSINESS LOGIC /////////

const coins = [10, 20, 50, 100, 200];

const chocolateOption = {
  caramel: 250,
  hazelnut: 310,
  organic: 200
};

let totalMoney = 0;
let shoppingTrack;

function paidCash(amount) {
  for (let i = 0; i < coins.length; i++) {
    if (amount === coins[i]) {
      totalMoney += amount;
    }
  }
  return totalMoney;
}

function selectChocolate(price) {
  Object.keys(chocolateOption).forEach(key => {
    price = chocolateOption[key];
    if (totalMoney === price) {
      shoppingTrack = `😀 Successfully done! Enjoy your ${key} chocolate bar 🍫.`;
    } else if (totalMoney < chocolateOption[key]) {
      shoppingTrack = `🤑 You should pay ${price - totalMoney} more! 💰`;
    } else {
      shoppingTrack =
        "😏 Sorry, you paid more than this chocolate price. 🤓 Please try to enter exact amount one more time.";
    }
  });
  return shoppingTrack;
}

module.exports.paidCash = paidCash;
module.exports.selectChocolate = selectChocolate;
