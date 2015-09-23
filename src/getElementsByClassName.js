// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//Default pulls an array of each instance of the class and all of its child elements
var getElementsByClassName = function(className
){
  var result = [];
  var classes = [];
  var bodyE = document.body.childNodes;
  //Get an array of classes
  //For each Class pass in chconld nodes
  //concat that to one array
  //push that array into result.
  for (var i =0;i<bodyE.length;i++){
    if(bodyE[i].className !== undefined && bodyE[i].className !== ""){
      classes.push(bodyE[i]);
    }
  }
  classes.forEach(function(aClass){
    if(className === aClass.className.split(' ')){
      result.push(aClass);
    }
  });
  return result;
  //document.body
  // document.body, element.childNodes, and element.classList
};

//Testing for First child did not work
