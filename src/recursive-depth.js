/*const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  counter = 0;
  calculateDepth( arr ) {
    console.log(arr)
    if (Object.prototype.toString.call(arr) === '[object Array]') {
      this.counter +=1;
    }
    for (let i=0; i<arr.length; i+=1) {
      if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
        this.calculateDepth(arr[i])
      }
    }

    return this.counter;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

var test = new DepthCalculator();
console.log(test.calculateDepth([1, 2, 3, 4, 5, [1]]))*/

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};