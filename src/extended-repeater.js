const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  var res = '';
  var separator ='+';
  var additionsep = '';
  var newstr = str;
  var addstring = '';
  var additionRepeatTimes =1;
  var repeatTimes =1;
  var addition = '';

  if (options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  
  if ((options.repeatTimes)&&(options.repeatTimes!== undefined)) {
    repeatTimes = options.repeatTimes;
  }

  if (options.hasOwnProperty("addition")) {
    if ((typeof(options.addition) === "string")||(typeof(options.addition)==="boolean")||(options.addition === null)){
      
      addition = options.addition;
    } else  {
      addition =  Object.prototype.toString.call(options.addition);

      if (addition === "[object Array]") {
        addition = options.addition.join(',');
      }
    }
    

    if (options.additionSeparator) {
      additionsep = options.additionSeparator;
    }

    for(let j=0;j<additionRepeatTimes; j+=1) {
      if (j === (additionRepeatTimes-1)) {
        addstring = addstring+addition;
      } else {
        addstring = addstring+addition+additionsep;
      }
      
    }
    newstr = newstr + addstring;
  }

  
  if (options.separator) {
    separator = options.separator;
  }
  if (repeatTimes) {
    for (let i=0; i <repeatTimes; i+=1) {
      if (i === (repeatTimes-1)) {
        res = res + newstr;  
      } else {
        res = res + newstr+ separator;
      }
    }
  }

  return res;
};
  


//console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));