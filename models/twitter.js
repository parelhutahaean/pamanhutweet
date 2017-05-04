const OAuth = require('oauth');
require('dotenv').config();
var methods = {};

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.API_KEY,
  process.env.API_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

methods.search = (keyword, callback) => {
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${keyword}`,
    process.env.TOKEN, //test user token
    process.env.TOKEN_SECRET, //test user secret
    function (e, data){
      if (e) console.log(e);
      callback(data);
    }
  );
}

methods.recent = (callback) => {
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json`,
    process.env.TOKEN, //test user token
    process.env.TOKEN_SECRET, //test user secret
    function (e, data){
      if (e) console.log(e);
      callback(data);
    }
  );
}

module.exports = methods;
