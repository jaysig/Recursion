// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  result = "";
  if (typeof obj === "string"){
    result = obj.quote();
  }
  if (typeof obj !== "object" || obj === null){
      if(typeof obj === "number" || obj === null || typeof obj === "boolean"){
        result += obj + "";
      } else if(typeof obj === "object" && Array.isArray(obj) === false){

      } else if(Array.isArray(obj) === true){
        obj = null;
  } else if(typeof obj !== "object" && Array.isArray(element) === false){
      obj.forEach(function(element){
        if(typeof element === "number"){
          result.push(element + ",");
        } else if(element === null || typeof element === "boolean"){
          result.push(element + ",");
        } else if(typeof element === "object" && Array.isArray(element) === false){
        }else if(Array.isArray(element) === true){
          element = null;

        }else if(typeof element === "object"){
          element.forEach(function(key){
            if (key !== "undefined" && typeof element[key] !== "function" ){
              stringifyJSON(key);
            }
          });
          result.push(element +"");
        }
      });
    }
  return result;
  }
};
