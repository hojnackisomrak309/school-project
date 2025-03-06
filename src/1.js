const getRandomNodeJSCode = () => {
  const code = `
    // Function to generate a random number between 1 and 10
    function getRandomNumber() {
      return Math.floor(Math.random() * 10) + 1;
    }
    
    // Function to generate a random string of length n
    function getRandomString(n) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < n; i++) {
        result += characters[Math.floor(Math.random() * characters.length)];
      }
      return result;
    }
    
    // Function to generate a random boolean value
    function getRandomBoolean() {
      return Math.floor(Math.random() * 2) === 0;
    }
    
    console.log("Random number:", getRandomNumber());
    console.log("Random string:", getRandomString(10));
    console.log("Random boolean:", getRandomBoolean());
  `;
  return code;
};
