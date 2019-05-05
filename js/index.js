/////////////// Vending Machine System //////////////////

let message = document.getElementById("message");
let shopping = document.getElementById("shopping");

let sum;
function convertToDollar(input) {
  if (input < 100) {
    sum = `${input}c`;
  } else {
    sum = `$${input / 100}`;
  }
  return sum;
}

/////////////// coins option //////////////////////

function handleClick(event) {
  amount = parseInt(event.target.value, 10);
  message.innerHTML = `You paid ${convertToDollar(paidCash(amount))}!`;
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

