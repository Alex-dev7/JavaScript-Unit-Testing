const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      // setup
      const inputArray = [1,2,3]
      const expected = 6

      // exercise
      const result = Calculate.sum(inputArray)

      // verification
      assert.strictEqual(result, expected);
    });

    // Second test 
    it('returns the sum ofa four-item list', () => {
      // Setup 
      const expectedResult = 22;
      const inputArray = [4, 5, 6, 7]

      // Exercise
      const result = Calculate.sum(inputArray)

      // Verification
      assert.strictEqual(result, expectedResult);
    })
  });
});
