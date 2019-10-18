const express = require('express');
var app = express();

// static is used to serve static files (i.e. not changing dynamically) such as images, CSS files, and JavaScript files
// function signature is: express. static(root, [options]) 
// The root argument specifies the root directory from which to serve static assets.
// double underscore required before dirname
app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function (req, res) {
    console.log("I received a GET request");
    person1 = {
        name: 'Merav',
        email: "merav@gmail.com",
        phone: "054-555-5555"
    };

    person2 = {
        name: 'John',
        email: "john@hotmail.com",
        phone: "052-222-2222"
    };

    person3 = {
        name: 'Jane',
        email: "jane@yahoo.com",
        phone: "053-333-3333"
    };

    var contactList = [person1, person2, person3];
    // sending contacts in json so that the controller can read it:
    res.json(contactList);
});

app.listen(3000);
console.log("server running on port 3000");