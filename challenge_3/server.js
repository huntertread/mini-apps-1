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

// post method
app.post('/', function(req, res) {
  var params = [req.body.name, req.body.email, req.body.password, req.body.line1, req.body.line2, req.body.city, req.body.state, req.body.zip, req.body.ccnum, req.body.expdate, req.body.cvv, req.body.billingzip]
  queryStr = "INSERT INTO record (name, email, password, line1, line2, city, state, zip, ccnum, expdate, cvv, billingzip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
  db.query(queryStr, params, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      console.log('SUCCESS');
      res.status(200).send(results);
    }
  })
})

var PORT = 3010;
app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));