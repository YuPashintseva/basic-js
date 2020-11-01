const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	//console.log(date);
	var res = 'winter';
	if (date) {
		var month = date.getMonth();
		if (month) {	
			var season = '';
			if (Object.prototype.toString.call(date) === '[object Date]') {
				if (month===11 || (month>=0 && month<2)){
					season='winter';
				} else if (month>=2 && month<5) {
					season = 'spring';
				} else if (month>=5 && month <8) {
					season = 'summer';
				} else if (month>=8 && month<11) {
					season = 'autumn'
				} else {
					season = 'THROWN';
				}
				
			} else {
				throw new Error('THROWN');
			}
			res = season;
		} else if (month === 0) {
			season = 'winter';
		} else {
			res = 'THROWN';
		}
	} else {
		res = 'Unable to determine the time of year!';
	}
	//console.log(res);
	//console.log(res.length);
	return res;

};

/*
const deeperFakeDate = {
	toString() {
		return Date.prototype.toString.call(new Date());
	},
	getMonth() {
		return Date.prototype.getMonth.call(new Date());
	},
	getFullYear() {
		return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
	},
	getDate() {
		return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
	},
	getHours() {
		return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
	},
	getMinutes() {
		return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
	},
	getSeconds() {
		return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
	},
	getMilliseconds() {
		return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
	},
	getDay() {
		return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
	}
}
Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

console.log(getSeason(deeperFakeDate));*/