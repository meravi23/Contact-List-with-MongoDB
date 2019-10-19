const express = require('express');
const app = express();
const mongojs = require('mongojs');
const db = mongojs('contactlist', ['contactlist']);
const bodyParser = require('body-parser');

// static is used to serve static files (i.e. not changing dynamically) such as images, CSS files, and JavaScript files
// function signature is: express. static(root, [options]) 
// The root argument specifies the root directory from which to serve static assets.
// double underscore required before dirname
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {
    console.log("I received a GET request");
    
    db.contactlist.find(function(err, docs) {
        console.log(docs);
        res.json(docs);        
    })
});

app.post('/contactlist', function(req, res) {
    console.log(req.body); // requires body-parser  
    db.contactlist.insert(req.body, function(err, doc) {
        res.json(doc);
    }) 
});

app.listen(3000);
console.log("server running on port 3000");