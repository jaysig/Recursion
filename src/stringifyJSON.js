// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var sjsT = function(obj){
  return JSON.stringify(obj);
};
var stringifyJSON = function(obj) {
  result = "";
  if (typeof obj === "string") {
    result = '"'+obj+'"';
  } else if (typeof obj !== "object" || obj === null) {
        if (typeof obj === "number" || obj === null || typeof obj === "boolean") {
          result += obj + "";
        } else if (typeof obj === "object" && Array.isArray(obj) === false) {
        }
    }
    else if (Array.isArray(obj)) {
      test = "";
      obj.forEach(function(item,index){
        if(Array.isArray(item)){
          test += stringifyJSON(item);
          //'['+item+']'
        } else if (typeof item === "string"){
          test += '"'+item+'"';
        } else if(typeof item === "object" && Array.isArray(item) === false){
          console.log(item);
          test += stringifyJSON(item);
        } else {
          test += item;
        }
        if (index < obj.length -1){
          test += ",";
        }
      });
      result = '['+test+']';
      // result = "[]";
      //Covers Arrays
    }
    else if (typeof obj === "object" && Array.isArray(obj) === false) {
      //(typeof obj !== "object" && Array.isArray(element) === false)
      //Traditional Objects
      test = "";
      keyArr = Object.keys(obj);
      counter = 0;
      for (var key in obj){
        if(typeof key === "object" && Array.isArray(key) === false){
          test += stringifyJSON(key);
        } else if (Array.isArray(key) === true){
          test += stringifyJSON(key);
        } else {
          keyA = stringifyJSON(key);
          test += keyA + ":";
        }
        if(typeof obj[key] === "object" && Array.isArray(obj[key]) === false && obj[key] !== null){
          test += stringifyJSON(obj[key]);
          if(keyArr.length-1 !== 0){
              test += ",";
          }
        } else if (Array.isArray(obj[key]) === true || obj[key] === null){
          test += stringifyJSON(obj[key]);
        } else if (typeof obj[key] === "function" || obj[key] === undefined){
          test = "";
        }else {
          oKey = stringifyJSON(obj[key]);
          test += oKey;
        }
        if(counter < keyArr.length-1 && keyArr.length-1 !== 0){
          console.log(keyArr.length-1);
          test += ",";
        }
        counter++;

      }
      result = '{'+test+'}';
    }
    return result;
};
var sjsN = stringifyJSON;
