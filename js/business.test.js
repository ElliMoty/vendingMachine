const vendingMachine = require("./business");

////// entering wrong coin ///////////////////////////////////////////////
// 1-
describe("enter wrong coin", () => {
  test("pay 10c", () => {
    expect(vendingMachine.addingCoins(10)).toBe("10c");
  });

  test("pay 5c", () => {
    expect(() => vendingMachine.addingCoin(5)).toThrow();
  });
});

// 2-
describe("enter wrong coin at the beginning", () => {
  test("pay 2c", () => {
    expect(() => vendingMachine.addingCoin(5)).toThrow();
  });
});

/////// paying too much money /////////////////////////////////////////////
// 1- caramel
describe("pay too much money for caramel", () => {
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

// 2- hazelnut
describe("pay too much money for hazelnut", () => {
  beforeAll(() => vendingMachine.resetTotalMoney());

  test("pay 50c", () => {
    expect(vendingMachine.addingCoins(50)).toBe("50c");
  });

  test("pay $2", () => {
    expect(vendingMachine.addingCoins(200)).toBe("$2.5");
  });

  test("pay 20c", () => {
    expect(vendingMachine.addingCoins(20)).toBe("$2.7");
  });

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$3.7");
  });

  test("select hazelnut chocolate bar", () => {
    expect(
      vendingMachine.selectChocolate("hazelnut").shoppingProcessMsg
    ).toEqual(
      "😏 Sorry, you paid more than enough. Please try to enter the exact amount one more time."
    );
  });
});

// 3- organic raw
describe("pay too much money for organic raw", () => {
  beforeAll(() => vendingMachine.resetTotalMoney());

  test("pay 20c", () => {
    expect(vendingMachine.addingCoins(20)).toBe("20c");
  });

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$1.2");
  });

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$2.2");
  });

  test("select organic raw chocolate bar", () => {
    expect(
      vendingMachine.selectChocolate("organic_raw").shoppingProcessMsg
    ).toEqual(
      "😏 Sorry, you paid more than enough. Please try to enter the exact amount one more time."
    );
  });
});

/////// paying not enough /////////////////////////////////////////////////////
// 1- caramel
describe("pay not enough money for caramel", () => {
  beforeAll(() => vendingMachine.resetTotalMoney());

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$1");
  });

  test("pay 20c", () => {
    expect(vendingMachine.addingCoins(20)).toBe("$1.2");
  });

  test("select caramel chocolate bar", () => {
    expect(
      vendingMachine.selectChocolate("caramel").shoppingProcessMsg
    ).toEqual(`🤑 You should pay $1.3 more! 💰`);
  });
});

// 2- hazelnut
describe("pay not enough money for hazelnut", () => {
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

// 3- organic raw
describe("pay not enough money for organic raw", () => {
  beforeAll(() => vendingMachine.resetTotalMoney());

  test("pay 50c", () => {
    expect(vendingMachine.addingCoins(50)).toBe("50c");
  });

  test("pay 10c", () => {
    expect(vendingMachine.addingCoins(10)).toBe("60c");
  });

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$1.6");
  });

  test("select organic raw chocolate bar", () => {
    expect(
      vendingMachine.selectChocolate("organic_raw").shoppingProcessMsg
    ).toEqual(`🤑 You should pay 40c more! 💰`);
  });
});

/////// paying enough  /////////////////////////////////////////////////////////
// 1- caramel
describe("pay enough money for caramel", () => {
  beforeAll(() => vendingMachine.resetTotalMoney());

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$1");
  });

  test("pay 50c", () => {
    expect(vendingMachine.addingCoins(50)).toBe("$1.5");
  });

  test("pay $1", () => {
    expect(vendingMachine.addingCoins(100)).toBe("$2.5");
  });

  test("select caramel chocolate bar", () => {
    expect(
      vendingMachine.selectChocolate("caramel").shoppingProcessMsg
    ).toEqual(`😀 Successfully done! Enjoy your caramel chocolate bar. 🍫`);
  });
});

// 2- hazelnut
describe("pay enough money for hazelnut", () => {
  beforeAll(() => vendingMachine.resetTotalMoney());

  test("pay $2", () => {
    expect(vendingMachine.addingCoins(200)).toBe("$2");
  });

  test("pay 10c", () => {
    expect(vendingMachine.addingCoins(10)).toBe("$2.1");
  });

  test("pay 50c", () => {
    expect(vendingMachine.addingCoins(50)).toBe("$2.6");
  });

  test("pay 50c", () => {
    expect(vendingMachine.addingCoins(50)).toBe("$3.1");
  });

  test("select hazelnut chocolate bar", () => {
    expect(
      vendingMachine.selectChocolate("hazelnut").shoppingProcessMsg
    ).toEqual(`😀 Successfully done! Enjoy your hazelnut chocolate bar. 🍫`);
  });
});

// 3- organic bar
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
