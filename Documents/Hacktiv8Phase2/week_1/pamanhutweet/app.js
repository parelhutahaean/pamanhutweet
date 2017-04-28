const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const twitter = require('./routes/twitter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', twitter);

app.listen(3000);
