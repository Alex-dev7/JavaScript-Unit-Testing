const Calculate = {
    sum(inputArray){
        const total = inputArray.reduce((a, cv) => a + cv)
		return total
    }
  }

  module.exports = Calculate;