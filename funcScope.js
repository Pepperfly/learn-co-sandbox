var myScope = outerFunction();
 
// the stringified version of `innerScope()`

function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}

console.log(myScope);
