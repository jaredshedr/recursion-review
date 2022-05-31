// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  var returnArray = [];
  node = node || document.body;
  if (node.classList && node.classList.contains(className)) {
    returnArray.push(node);
  }
  if (node.childNodes) {
    node.childNodes.forEach(function (elem) {
      returnArray = returnArray.concat(getElementsByClassName(className, elem));
    });
  }
  return returnArray;
};
