const vendingMachine = require("./index");

test("paid 10c", () => {
  expect(vendingMachine.paidCash("10c")).toBe("10c");
});
