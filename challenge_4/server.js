// bring in dependencies
const express = require('express');
const bodyParser = require('body-parser');

// initiate express
const app = express();
// make app available to program via module exports
module.exports.app = app;

// set body parser middleware and set app urlencoded param
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// serve static client files to the server
app.use(express.static('./client/dist'));

// set up get and post routes if needed
app.get('/', function(req, res) {
  if (err) {
    console.error(err)
  } else {
    console.log('SUCCESSFUL GET');
    res.status(200).send('SUCCESSFUL GET');
  }
})

// set server to listen?
var PORT = 3011;
app.listen(PORT, () => {console.log(`app is listening on port: ${PORT}`)});