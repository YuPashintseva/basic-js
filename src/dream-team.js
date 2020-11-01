const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof(members) === "object" && members !== null){
    var resArray = [];
    for (let i=0; i<members.length; i+=1){
      if (typeof(members[i]) === "string" && members[i].trim() !== "") {
        resArray.push(members[i].trim().toUpperCase()[0]);
       resArray.sort();
      }
     
    }
    if (resArray.length >0) {
      return resArray.join("");
    }
  }
  return false;
 };
 