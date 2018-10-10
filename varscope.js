var greeting = "hallo";

function sayHello() {
  var greeting = "hola";
  greeting = "hello";
  return greeting;
}
 
console.log(sayHello());
// Returns "hello",
// This demonstrates that the variable greeting is now pointing to the string "hello" instead of "hola"
//console.log(greeting);

//greeting
// ReferenceError: greeting is not defined
// This demonstrates that the variable greeting is still local instead of global
