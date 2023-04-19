
it("should calculate the monthly rate correctly", function () {
  const values = {amount: 300000, years: 30, rate: 8};
  expect(calculateMonthlyPayment(values)).toEqual("2201.29");
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 300333, years: 30, rate: 8.3};
  expect (calculateMonthlyPayment(values)).toEqual("2266.87")
});

/// etc