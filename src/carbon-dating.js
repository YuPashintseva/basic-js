const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  var res = false;
  var current ='';

  if (!isNaN(Number(sampleActivity))) {
    current =Number(sampleActivity);
  } else if (!isNaN(parseInt(sampleActivity))) {
    current = Number(sampleActivity.split('.')[0]+'.'+sampleActivity.split('.')[1]);
  } else {
    return false;
  }
  if (typeof(sampleActivity)!== "string") {
    res= false;
  } else if ((current<=0)||(current >= 15)) {
      res = false;
  } else {
    res =  Math.ceil(Math.log(15/current)/(0.693/5730));
  }
  return res;
}


//console.log(dateSample('2.3428430852333437'))