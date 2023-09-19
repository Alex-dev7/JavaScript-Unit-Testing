const Calculate = {
    factorial(num){
        if(num === 0) {return 1}
        let result = num
        
        while((num - 1 ) !== 0){ 
          result *= (num - 1 )
          num--
        }
        return result
      }
    }
    
    module.exports = Calculate;