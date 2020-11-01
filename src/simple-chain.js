const CustomError = require("../extensions/custom-error");

const chainMaker = {
  finalArray: [],
  getLength() {
    return this.finalArray.length;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    
    this.finalArray.push(value);
    //console.log('tets:'+this.finalArray);
    return this;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    const index = position-1;
    //console.log(position);
    if (index > -1) {
      this.finalArray.splice(index, 1);
      return this; 
    } else {
      this.finalArray = [];
      throw new Error('THROWN');
    }

    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.finalArray.reverse();
   // console.log('test'+this.finalArray);
    return this
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
   // finalArray.push('value');
    var chainedArray = '';
    for (let i = 0; i< this.finalArray.length; i+=1) { 
     if ((i ===0)&&(this.finalArray.length === 1)){
      chainedArray = `( ${this.finalArray[i]} )`;
     }
     else if (i === 0) {
       chainedArray = `( ${this.finalArray[i]} )~~`;
     } else if (i !== this.finalArray.length -1) {
      chainedArray = `${chainedArray}( ${this.finalArray[i]} )~~`;
     } else {
      chainedArray = `${chainedArray}( ${this.finalArray[i]} )`;
     }
    }
    this.finalArray = [];
    return chainedArray;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
