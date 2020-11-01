const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var newArray = [];
  var someVals = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  for (let i=0; i<arr.length; i+=1) {
    
    var currentVal = arr[i];
    
    if (someVals.includes(currentVal)){
      if (currentVal === '--discard-prev') {
        if ((newArray[newArray.length-1] !== undefined)&&(arr[i-1] !== undefined)) {
          if ((newArray[newArray.length-1] === arr[i-1])||((isNaN(newArray[newArray.length-1])) && (isNaN(arr[i-1])))) {
            if (arr[i-2] !== undefined) {
              if (arr[i-2] !== '--discard-next'){
                newArray.pop();
              }
            } else {
              newArray.pop();
            }
            
          }
        }
        
      } else if (currentVal === '--double-next'){
        if (arr[i+1] !== undefined) {
          newArray.push(arr[i+1]);
        }
        
      } else if (currentVal === '--double-prev'){
        if ((newArray[newArray.length-1] !== undefined)&&(arr[i-1] !== undefined)) {          
          if ((newArray[newArray.length-1] == arr[i-1])||((isNaN(newArray[newArray.length-1])) && (isNaN(arr[i-1])))) {
            if (arr[i-2] !== undefined) {
              if (arr[i-2] !== '--discard-next'){
                newArray.push(arr[i-1]);
              }
            } else {
              newArray.push(arr[i-1]);
            }
            
          }
        }
      } else if (currentVal === '--discard-next'){
          i=i+1;      
      }

    } else {  
      newArray.push(currentVal);
    }

  }

  return newArray;

};
