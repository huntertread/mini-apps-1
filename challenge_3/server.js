const express = require('express');
const bodyParser = require('body-parser');

const db = require('./server/db');

const app = express();
module.exports.app = app;

// need to specify body-parser as middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// need to serve static client files to the server
app.use(express.static('public'));

// need get and post methods


var PORT = 3010;
app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));