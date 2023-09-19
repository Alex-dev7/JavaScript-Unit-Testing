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

    /// edge case
    it('returns zero for an empty array', () => {
        // setup 
        const expectedResult = 0
        const inputArray = []
  
        // exercise
        const result = Calculate.sum(inputArray)
  
        // verification
        assert.strictEqual(result, expectedResult)
      })
  });
});


// ---------- Edge Case ---------- //

// An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter — you can think of these as special cases that you need to account for.


// -------    Review
// -------    Test Driven Development with Mocha.

// At a high-level the process is:

// 1. Write The Test — Start with a test describing the functionality we’d like to see.
// 2. Fail The Test — Write code in response to the test that fails.
// 3. Pass The Test — The tests fail and communicate feedback to developers through error messages. It’s our responsibility to read those messages, then respond by writing the minimum amount of code to address those messages.
// 4. Refactor Your Code — See below.


// The development process is guided by the red-green-refactor cycle.

// --- Red

// Write a test that covers the functionality you would like to see implemented. You don’t have to know what your code looks like at this point, you just have to know what it will do.

// Run the test. You should see it fail. Most test runners will output red for failure and green for success. While we say “failure” do not take this negatively. It’s a good sign! By seeing the test fail first, we know that once we make it pass, our code works.

// --- Green

// Read the error message from the failing test, and write as little code as possible to fix the current error message. By only writing enough code to see our test pass, we tend to write less code as a whole. Continue this process until the test passes.

// This may involve writing intermediary features covering lower level functionality which require their own Red, Green, Refactor cycle. The edge-case was an example of this.

// Do not focus on code quality at this point. Be shameless! We simply want to get our new test passing.

// --- Refactor

// Clean up your code, reducing any duplication you may have introduced. This includes your code as well as your tests.

// Treat your test suite with as much respect as you would your live code, as it can quickly become difficult to maintain if not handled with care. You should feel confident enough in the tests you’ve written that you can make your changes without breaking anything.