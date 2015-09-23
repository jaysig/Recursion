// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//Default pulls an array of each instance of the class and all of its child elements
var getElementsByClassName = function(className) {
  var classes = [];
  // var body = document.body;
  var classer = function(nodes){
    for (var i =0;i<nodes.childNodes.length;i++){
      if(nodes.childNodes[i].className !== undefined && nodes.childNodes[i].classList.contains(className)){
        classes.push(nodes.childNodes[i]);
        classer(nodes.childNodes[i]);
      } else{
        if (nodes.childNodes[i].childNodes !== undefined){
          classer(nodes.childNodes[i]);
        }
      }
    }
  };
  classer(document);
  return classes;
};
