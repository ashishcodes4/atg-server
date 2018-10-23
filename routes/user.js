const express = require('express');
const router = express.Router();

//index route
router.get('/', (req, res) => {
  res.send('user home page');
})


module.exports = router;