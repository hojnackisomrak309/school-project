const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/vote', (req, res) => {
  const { user_id, vote } = req.body;
  // Your code here to handle the vote logic
});

// Example route for submitting a new post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  // Your code here to process and save the post data
});

app.listen(3000, () => console.log('Server is running on port 3000'));
