const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	var counter = 0;
	for (let i=0; i<matrix.length; i+=1) {
    	for (let j=0; j<matrix[i].length; j+=1) {
	      	if (matrix[i][j] === "^^") {
	        	counter+=1;
	      	}
    	}
  	}
  	return counter;
};
