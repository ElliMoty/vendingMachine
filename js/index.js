//////////////////////////////////// Vending Machine System

let sum;
let message = document.getElementById("message");
let shopping = document.getElementById("shopping");

function convertToDollar(input) {
  if (input < 100) {
    sum = `${input}c`;
  } else {
    sum = `$${input / 100}`;
  }
  return sum;
}

///////////////////////////////////////////// coins option

function handleClick(event) {
  totalMoney += parseInt(event.target.value, 10);
  message.innerHTML = `You paid ${convertToDollar(totalMoney)}!`;
}

///////////////////////////////////////////// chocolates option
/////// caramel
const caramel = document.getElementById("caramel");

caramel.onclick = () => {
  if (totalMoney > 0) {
    if (totalMoney === 250) {
      shopping.innerHTML =
        " 😀 Successfully done! Enjoy your Caramel Chocolate Bar 🍫.";
      message.innerHTML = "";
      totalMoney = 0;
    } else if (totalMoney < 250) {
      shopping.innerHTML = ` 🤑 You should pay ${convertToDollar(
        250 - totalMoney
      )} more! 💰`;
    } else {
      shopping.innerHTML =
        " 😏 Sorry, your payment is more than the price. 🤓 Please enter correct amount again.";
      totalMoney = 0;
      message.innerHTML = "";
    }
  }

  setTimeout(() => {
    shopping.innerHTML = "";
  }, 3000);
};

///// hazelnut
const hazelnut = document.getElementById("hazelnut");

hazelnut.onclick = () => {
  if (totalMoney === 310) {
    shopping.innerHTML =
      "Successfully done! Enjoy your Hazelnut Chocolate Bar.";
    message.innerHTML = "";
    totalMoney = 0;
  } else if (totalMoney < 310) {
    shopping.innerHTML = `You should pay ${convertToDollar(
      310 - totalMoney
    )} more!`;
  } else {
    shopping.innerHTML =
      "Sorry, your payment is more than the price. Please enter correct amount.";
    totalMoney = 0;
    message.innerHTML = "";
  }

  setTimeout(() => {
    shopping.innerHTML = "";
  }, 3000);
};

//////////////// BUSINESS LOGIC /////////

const coins = ["10c", "20c", "50c", "100c", "200c"];
const chocolateOption = {
  caramel: 2.5,
  hazelnut: 3.1,
  organicRaw: 2
};

let totalMoney = 0;

function paidCash(amount) {
  for (let i = 0; i < coins.length; i++) {
    if (amount === coins[i]) {
      totalMoney += amount;
    }
  }
  return totalMoney;
}

console.log('module: ' + module);
module.exports.paidCash = paidCash;
