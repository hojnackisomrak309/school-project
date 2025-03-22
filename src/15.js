// Node.js server side code
const express = require('express');
const app = express();
app.use(express.json());

// Define routes here
app.get('/api/Hello', (req, res) => {
  const name = req.query.name;
  if (name) {
    res.send(`Hello ${name} from Node.js`);
  } else {
    res.status(400).send('Missing query parameter: name');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
