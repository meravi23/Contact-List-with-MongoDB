const express = require('express');
var app = express();

// static is used to serve static files (i.e. not changing dynamically) such as images, CSS files, and JavaScript files
// function signature is: express. static(root, [options]) 
// The root argument specifies the root directory from which to serve static assets.
// double underscore required before dirname
app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function (req, res) {
    console.log("receiving get request");
});

app.listen(3000);
console.log("server running on port 3000");