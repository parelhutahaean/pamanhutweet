const OAuth = require('oauth');
const twitter = require('../models/twitter')
var methods = {};

methods.search = (req, res) => {
  twitter.search(req.params.keyword, data => {
    res.send(data)
  })
}

methods.recent = (req, res) => {
  twitter.recent(data => {
    res.send(data)
  })
}

module.exports = methods;
