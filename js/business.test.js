const vendingMachine = require("./business");

////// entering wrong coin ///////
describe("enter wrong coin", () => {
  test("pay 10c", () => {
    expect(vendingMachine.addingCoins(10)).toBe("10c");
  });

  test("pay 5c", () => {
    expect(() => vendingMachine.addingCoin(5)).toThrow();
  });
});

/////// paying too much money /////////////////
describe("pay too much money", () => {
  beforeAll(() => vendingMachine.resetTotalMoney());

  test("pay 10c", () => {
    expect(vendingMachine.addingCoins(10)).toBe("10c");
  });

  test("pay 20c", () => {
    expect(vendingMachine.addingCoins(20)).toBe("30c");
  });

  test("pay 50c", () => {
    expect(vendingMachine.addingCoins(50)).toBe("80c");
  });

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$1.8");
  });

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$2.8");
  });

  test("select caramel chocolate bar", () => {
    expect(
      vendingMachine.selectChocolate("caramel").shoppingProcessMsg
    ).toEqual(
      "😏 Sorry, you paid more than enough. Please try to enter the exact amount one more time."
    );
  });
});

/////// paying not enough //////////////
describe("pay not enough money", () => {
  beforeAll(() => vendingMachine.resetTotalMoney());

  test("pay 50c", () => {
    expect(vendingMachine.addingCoins(50)).toBe("50c");
  });

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$1.5");
  });

  test("select hazelnut chocolate bar", () => {
    expect(
      vendingMachine.selectChocolate("hazelnut").shoppingProcessMsg
    ).toEqual(`🤑 You should pay $1.6 more! 💰`);
  });
});

/////// paying enough and select favorite bar ///////////
// 1- organic bar
describe("pay enough money", () => {
  beforeAll(() => vendingMachine.resetTotalMoney());

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$1");
  });

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$2");
  });

  test("select organic raw chocolate bar", () => {
    expect(
      vendingMachine.selectChocolate("organic_raw").shoppingProcessMsg
    ).toEqual(`😀 Successfully done! Enjoy your organic raw chocolate bar. 🍫`);
  });
});

