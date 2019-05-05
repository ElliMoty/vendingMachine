const vendingMachine = require("./business");

beforeEach(() => {
  // vendingMachine.resetTotalMoney();
});

test("paid 10c", () => {
  expect(vendingMachine.paidCash(10)).toBe("10c");
});

test("paid 20c", () => {
  expect(vendingMachine.paidCash(20)).toBe("30c");
});

test("paid 50c", () => {
  expect(vendingMachine.paidCash(50)).toBe("80c");
});

test("paid $1", () => {
  expect(vendingMachine.paidCash(100)).toBe("$1.8");
});

test("paid $1", () => {
  expect(vendingMachine.paidCash(100)).toBe("$2.8");
});

test('you paid $2.8.', () => {
  expect(vendingMachine.selectChocolate("caramel")).toEqual("😏 Sorry, you paid more than this chocolate price. 🤓 Please try to enter exact amount one more time.")
});
