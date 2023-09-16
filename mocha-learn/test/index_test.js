// assert.ok() allows you to compare values and throw errors as needed using one function call. The small, human-readable format of the functions will help you make a more expressive test suite
const assert = require('assert')
const fs = require('fs');
let path, str;




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


  //////// ------- Teardown
//   So far, we’ve been writing just one test using a single it() block. However, in most situations, we will need to write many tests for a particular feature that get executed in succession.

// Running multiple tests can introduce issues if the tests make changes to the testing environment: changes to the environment in one test might affect the next test. Some common changes to an environment include:

// altering files and directory structure
// changing read and write permissions on a file
// editing records in a database
// To address this issue, we often add a teardown step to the end of our tests. The teardown phase makes our tests isolated by resetting the environment before the next test runs. This provides two key benefits:

// Changes to the environment caused by one test do not affect the other tests.
// Isolated tests can be executed in any order!


  describe('appendFileSync', () => {
    it('creates a new file with a string of text', () => {
   
     // Setup
     path = './message.txt';
     str = 'Hello Node.js';
    
     // Exercise: write to file
     fs.appendFileSync(path, str);
   
     // Verify: compare file contents to string
     const contents = fs.readFileSync(path);
     assert.equal(contents.toString(), str);
   
     // Teardown: restore file
    fs.unlinkSync(path);
   });
   
   it('creates a new file with a string of text', () => {
   
     // Setup
     path = './message.txt';
     str = '';
    
     // Exercise: write to file
     fs.appendFileSync(path, str);
   
     // Verify: compare file contents to string
     const contents = fs.readFileSync(path);
     assert.equal(contents.toString(), str);
   
     // Teardown: restore file
    fs.unlinkSync(path);
   });
  });
  

  ///// ------- HOOKS ---------- ///////

//   While execution and verification are unique to each test, setup and teardown are often similar or even identical for multiple tests within a test suite. The Mocha test framework provides functions that enable us to reduce repetition, simplify the scope of each test, and more finely control the execution of our tests.

//   These functions (also referred to as hooks) are:
  
//   beforeEach(callback) - callback is run before each test
//   afterEach(callback) - callback is run after each test
//   before(callback) - callback is run before the first test
//   after(callback) - callback is run after the last test

//   Each hook accepts a callback to be executed at various times during a test. The before... hooks naturally happen before tests and are useful for separating out the setup steps of your tests. Meanwhile, the after... hooks are executed after tests and are useful for separating out the teardown steps of your tests.

// Keep in mind that not all setup and teardown steps should be included in these hooks. Occasionally, you may find that you need to perform some unique setup or teardown for a single test that you don’t want to include in other tests.


describe('appendFileSync', () => {
    // Write hooks above the tests
  before(() => {
  path = './message.txt';
  })
  afterEach(() => {
   fs.unlinkSync(path);
  })
  
    it('writes a string to text file at given path name', () => {
   
     // Setup
     
     str = 'Hello Node.js';
    
     // Exercise: write to file
     fs.appendFileSync(path, str);
   
     // Verify: compare file contents to string
     const contents = fs.readFileSync(path);
     assert.equal(contents.toString(), str);
   
 
   
   });
   
   it('writes an empty string to text file at given path name', () => {
   
     // Setup
     str = '';
    
     // Exercise: write to file
     fs.appendFileSync(path, str);
   
     // Verify: compare file contents to string
     const contents = fs.readFileSync(path);
     assert.equal(contents.toString(), str);
   
  
    
   });
  });