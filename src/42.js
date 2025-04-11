let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
  // Handle route GET request
  res.send('Hello World!');
});

module.exports = router;
