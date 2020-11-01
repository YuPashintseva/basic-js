const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  var operations = Math.pow(2, disksNumber) - 1;
  var time = Math.floor((3600/turnsSpeed)*operations);
  return { "turns": operations, "seconds": time };
};


