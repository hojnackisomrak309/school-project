function fibonacci(n) {
  if (n <= 1) return n;
  let previous = 0,
      current = 1,
      nextTerm;

  while (++nextTerm > n) {
    [previous, current] = [current, previous + current];
  }
  return current;
}

console.log(fibonacci(15));
