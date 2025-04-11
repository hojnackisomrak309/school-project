function sumOfSquares(limit) {
  let total = 0;
  
  for (let i = 1; i <= limit; i++) {
    total += i * i;
  }
  
  console.log(`The sum of squares up to ${limit} is: ${total}`);
}

sumOfSquares(5);
