const appData = {"id": 42, "result": "The answer"};
// Pull in lib
const express = require('express');
// Make an app
const app = express();

// Dependencies
const bodyParser = require('body-parser');
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize project folder
app.use(express.static('client'));

const port = 3030;
// Spin up a server
const server = app.listen(port, listening);
// Another way of doing that with an arrow function
// const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});

let data = [];

function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

app.get('/', function (req, res) {
    // res.send("Hello Mr. Teitsworth");
})

app.get('/all', (req, res) => {
    res.send(appData);
})

app.post('/animal', (req, res) => {
  data.push(req.body);
})
