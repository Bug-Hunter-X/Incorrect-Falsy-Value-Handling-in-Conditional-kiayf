function foo(a, b) {
  if (a == 0 || b == 0) {
    return 0; // Correct: Handles other falsy values
  }
  // ...rest of the function
}