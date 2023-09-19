const assert = require("assert");
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('will test if the output of 5! is equal to 120', () => {
      // setup
      const expectedResult = 120
      const input = 5

      // exercise
      const result = Calculate.factorial(input)

      // verification
      assert.strictEqual(result, expectedResult)
    })

      it('will test if the output of 3! is equal to 6', () => {
      // setup
      const expectedResult = 6
      const input = 3

      // exercise
      const result = Calculate.factorial(input)

      // verification
      assert.strictEqual(result, expectedResult)
    })

    it('returns 1 when you pass in 0', () => {
      // setup 
      const expectedResult = 1
      const input = 0

      // exercice
      const result = Calculate.factorial(input)

      // verification
      assert.strictEqual(result, expectedResult)
    })
  });
});