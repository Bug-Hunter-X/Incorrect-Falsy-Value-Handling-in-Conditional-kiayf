function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: Should handle other falsy values
  }
  // ...rest of the function
}