var getElementsByClassNameA = function(className){
  var result = [];
  var classes = [];
  var body = document.body;
  var classer = function(nodes){
    for (var i =0;i<nodes.childNodes.length;i++){
      console.log(nodes.childNodes[i].classList);
      if(nodes.childNodes[i].className !== undefined && nodes.childNodes[i].classList.contains(className)){
        classes.push(nodes.childNodes[i]);
        classer(nodes.childNodes[i]);
      } else if (nodes.childNodes[i].childNodes !== undefined){
        classer(nodes.childNodes[i]);
      }
    }
  };
  classer(body);
  return classes;
};





// var getElementsByClassNameA = function(className){
//   var result = [];
//   var classes = [];
//   var body = document.body;
//   var classer = function(nodes){
//     if (classes.length === 0 || nodes === undefined){
//       nodes = body;
//     }
//     for (var i =0;i<nodes.childNodes.length;i++){
//       if(nodes.childNodes[i].className !== undefined && nodes.childNodes[i].className !== ""){
//         classes.push(nodes.childNodes[i]);
//         classer(nodes.childNodes[i]);
//       }
//     }
//   };
//
//   if (classes.length === 0){
//     classer();
//   }
//   //classes has three elements
//     classes.forEach(function(element,index){
//       if(element.firstChild === null){
//         tester.push(element);
//         tester.slice(index,1);
//       }else{
//         console.log("testing");
//         classer(element);
//       }
//     });
//       return tester;
//   // classes.forEach(function(aClass){
//   //   var test = aClass.className.split(' ');
//   //   test.forEach(function(name){
//   //     if(className === name){
//   //       result.push(aClass);
//   //     }
//   //   });
//   //
//   // });
//   // return result;
// };
