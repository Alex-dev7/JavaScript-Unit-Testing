const Calculate = {
    sum(inputArray){
        if(inputArray.length === 0){ return 0} // edge case
        const total = inputArray.reduce((a, cv) => a + cv)
		return total
    }
  }

  module.exports = Calculate;