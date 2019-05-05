const vendingMachine = require("./business");

test("paid 10c", () => {
  expect(vendingMachine.paidCash(10)).toBe(10);
});

test("paid 20c", () => {
  expect(vendingMachine.paidCash(20)).toBe(30);
});

test("paid 50c", () => {
  expect(vendingMachine.paidCash(50)).toBe(80);
});

test("paid $1", () => {
  expect(vendingMachine.paidCash(100)).toBe(180);
});

test("paid $1", () => {
  expect(vendingMachine.paidCash(100)).toBe(280);
});

test('you paid $2.8.', () => {
  expect(vendingMachine.selectChocolate(280)).toEqual("😏 Sorry, you paid more than this chocolate price. 🤓 Please try to enter exact amount one more time.")
});
