function foo(a, b) {
  //Check if both inputs are numbers, if not throw error
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}
console.log(foo(1, 1)); // Output: 2
console.log(foo(1, "1")); // Throws an error