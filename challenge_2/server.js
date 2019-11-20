const express = require('express');
const bodyParser = require('body-parser');

const app = express();
module.exports.app = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/upload_json', function(req, res) {
  res.status(200).send('YES');
})

// app.get('/', (request, response) => {

// })

// Serve the client files
app.use(express.static(__dirname + '/client'));

var PORT = 3005;
app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));