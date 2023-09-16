// assert.ok() allows you to compare values and throw errors as needed using one function call. The small, human-readable format of the functions will help you make a more expressive test suite
const assert = require('assert')





// Both the describe and it functions accept two parameters: a descriptive string and a callback function. Though the functions are flexible, they are commonly used in the structure above: nest describe blocks to resemble the structure of your implementation code and write individual tests in it blocks. This makes your test suite isolated, maintainable, and expressive.

describe('Math', () => {
    describe('.min', () => {
        it('returns the argument with the lowest value', () => {

        })
        it('returns -Infinity when no arguments are provided', () => {
            // Your test goes here
          })
    })
})



describe('+', () => {
    it('returns the sum of its arguments', () => {
      // Write assertion here
      // If an argument passed to assert.ok() evaluates to false, an AssertionError is thrown. The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console.
      assert.ok(3 + 4 === 7);
    });
  });