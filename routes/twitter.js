const express = require('express');
const router = express.Router();
const twitterController = require('../controllers/twitter');

router.get('/', (req, res) => {
  res.send('Test OK');
})

router.get('/search/:keyword', twitterController.search);

router.get('/recent', twitterController.recent)

module.exports = router;
