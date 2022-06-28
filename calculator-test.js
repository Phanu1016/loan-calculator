
it('should calculate the monthly rate correctly', function () {
  expect (calculateMonthlyPayment(createValues(20000, 10, 10))).toEqual('264.30')
});


it("should return a result with 2 decimal places", function() {
  expect (calculateMonthlyPayment(createValues(20000, 10, 10)).split(".")[1].length).toEqual(2)
});

it("should not accept invalid inputs", function() {
  expect(() => calculateMonthlyPayment(createValues('a', 10, 10))).toThrowError();
  expect(() => calculateMonthlyPayment(createValues(20000, 'a', 10))).toThrowError();
  expect(() => calculateMonthlyPayment(createValues(20000, 10, 'a'))).toThrowError();
  expect(() => calculateMonthlyPayment(createValues('a', 'b', 10))).toThrowError();
  expect(() => calculateMonthlyPayment(createValues(20000, 'a', 'b'))).toThrowError();
  expect(() => calculateMonthlyPayment(createValues('a', 10, 'b'))).toThrowError();
});

/// etc

function createValues(amount, years, rate){
  return {amount: amount, years: years, rate: rate}
}